import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Lenis from 'lenis'
import TribesMap from './components/TribesMap'
import { TRIBES } from './data/tribes'
import { useReducedMotion } from './hooks/useReducedMotion'

const Scene = lazy(() => import('./components/Scene'))

export default function App() {
  const reducedMotion = useReducedMotion()
  const ambient = useRef(0)
  const [activeId, setActiveId] = useState(null)
  const lenisRef = useRef(null)
  const stepEls = useRef({})

  // Scroll suave (Lenis) sincronizado con el ticker de GSAP.
  useEffect(() => {
    if (reducedMotion) return
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    lenisRef.current = lenis
    const raf = (t) => lenis.raf(t * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [reducedMotion])

  // Activa la tribu cuyo "paso" cruza el centro de la pantalla.
  useEffect(() => {
    const steps = document.querySelectorAll('.step')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.dataset.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    steps.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const goTo = (id) => {
    const el = stepEls.current[id]
    if (!el) return
    if (lenisRef.current) lenisRef.current.scrollTo(el, { offset: 0 })
    else el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <main className="relative bg-ink text-offwhite">
      {/* Fondo + ambiente 3D tenue */}
      <div className="bg-ocean-gradient pointer-events-none fixed inset-0 -z-10" />
      <div className="pointer-events-none fixed inset-0 -z-[5] opacity-[0.12] blur-[2px]">
        <Suspense fallback={null}>
          <Scene reducedMotion={reducedMotion} scrollProgress={ambient} />
        </Suspense>
      </div>

      {/* ============ INTRO ============ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="font-display mb-6 text-xs font-medium uppercase tracking-[0.45em] text-gold/80 sm:text-sm">
          Feria de Torá
        </p>
        <h1 className="font-display text-[clamp(2.25rem,7.5vw,6rem)] font-bold leading-[0.92] tracking-tighter text-offwhite">
          La repartición de la
          <br />
          <span className="bg-gradient-to-r from-gold via-offwhite to-amber bg-clip-text text-transparent">
            Tierra de Israel
          </span>
        </h1>
        <p className="font-body mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Cómo se repartió la Tierra de Israel, que Yehoshúa entregó como heredad
          a los hijos de Yaacov. Bajá y recorré, porción por porción, dónde se
          asentó cada una.
        </p>
        <div className="font-body absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[0.7rem] uppercase tracking-[0.35em] text-muted/70">
          Bajá ↓
        </div>
      </section>

      {/* ============ RECORRIDO (mapa fijo + pasos) ============ */}
      <section className="relative">
        {/* Mapa fijo e inclinado */}
        <div className="pointer-events-none sticky top-0 z-0 h-screen w-full">
          <div className="mx-auto flex h-full max-w-7xl items-center px-6 md:pr-[42%]">
            <div className="pointer-events-auto h-[78vh] w-full">
              <TribesMap
                tribes={TRIBES}
                activeId={activeId}
                onPick={goTo}
                reducedMotion={reducedMotion}
              />
            </div>
          </div>
        </div>

        {/* Pasos: una tarjeta por tribu */}
        <div className="relative z-10 -mt-[100vh]">
          <div className="mx-auto max-w-7xl px-6">
            {TRIBES.map((t) => (
              <div
                key={t.id}
                data-id={t.id}
                ref={(el) => (stepEls.current[t.id] = el)}
                className="step flex min-h-screen items-center md:justify-end"
              >
                <article
                  className={`w-full max-w-md rounded-3xl border p-7 backdrop-blur-md transition-colors duration-500 sm:p-9 md:w-[42%] ${
                    activeId === t.id
                      ? 'border-gold/40 bg-ink/85'
                      : 'border-white/5 bg-ink/70'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-display text-xs font-medium uppercase tracking-[0.3em] text-gold/80">
                      {t.side}
                    </p>
                    <span lang="he" className="text-2xl text-gold/90">{t.he}</span>
                  </div>

                  <h2 className="font-display mt-3 text-[clamp(2.25rem,6vw,3.5rem)] font-bold leading-none tracking-tighter text-offwhite">
                    {t.name}
                  </h2>
                  <p className="font-body mt-2 text-sm text-muted">
                    {t.meaning} · {t.region}
                  </p>
                  {t.pending && (
                    <span className="mt-3 inline-block rounded-full border border-amber/40 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-amber">
                      Pendiente en el Doc
                    </span>
                  )}

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-gold/50 to-transparent" />

                  {t.desc ? (
                    <p className="font-body mt-6 text-[0.95rem] leading-relaxed text-offwhite/85">
                      {t.desc}
                    </p>
                  ) : (
                    <p className="font-body mt-6 text-[0.95rem] italic leading-relaxed text-muted/70">
                      Texto pendiente — todavía no está cargado en el Doc.
                    </p>
                  )}

                  {t.dato && (
                    <div className="mt-6 rounded-2xl border border-gold/15 bg-gold/[0.06] p-4">
                      <p className="font-display text-[0.65rem] font-medium uppercase tracking-[0.3em] text-gold/80">
                        Dato
                      </p>
                      <p className="font-body mt-1.5 text-sm leading-relaxed text-offwhite/90">
                        {t.dato}
                      </p>
                    </div>
                  )}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CIERRE ============ */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center sm:py-44">
        <p className="font-display mb-5 text-xs font-medium uppercase tracking-[0.4em] text-gold/80">
          Fin del recorrido
        </p>
        <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.05] tracking-tighter text-offwhite">
          Doce porciones,
          <br />
          <span className="bg-gradient-to-r from-gold via-offwhite to-amber bg-clip-text text-transparent">
            una sola Tierra de Israel.
          </span>
        </h2>
        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {TRIBES.map((t) => (
            <button
              key={t.id}
              onClick={() => goTo(t.id)}
              className="font-display rounded-full border border-white/10 px-4 py-2 text-sm tracking-tight text-offwhite/80 transition-colors hover:border-gold/50 hover:text-gold"
            >
              {t.name}
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

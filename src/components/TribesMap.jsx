import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Mapa REAL de la repartición de las 12 tribus (contornos de dominio público,
 * recoloreados en dorado). La "cámara" hace zoom hacia la tribu activa mientras
 * un foco dorado + etiqueta la resaltan. El contenedor se inclina en 3D (CSS).
 */
export default function TribesMap({ tribes, activeId, onPick, reducedMotion }) {
  const camRef = useRef(null)
  const active = tribes.find((t) => t.id === activeId)
  const pos = active?.pos ?? { x: 0.5, y: 0.42 }
  const zoom = active && !active.noTerritory ? 1.3 : 1.04

  useEffect(() => {
    if (!camRef.current) return
    const to = { scale: zoom, transformOrigin: `${pos.x * 100}% ${pos.y * 100}%` }
    if (reducedMotion) gsap.set(camRef.current, to)
    else gsap.to(camRef.current, { ...to, duration: 1.1, ease: 'power2.out', overwrite: true })
  }, [activeId, pos.x, pos.y, zoom, reducedMotion])

  return (
    <div className="tribes-map-tilt relative flex h-full w-full items-center justify-center">
      <div ref={camRef} className="map-cam relative h-full" style={{ aspectRatio: '800 / 1218' }}>
        <img
          src="/mapa-tribus.png"
          alt="Mapa de la repartición de las doce tribus de Israel"
          className="map-img h-full w-full select-none object-contain"
          draggable="false"
        />

        {/* Foco dorado sobre la tribu activa */}
        {active && !active.noTerritory && (
          <div className="map-spot" style={{ left: `${pos.x * 100}%`, top: `${pos.y * 100}%` }} />
        )}

        {/* Marcadores clicables de cada tribu (sólo la activa muestra etiqueta) */}
        {tribes
          .filter((t) => !t.noTerritory)
          .map((t) => (
            <button
              key={t.id}
              type="button"
              data-on={t.id === activeId}
              aria-label={t.name}
              aria-pressed={t.id === activeId}
              onClick={() => onPick?.(t.id)}
              className="map-pin"
              style={{ left: `${t.pos.x * 100}%`, top: `${t.pos.y * 100}%` }}
            >
              <span className="map-pin-label">{t.name}</span>
              <span className="map-pin-dot" />
            </button>
          ))}
      </div>
    </div>
  )
}

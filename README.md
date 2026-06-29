# La repartición de la Tierra de Israel

Experiencia **scrollytelling** sobre las divisiones de la **Tierra de Israel** —
las porciones que Yehoshúa repartió entre los hijos de Yaacov (Feria de Torá).
Bajás con scroll y, sobre un **mapa real inclinado en 3D**, se va iluminando cada
porción con su nombre (hebreo), territorio e información.

**Stack:** Vite + React + Tailwind v4 (`@tailwindcss/vite`, sin PostCSS) · `gsap` + `@gsap/react` · `lenis` (scroll suave) · capa 3D de ambiente con `three` · `@react-three/fiber` · `@react-three/drei`.

## 🔗 Links

- **Sitio (producción):** https://tierra-de-israel.vercel.app
- **Repo:** https://github.com/tommyhanono/tierra-de-israel
- **Local (dev):** http://localhost:5181

## Levantar en local

```bash
cd ~/israel-antiguo
PATH="$HOME/.local/node-v20.19.2-darwin-arm64/bin:$PATH" npm run dev
```

## Cómo funciona

- **Mapa real** de la repartición (contornos de dominio público), recoloreado en
  dorado e inclinado en 3D. La "cámara" hace zoom a cada porción al scrollear y
  un foco + etiqueta la resaltan.
- **Una tarjeta por porción** con nombre en hebreo, significado, territorio,
  descripción y un dato — en lenguaje de Torá.
- **Scroll cinemático** con Lenis + GSAP; activación por `IntersectionObserver`.
- Accesible (foco visible, `prefers-reduced-motion`) y responsive.

## Contenido

Todo vive en [`src/data/tribes.js`](src/data/tribes.js): nombre, hebreo,
significado, territorio, `desc`, `dato`, posición en el mapa (`pos`) y `pending`
(las porciones que todavía no tienen texto en el Doc se marcan en la app).

## Estructura

```
src/
  App.jsx                  # Intro + recorrido (mapa fijo + pasos) + cierre
  data/tribes.js           # Las 12 porciones (+ Manasé dividido, Leví)
  components/
    TribesMap.jsx          # Mapa real + foco/pines + cámara GSAP
    Scene.jsx / Pearl.jsx  # Capa 3D de ambiente (de la base nivel-3d)
  hooks/useReducedMotion.js
  index.css                # Tailwind v4 + tokens (@theme)
public/mapa-tribus.png     # Mapa de la repartición (dominio público)
```

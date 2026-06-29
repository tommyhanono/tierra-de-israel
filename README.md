# Israel Antiguo — Mapa interactivo

Mapa interactivo de **las doce tribus de Israel**. Tocás una región y, con
animación, aparece un panel con dónde estaba y su historia. Construido sobre la
base 3D premium [`nivel-3d`](../nivel-3d).

**Stack:** Vite + React + Tailwind v4 (`@tailwindcss/vite`, sin PostCSS) · `gsap` + `@gsap/react` · capa 3D de ambiente con `three` · `@react-three/fiber` · `@react-three/drei`.

## 🔗 Link

- **Local (dev):** http://localhost:5181
- **Deploy:** _pendiente_ — al publicar (Vercel / Netlify / GitHub Pages), pegar aquí la URL.

## Levantar el proyecto

```bash
cd ~/israel-antiguo
PATH="$HOME/.local/node-v20.19.2-darwin-arm64/bin:$PATH" npm run dev
```

## Qué trae

- **Mapa estilizado** de las 12 tribus (SVG): Mediterráneo, Río Jordán, Mar de
  Galilea y Mar Muerto como referencia. Cada región es un bloque clicable.
- **Interacción**: al elegir una región se ilumina en dorado, las demás se
  atenúan y entra (con GSAP) un **panel** con su ubicación y un **dato**.
- **Accesible**: regiones navegables con `Tab` y `Enter`, foco visible, panel que
  cierra con la ✕, `Escape` o tocando fuera (en móvil). Respeta `prefers-reduced-motion`.
- **Ambiente 3D**: la perla iridiscente de la base queda como fondo atenuado.
- **Tipografía**: Space Grotesk (display) + Inter (body); acento dorado histórico.

## Personalizar el contenido

Todo el contenido vive en [`src/data/regions.js`](src/data/regions.js):
nombre, posición del bloque en el mapa (`tile`), descripción (`blurb`) y `dato`.
Editá ese archivo para cambiar textos, o pasá tu mapa/info y se ajusta.

## Estructura

```
src/
  App.jsx                  # Estado de selección, layout, fondo 3D
  data/regions.js          # Las 12 tribus (datos + posición en el mapa)
  components/
    IsraelMap.jsx          # Mapa SVG, regiones clicables, selección
    RegionInfo.jsx         # Panel de info (animado con GSAP)
    Scene.jsx / Pearl.jsx  # Capa 3D de ambiente (de la base nivel-3d)
  hooks/useReducedMotion.js
  index.css                # Tailwind v4 + tokens (@theme)
```

import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Pearl from './Pearl'

/**
 * Escena 3D del hero. Se carga con lazy + Suspense desde Hero.jsx
 * para no bloquear el primer render (importante en móvil).
 */
export default function Scene({ reducedMotion = false, scrollProgress }) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      // Decorativo: lo ocultamos de lectores de pantalla.
      aria-hidden="true"
      frameloop={reducedMotion ? 'demand' : 'always'}
    >
      {/* Iluminación suave + dos luces de color para el iris cian/violeta */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 2]} intensity={2.2} color="#5eead4" />
      <pointLight position={[-4, -1, -2]} intensity={14} color="#a78bfa" distance={22} />
      <pointLight position={[2, -3, 3]} intensity={6} color="#5eead4" distance={20} />

      <Pearl reducedMotion={reducedMotion} scrollProgress={scrollProgress} />

      {/* Reflejos de entorno nocturno */}
      <Environment preset="night" environmentIntensity={1.1} />
    </Canvas>
  )
}

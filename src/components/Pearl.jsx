import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

/**
 * "Perla iridiscente": icosaedro subdividido con material distorsionado,
 * emisivo y reflectante. La iridiscencia cian→violeta nace de las dos luces
 * de color (mint / violet) + los reflejos del Environment nocturno.
 *
 * - reducedMotion: desactiva distorsión, flotación y rotación.
 * - scrollProgress: ref mutable (0→1) que escribe el ScrollTrigger del hero.
 *   La leemos aquí en el loop de render para escalar y rotar con el scroll.
 */
export default function Pearl({ reducedMotion = false, scrollProgress }) {
  const meshRef = useRef()

  useFrame((_, delta) => {
    const mesh = meshRef.current
    if (!mesh) return

    const p = scrollProgress?.current ?? 0

    if (!reducedMotion) {
      // Rotación lenta y continua sobre su eje.
      mesh.rotation.y += delta * 0.15
      // Empuje extra de rotación atado al scroll (scrub).
      mesh.rotation.z = p * Math.PI
    }

    // La perla crece a medida que avanzas en el hero (lerp para suavizar).
    const targetScale = 1 + p * 1.4
    const next = THREE.MathUtils.lerp(mesh.scale.x, targetScale, 0.12)
    mesh.scale.setScalar(next)
  })

  return (
    <Float
      speed={reducedMotion ? 0 : 1.1}
      rotationIntensity={reducedMotion ? 0 : 0.5}
      floatIntensity={reducedMotion ? 0 : 1.1}
    >
      <mesh ref={meshRef}>
        {/* detail 8 → blob suave y a la vez liviano para móvil */}
        <icosahedronGeometry args={[1.35, 8]} />
        <MeshDistortMaterial
          color="#bfeae0"
          emissive="#7c5cff"
          emissiveIntensity={0.55}
          roughness={0.18}
          metalness={0.85}
          envMapIntensity={1.4}
          distort={reducedMotion ? 0 : 0.38}
          speed={reducedMotion ? 0 : 1.4}
        />
      </mesh>
    </Float>
  )
}

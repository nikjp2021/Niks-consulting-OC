'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 1200
const BRAND_COLORS = [
  new THREE.Color('#3B82F6'),
  new THREE.Color('#60A5FA'),
  new THREE.Color('#8B5CF6'),
  new THREE.Color('#06B6D4'),
  new THREE.Color('#93C5FD'),
]

export function HeroParticles({ mouse }: { mouse: { x: number; y: number } }) {
  const pointsRef = useRef<THREE.Points>(null)
  const positionsRef = useRef<Float32Array | null>(null)
  const velocitiesRef = useRef<Float32Array | null>(null)

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    const col = new Float32Array(PARTICLE_COUNT * 3)
    const siz = new Float32Array(PARTICLE_COUNT)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      pos[i3] = (Math.random() - 0.5) * 25
      pos[i3 + 1] = (Math.random() - 0.5) * 20
      pos[i3 + 2] = (Math.random() - 0.5) * 15 - 2

      const color = BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)]
      col[i3] = color.r
      col[i3 + 1] = color.g
      col[i3 + 2] = color.b

      siz[i] = 0.02 + Math.random() * 0.04
    }

    return [pos, col, siz]
  }, [])

  positionsRef.current = positions

  const vel = useMemo(() => {
    const v = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      v[i3] = (Math.random() - 0.5) * 0.003
      v[i3 + 1] = (Math.random() - 0.5) * 0.003
      v[i3 + 2] = (Math.random() - 0.5) * 0.002
    }
    return v
  }, [])

  velocitiesRef.current = vel

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    const t = clock.getElapsedTime()
    const posAttr = pointsRef.current.geometry.attributes.position
    const posArray = posAttr.array as Float32Array

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3

      posArray[i3] += Math.sin(t * 0.2 + i * 0.01) * 0.002
      posArray[i3 + 1] += Math.cos(t * 0.15 + i * 0.015) * 0.002
      posArray[i3 + 2] += Math.sin(t * 0.1 + i * 0.005) * 0.001

      posArray[i3] += mouse.x * 0.001 * (posArray[i3 + 2] > 0 ? 1 : -0.5)
      posArray[i3 + 1] += mouse.y * 0.001 * (posArray[i3 + 2] > 0 ? 1 : -0.5)

      if (posArray[i3] > 12) posArray[i3] = -12
      if (posArray[i3] < -12) posArray[i3] = 12
      if (posArray[i3 + 1] > 10) posArray[i3 + 1] = -10
      if (posArray[i3 + 1] < -10) posArray[i3 + 1] = 10
    }

    posAttr.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={PARTICLE_COUNT}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

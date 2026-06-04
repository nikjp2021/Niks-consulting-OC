'use client'

import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import { Suspense, useEffect, useState, useRef } from 'react'

type DeviceTier = 'low' | 'medium' | 'high'

function useDeviceTier(): DeviceTier {
  const [tier, setTier] = useState<DeviceTier>('medium')

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')

    if (!gl) {
      setTier('low')
      return
    }

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    const renderer = debugInfo
      ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
      : ''

    const isLowEnd = /(Adreno 5|Mali-4|Intel HD Graphics 2|Intel HD Graphics 1)/i.test(renderer)
    const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent)
    const memory = (navigator as any).deviceMemory || 8

    if (isLowEnd || (isMobile && memory <= 4)) {
      setTier('low')
    } else if (isMobile || memory <= 4) {
      setTier('medium')
    } else {
      setTier('high')
    }
  }, [])

  return tier
}

function LoadingFallback() {
  return <div className="absolute inset-0 bg-surface-0" />
}

export function Scene({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const tier = useDeviceTier()
  const containerRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  if (tier === 'low') return null

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`}>
      {inView && (
        <Canvas
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [0, 0, 10], fov: 45 }}
          frameloop="demand"
        >
          <Suspense fallback={<LoadingFallback />}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <View.Port />
            {children}
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}

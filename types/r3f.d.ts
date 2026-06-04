import 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any
      directionalLight: any
      pointLight: any
      mesh: any
      instancedMesh: any
      points: any
      pointsMaterial: any
      bufferGeometry: any
      bufferAttribute: any
      sphereGeometry: any
      meshBasicMaterial: any
      meshStandardMaterial: any
      meshPhysicalMaterial: any
      lineSegments: any
      lineBasicMaterial: any
      group: any
    }
  }
}

declare module '@react-three/fiber' {
  import { ReactNode } from 'react'

  interface CanvasProps {
    children?: ReactNode
    style?: React.CSSProperties
    dpr?: [number, number] | number
    gl?: Record<string, any>
    camera?: Record<string, any>
    frameloop?: 'always' | 'demand' | 'never'
    shadows?: boolean
    [key: string]: any
  }

  export function Canvas(props: CanvasProps): JSX.Element
  export function useFrame(callback: (state: any, delta: number, frame?: any) => void, renderPriority?: number): void
  export function useThree(): any
  export function useLoader<T>(loader: new () => { load: (url: string) => T }, url: string): T
}

declare module '@react-three/drei' {
  import { ReactNode, RefObject } from 'react'

  export const View: { Port: () => JSX.Element } & ((props: any) => JSX.Element)
  export function Float(props: any): JSX.Element
  export const Sphere: (props: any) => JSX.Element
  export const Line: (props: any) => JSX.Element
  export function PerspectiveCamera(props: any): JSX.Element
  export function Environment(props: any): JSX.Element
  export function Text(props: any): JSX.Element
  export function ContactShadows(props: any): JSX.Element
  export function useGLTF(path: string): any
}

import { ReactNode, CSSProperties } from 'react';

export interface SpringConfig {
  stiffness: number;
  damping: number;
}

export interface TiltCardProps {
  children?: ReactNode;
  className?: string;
  width?: number;
  height?: number;
  rotateIntensity?: number;
  transformIntensity?: number;
  springConfig?: SpringConfig;
  enableShadow?: boolean;
  enableScale?: boolean;
  style?: CSSProperties;
  [key: string]: any; // For additional props
}

export interface FrameState {
  width: number;
  height: number;
  top: number;
  left: number;
}

export interface TiltSettings {
  rotateIntensity: number;
  enableShadow: boolean;
  enableScale: boolean;
}


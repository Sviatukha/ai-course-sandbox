import type { HTMLAttributes } from 'react'
import './Badge.css'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: 'info' | 'success' | 'warning'
}

export function Badge({ variant = 'info', className = '', ...rest }: BadgeProps) {
  return <span className={`badge badge--${variant} ${className}`.trim()} {...rest} />
}

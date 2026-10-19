'use client'

import {useLayoutEffect, useRef, useState, type ReactNode} from 'react'
import {cn} from 'cn'

/*
 * Shrinks its content to fit the width it's given, never growing it past its natural size. The
 * keyboards are laid out at a fixed size, so on a narrow screen they're scaled down as a whole
 * rather than reflowed. A transform alone leaves the content taking up its full-size box, so the
 * wrapper is sized to the scaled height to keep the space around it honest. It measures again
 * whenever the room or the content changes size (a Corne/Planck switch, a different layer).
 */
export default function FitWidth({children, className}: {children: ReactNode; className?: string}) {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [fit, setFit] = useState<{scale: number; height: number} | null>(null)

  useLayoutEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return
    const update = () => {
      // offsetWidth and offsetHeight ignore the transform, so they're the natural size
      const scale = Math.min(1, outer.clientWidth / inner.offsetWidth)
      setFit({scale, height: inner.offsetHeight * scale})
    }
    const resizeObserver = new ResizeObserver(update)
    resizeObserver.observe(outer)
    resizeObserver.observe(inner)
    update()
    return () => resizeObserver.disconnect()
  }, [])

  return (
    <div
      ref={outerRef}
      className={cn('flex w-full justify-center', className)}
      style={fit ? {height: fit.height} : undefined}
    >
      {/* hidden until measured, so a phone never flashes the full-size keyboard */}
      <div
        ref={innerRef}
        className={cn('w-max shrink-0 origin-top self-start', !fit && 'invisible')}
        style={fit ? {scale: fit.scale} : undefined}
      >
        {children}
      </div>
    </div>
  )
}

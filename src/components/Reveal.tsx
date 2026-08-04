import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Extra delay (ms) before the fade starts — useful for staggering. */
  delay?: number
  /** Element tag to render. Defaults to a div. */
  as?: ElementType
}

/**
 * Fades its children in — up from a small offset — the first time they enter
 * the viewport. Because the observer also fires for anything already on screen
 * at mount, this doubles as the on-load intro animation. Honors
 * `prefers-reduced-motion` by revealing instantly.
 */
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)

    // Safety net: the observer only fires while the tab is actually painting,
    // so a background/pre-render load could otherwise leave content stuck
    // hidden. Reveal unconditionally if nothing has fired shortly after mount.
    const fallback = window.setTimeout(() => setVisible(true), 2000)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' reveal--visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

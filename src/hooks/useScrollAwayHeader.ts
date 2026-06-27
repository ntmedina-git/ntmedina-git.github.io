import { useEffect, useRef, useState } from 'react'

/**
 * "Headroom" behaviour for the M/S top bar: instead of staying pinned and then
 * animating out, the bar tracks the scroll 1:1 — it slides up as the page
 * scrolls down (leaving naturally with the content) and slides back down as the
 * page scrolls up. Fully shown at the top.
 *
 * Returns a ref to attach to the bar (used to measure its height, i.e. how far
 * it can travel) and the current offset in px to translate it up by.
 */
export function useScrollAwayHeader<T extends HTMLElement>(): {
  ref: React.RefObject<T>
  offset: number
} {
  const ref = useRef<T>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let last = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      const delta = y - last
      last = y
      const height = ref.current?.offsetHeight ?? 0
      // Accumulate scroll-down distance (hide) and pay it back on scroll-up
      // (reveal), clamped to the bar's own height so it never over-travels.
      setOffset((prev) => (y <= 0 ? 0 : Math.min(height, Math.max(0, prev + delta))))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { ref, offset }
}

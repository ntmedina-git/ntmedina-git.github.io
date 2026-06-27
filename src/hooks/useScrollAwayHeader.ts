import { useEffect, useRef, useState } from 'react'

/**
 * "Headroom" behaviour for the M/S top bar:
 *  - Scrolling down: the bar slides up tracking the scroll 1:1, leaving
 *    naturally with the content (no transition).
 *  - Scrolling up (or at the top): the bar comes fully back into view with a
 *    short transition, so it reliably reappears.
 *
 * Returns a ref to attach to the bar (used to measure how far it can travel),
 * the current offset in px to translate it up by, and whether that change
 * should be animated (true when revealing, false while tracking the scroll).
 */
export function useScrollAwayHeader<T extends HTMLElement>(): {
  ref: React.RefObject<T>
  offset: number
  animate: boolean
} {
  const ref = useRef<T>(null)
  const [offset, setOffset] = useState(0)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    const DEADZONE = 4

    const onScroll = () => {
      const y = window.scrollY
      const delta = y - last
      last = y

      if (y <= 0) {
        // At the very top — always fully shown.
        setAnimate(true)
        setOffset(0)
      } else if (delta > DEADZONE) {
        // Scrolling down — track the scroll 1:1, no transition.
        const height = ref.current?.offsetHeight ?? 0
        setAnimate(false)
        setOffset((prev) => Math.min(height, prev + delta))
      } else if (delta < -DEADZONE) {
        // Scrolling up — bring the bar fully back, smoothly.
        setAnimate(true)
        setOffset(0)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { ref, offset, animate }
}

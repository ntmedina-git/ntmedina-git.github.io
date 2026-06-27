import { useEffect, useState } from 'react'

/**
 * Returns true while the user is scrolling *down* past `threshold`, false while
 * scrolling up or near the top. Used to slide the M/S top bar out of the way on
 * the way down and bring it back the moment the user scrolls up.
 *
 * Ignores sub-`delta` jitter so it doesn't flicker. The work per scroll event is
 * trivial and React bails out on unchanged state, so no rAF throttle is needed.
 */
export function useHideOnScroll(threshold = 80, delta = 6): boolean {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let last = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      if (y < threshold) {
        setHidden(false) // always show near the top
      } else if (y > last + delta) {
        setHidden(true) // scrolling down
      } else if (y < last - delta) {
        setHidden(false) // scrolling up
      }
      last = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold, delta])

  return hidden
}

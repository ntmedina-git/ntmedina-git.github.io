import { useEffect, useState } from 'react'

/**
 * Scroll-spy: returns the id of the section currently crossing a reference line
 * placed `offset` down the viewport (0.45 = 45%).
 *
 * This is what drives the sidebar indicator animation on XL / L — as the scroll
 * position enters a new section, the matching dash grows (12px → 24px) and turns
 * from faint white to the accent colour. Runs inside requestAnimationFrame so it
 * stays cheap on every scroll frame.
 */
export function useActiveSection(ids: readonly string[], offset = 0.45): string {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    let frame = 0

    const compute = () => {
      frame = 0
      const line = window.innerHeight * offset
      // The active section is the last one whose top has scrolled past the line.
      let current = elements[0].id
      for (const el of elements) {
        if (el.getBoundingClientRect().top - line <= 0) current = el.id
      }
      setActive((prev) => (prev === current ? prev : current))
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join('|'), offset])

  return active
}

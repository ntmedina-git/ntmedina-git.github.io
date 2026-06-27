import { useEffect, useState } from 'react'
import Identity from './Identity'
import { useScrollAwayHeader } from '../hooks/useScrollAwayHeader'
import { menuSections, type NavSectionId } from '../data/content'

type Props = {
  onSelect: (id: NavSectionId) => void
}

/**
 * Top navigation used on M / S (below lg). A scroll-aware bar with the identity
 * on the left and a burger on the right. Tapping the burger opens a full-screen
 * black overlay with the section links (Work / About) centered on screen.
 */
export default function TopBar({ onSelect }: Props) {
  const [open, setOpen] = useState(false)
  const { ref, offset } = useScrollAwayHeader<HTMLDivElement>()

  // Lock body scroll while the full-screen menu is open.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  const go = (id: NavSectionId) => {
    setOpen(false)
    onSelect(id)
  }

  return (
    <header
      // Closed: a sticky bar that tracks the scroll 1:1 (slides away on the way
      // down, returns on the way up). Open: a full-screen black overlay.
      style={open ? undefined : { transform: `translateY(-${offset}px)` }}
      className={[
        'lg:hidden',
        open
          ? 'fixed inset-0 z-50 flex flex-col bg-bg'
          : 'sticky top-0 z-30 bg-bg/80 backdrop-blur-sm transition-colors',
      ].join(' ')}
    >
      <div ref={ref} className="flex items-start justify-between p-8 md:p-10">
        <Identity />

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative mt-1 h-8 w-8 shrink-0"
        >
          <span
            className={[
              'absolute left-1 h-0.5 w-6 bg-fg transition-all duration-300',
              open ? 'top-[15px] rotate-45' : 'top-[10px]',
            ].join(' ')}
          />
          <span
            className={[
              'absolute h-0.5 bg-fg transition-all duration-300',
              open ? 'left-1 top-[15px] w-6 -rotate-45 opacity-100' : 'left-3 top-5 w-4 opacity-50',
            ].join(' ')}
          />
        </button>
      </div>

      {open && (
        // Absolutely centred on the full viewport (not just below the bar).
        // pointer-events-none lets taps reach the close button; the links opt
        // back in with pointer-events-auto.
        <nav className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4">
          {menuSections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(s.id)}
              className="pointer-events-auto text-[32px] leading-[40px] text-fg-80 transition-colors hover:text-fg"
            >
              {s.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}

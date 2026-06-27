import { useEffect, useState } from 'react'
import { useScrollAwayHeader } from '../hooks/useScrollAwayHeader'
import { menuSections, type NavSectionId } from '../data/content'

type Props = {
  onSelect: (id: NavSectionId) => void
}

/**
 * Top navigation used on M / S (below lg). A scroll-aware bar with just a
 * burger on the right. Tapping it fades in a full-screen black overlay with the
 * section links (Work / About) centered on screen; the links rise and fade in
 * with a small stagger.
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
    <div className="lg:hidden">
      {/* Bar — always visible, stacked above the overlay. Tracks the scroll 1:1
          (slides away on the way down, returns on the way up). */}
      <header
        style={{ transform: `translateY(-${open ? 0 : offset}px)` }}
        className={[
          'top-0 z-50 bg-bg/80 backdrop-blur-sm',
          // Pinned while the menu is open so the close button stays on screen
          // even if the page was scrolled; scroll-aware sticky bar otherwise.
          open ? 'fixed inset-x-0' : 'sticky',
        ].join(' ')}
      >
        <div ref={ref} className="flex items-start justify-end p-8 md:p-10">
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
      </header>

      {/* Full-screen menu — fades in/out. Uses opacity + pointer-events (not
          visibility) so the fade isn't skipped by the browser. */}
      <div
        aria-hidden={!open}
        className={[
          'fixed inset-0 z-40 bg-bg transition-opacity duration-500 ease-out',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      >
        <nav className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          {menuSections.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(s.id)}
              style={{ transitionDelay: open ? `${150 + i * 90}ms` : '0ms' }}
              className={[
                'text-[32px] leading-[40px] text-fg-80 transition-all duration-500 ease-out hover:text-fg',
                open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
              ].join(' ')}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

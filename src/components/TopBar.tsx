import { useState } from 'react'
import Identity from './Identity'
import { useScrollAwayHeader } from '../hooks/useScrollAwayHeader'
import { menuSections, type NavSectionId } from '../data/content'

type Props = {
  onSelect: (id: NavSectionId) => void
}

/**
 * Top navigation used on M / S (below lg). The identity block on the left, a
 * burger on the right built from the same two-dash motif as the sidebar
 * indicator (24px + 16px). Tapping it reveals sections and social links.
 */
export default function TopBar({ onSelect }: Props) {
  const [open, setOpen] = useState(false)
  const { ref, offset } = useScrollAwayHeader<HTMLDivElement>()

  const go = (id: NavSectionId) => {
    setOpen(false)
    onSelect(id)
  }

  return (
    <header
      // Track the scroll 1:1: the bar slides up with the page on the way down
      // and back down on the way up. Kept fully visible while the menu is open.
      // No transform transition so it follows the scroll rather than lagging.
      style={{ transform: `translateY(-${open ? 0 : offset}px)` }}
      className={[
        'lg:hidden sticky top-0 z-30 transition-colors',
        open ? 'bg-bg' : 'bg-bg/80 backdrop-blur-sm',
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
        <div className="border-t border-line bg-bg px-8 pb-8 pt-6 md:px-10">
          <nav className="flex flex-col gap-3">
            {menuSections.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => go(s.id)}
                className="text-left text-[20px] leading-[28px] text-fg-80 transition-colors hover:text-fg"
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

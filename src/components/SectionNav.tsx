import { navSections, type NavSectionId } from '../data/content'

type Props = {
  active: string
  onSelect: (id: NavSectionId) => void
}

/**
 * The three scroll indicators that sit in the middle of the sidebar (XL / L).
 *
 * Each dash maps to a scroll section. The active one animates to 24px wide and
 * the accent colour; the others rest at 12px / 30% white. Because width and
 * background are transitioned, scrolling between sections produces the smooth
 * grow/recolour described in the design (e.g. the middle dash going 12 → 24px
 * as you reach "Selected work").
 */
export default function SectionNav({ active, onSelect }: Props) {
  return (
    <nav aria-label="Sections" className="flex flex-col gap-8">
      {navSections.map((section) => {
        const isActive = section.id === active
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => onSelect(section.id)}
            aria-current={isActive ? 'true' : undefined}
            className="group flex items-center gap-3 outline-none"
          >
            <span
              className={[
                'h-0.5 rounded-full transition-all duration-500 ease-out',
                isActive
                  ? 'w-6 bg-accent'
                  : 'w-3 bg-fg-30 group-hover:bg-fg-60',
              ].join(' ')}
            />
            <span
              className={[
                'text-[14px] leading-[18px] transition-all duration-500',
                isActive
                  ? 'text-fg-60 opacity-100'
                  : 'text-fg-40 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0',
              ].join(' ')}
            >
              {section.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}

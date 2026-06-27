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
            // Height is the dash itself (2px) so the 32px nav gap matches the
            // design exactly (34px centre-to-centre). The ::before gives a
            // comfortable click target without affecting that spacing.
            className="group relative flex items-center outline-none before:absolute before:-inset-x-2 before:-inset-y-3 before:content-['']"
          >
            <span
              className={[
                'h-0.5 rounded-full transition-all duration-500 ease-out',
                isActive
                  ? 'w-6 bg-accent'
                  : 'w-3 bg-fg-30 group-hover:bg-fg-60',
              ].join(' ')}
            />
            {/* Label is never shown on its own — only revealed in grey on hover.
                Absolutely positioned so it never inflates the dash spacing. */}
            <span className="absolute left-9 top-1/2 -translate-x-1 -translate-y-1/2 whitespace-nowrap text-[14px] leading-[18px] text-fg-40 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
              {section.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}

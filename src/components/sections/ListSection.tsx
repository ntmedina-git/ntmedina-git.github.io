import { useState } from 'react'
import type { ListRow } from '../../data/content'
import SectionHeading from './SectionHeading'

type Props = {
  title: string
  rows: ListRow[]
}

const COLLAPSED_COUNT = 4

/**
 * Generic two-column list with hairline dividers — Experience, Articles,
 * Community, Education all share this layout. Lists with more than four rows
 * collapse to four with a "See more" / "See less" toggle; the rows revealed on
 * expand fade in (staggered).
 */
export default function ListSection({ title, rows }: Props) {
  const collapsible = rows.length > COLLAPSED_COUNT
  const [expanded, setExpanded] = useState(false)
  const visibleRows = collapsible && !expanded ? rows.slice(0, COLLAPSED_COUNT) : rows

  return (
    <section className="flex flex-col gap-6 md:gap-10 lg:gap-12 2xl:gap-16">
      <SectionHeading>{title}</SectionHeading>

      <div className="flex flex-col gap-8">
        <ul className="flex flex-col gap-8">
          {visibleRows.map((row, i) => {
            const revealed = i >= COLLAPSED_COUNT
            return (
              <li
                key={`${row.title}-${i}`}
                className={['flex flex-col gap-8', revealed ? 'animate-fade-in' : ''].join(' ')}
                style={revealed ? { animationDelay: `${(i - COLLAPSED_COUNT) * 60}ms` } : undefined}
              >
                {i > 0 && <div className="h-px w-full bg-line" />}
                <div className="group flex items-center justify-between gap-6">
                  <div className="flex max-w-[70%] flex-col text-fg">
                    {row.href ? (
                      <a
                        href={row.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[16px] leading-[24px] opacity-60 underline decoration-from-font underline-offset-2 transition-opacity hover:opacity-100 2xl:text-[20px] 2xl:leading-[32px]"
                      >
                        {row.title}
                      </a>
                    ) : (
                      <span className="text-[16px] leading-[24px] opacity-60 2xl:text-[20px] 2xl:leading-[32px]">
                        {row.title}
                      </span>
                    )}
                    <span className="text-[14px] leading-[16px] opacity-40 2xl:text-[16px] 2xl:leading-[24px]">
                      {row.subtitle}
                    </span>
                  </div>
                  <span className="shrink-0 text-right text-[14px] leading-[16px] text-fg opacity-40 2xl:text-[16px] 2xl:leading-[24px]">
                    {row.meta}
                  </span>
                </div>
              </li>
            )
          })}
        </ul>

        {collapsible && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="self-start text-[14px] leading-[16px] text-fg opacity-40 underline underline-offset-2 transition-opacity hover:opacity-100 2xl:text-[16px] 2xl:leading-[24px]"
          >
            {expanded ? 'See less' : 'See more'}
          </button>
        )}
      </div>
    </section>
  )
}

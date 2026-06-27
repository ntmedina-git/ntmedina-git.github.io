import type { ListRow } from '../../data/content'
import SectionHeading from './SectionHeading'

type Props = {
  title: string
  rows: ListRow[]
}

/** Generic two-column list with hairline dividers — Experience, Articles,
 *  Community, Education all share this layout. */
export default function ListSection({ title, rows }: Props) {
  return (
    <section className="flex flex-col gap-6 md:gap-10 lg:gap-12 2xl:gap-16">
      <SectionHeading>{title}</SectionHeading>

      <ul className="flex flex-col">
        {rows.map((row, i) => (
          <li key={`${row.title}-${i}`}>
            {i > 0 && <div className="h-px w-full bg-line" />}
            <div className="group flex items-start justify-between gap-6 py-4">
              <div className="flex max-w-[70%] flex-col text-fg">
                {row.href ? (
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[18px] leading-[28px] opacity-60 underline decoration-from-font underline-offset-2 transition-opacity hover:opacity-100 xl:text-[20px] xl:leading-[32px]"
                  >
                    {row.title}
                  </a>
                ) : (
                  <span className="text-[18px] leading-[28px] opacity-60 xl:text-[20px] xl:leading-[32px]">
                    {row.title}
                  </span>
                )}
                <span className="text-[16px] leading-[24px] opacity-40">{row.subtitle}</span>
              </div>
              <span className="shrink-0 pt-0.5 text-right text-[16px] leading-[24px] text-fg opacity-40">
                {row.meta}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

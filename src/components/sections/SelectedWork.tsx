import { selectedWork } from '../../data/content'
import SectionHeading from './SectionHeading'

/** Selected work — heading + 2×2 card grid (1 column on S). */
export default function SelectedWork() {
  return (
    <section id="work" className="flex flex-col gap-10 xl:gap-16">
      <SectionHeading pill="Coming soon">Selected work</SectionHeading>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {selectedWork.map((item) => (
          <article
            key={item.title}
            className="flex min-h-[280px] flex-col justify-between rounded-xl border border-line p-8 xl:min-h-[426px] xl:p-12"
          >
            <img src={item.logo} alt={item.logoAlt} className={item.logoClass} />

            <div className="flex flex-col gap-1 text-fg">
              <h3 className="text-[20px] leading-[28px] opacity-60 xl:text-[24px] xl:leading-[32px]">
                {item.title}
              </h3>
              <p className="text-[16px] leading-[24px] opacity-40">{item.company}</p>
              <p className="text-[16px] leading-[24px] opacity-40">{item.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

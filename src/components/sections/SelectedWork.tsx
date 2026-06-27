import { selectedWork } from '../../data/content'
import SectionHeading from './SectionHeading'

/** Selected work — heading + 2×2 card grid (1 column on S). */
export default function SelectedWork() {
  return (
    <section id="work" className="flex flex-col gap-6 md:gap-10 lg:gap-12 2xl:gap-16">
      <SectionHeading pill="Coming soon">Selected work</SectionHeading>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-6">
        {selectedWork.map((item) => (
          <article
            key={item.title}
            className="flex min-h-[327px] flex-col justify-between rounded-xl border border-line p-10 2xl:min-h-[426px] 2xl:p-12"
          >
            <img src={item.logo} alt={item.logoAlt} className={item.logoClass} />

            <div className="flex flex-col gap-1 text-fg">
              <h3 className="text-[16px] leading-normal opacity-90 2xl:text-[24px] 2xl:leading-[32px] 2xl:opacity-60">
                {item.title}
              </h3>
              <p className="text-[14px] leading-[24px] opacity-60 2xl:text-[16px] 2xl:opacity-40">
                {item.company}
              </p>
              <p className="text-[14px] leading-[24px] opacity-60 2xl:text-[16px] 2xl:opacity-40">
                {item.note}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

import { hero, intro } from '../../data/content'

/** Home section — oversized headline + intro paragraphs. */
export default function Hero() {
  return (
    <section id="home" className="flex flex-col gap-16 xl:gap-32">
      <h1 className="font-light text-[clamp(2.25rem,6vw,110px)] leading-[1.04] tracking-tight">
        <span className="text-fg-60">{hero.lead}</span>
        <span className="text-fg">{hero.name}</span>
        <br />
        <span className="text-fg-60">{hero.line2a}</span>
        <span className="text-fg-60 underline decoration-from-font underline-offset-[6px]">
          {hero.underline}
        </span>
        <span className="text-fg-60">{hero.line2b}</span>
      </h1>

      <div className="flex max-w-[868px] flex-col gap-7 text-fg opacity-50 text-[18px] leading-[30px] md:text-[24px] md:leading-[40px] xl:text-[32px] xl:leading-[52px]">
        {intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  )
}

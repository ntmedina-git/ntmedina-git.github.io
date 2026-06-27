import { hero, intro } from '../../data/content'

/**
 * Home section — oversized headline + intro paragraphs.
 *
 * Type scale follows the four Figma frames exactly:
 *   hero  → S 32/40 · M 58/62 · L 80/84 · XL 110/114
 *   intro → S 16/24 · M/L 20/32 · XL 32/52
 *   intro max-width matches the About paragraph → S 330 · M 438 · L 533 · XL 858
 * Left-aligned on every breakpoint.
 */
export default function Hero() {
  return (
    <section id="home" className="flex flex-col gap-12 md:gap-16 lg:gap-12 2xl:gap-16">
      <h1 className="font-light tracking-tight text-[32px] leading-[40px] md:text-[58px] md:leading-[62px] lg:text-[80px] lg:leading-[84px] 2xl:text-[110px] 2xl:leading-[114px]">
        <span className="text-fg-60">{hero.lead}</span>
        <span className="text-fg">{hero.name}</span>
        <br />
        <span className="text-fg-60">{hero.line2a}</span>
        <span className="text-fg-60 underline decoration-from-font underline-offset-4">
          {hero.underline}
        </span>
        <span className="text-fg-60">{hero.line2b}</span>
      </h1>

      <div className="flex max-w-[330px] flex-col gap-6 text-fg opacity-50 text-[16px] leading-[24px] md:max-w-[438px] md:gap-8 md:text-[20px] md:leading-[32px] lg:max-w-[533px] 2xl:max-w-[858px] 2xl:gap-[52px] 2xl:text-[32px] 2xl:leading-[52px]">
        {intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  )
}

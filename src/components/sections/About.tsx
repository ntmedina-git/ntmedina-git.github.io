import { about } from '../../data/content'
import SectionHeading from './SectionHeading'

/**
 * About — heading + two paragraphs. Anchor for the third nav indicator.
 * Matches the Figma frames: 16/24 (S) · 20/32 (M/L) · 32/52 (XL),
 * max-width S 330 · M 438 · L 533 · XL 858.
 */
export default function About() {
  return (
    <section id="about" className="flex flex-col gap-6 md:gap-10 lg:gap-12 2xl:gap-16">
      <SectionHeading>About</SectionHeading>
      <div className="flex max-w-[330px] flex-col gap-6 text-fg opacity-60 text-[16px] leading-[24px] md:max-w-[438px] md:gap-8 md:text-[20px] md:leading-[32px] lg:max-w-[533px] 2xl:max-w-[858px] 2xl:gap-[52px] 2xl:text-[32px] 2xl:leading-[52px]">
        {about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

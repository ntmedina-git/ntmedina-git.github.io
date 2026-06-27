import { about } from '../../data/content'
import SectionHeading from './SectionHeading'

/** About — heading + single paragraph. Anchor for the third nav indicator. */
export default function About() {
  return (
    <section id="about" className="flex flex-col gap-8 xl:gap-12">
      <SectionHeading>About</SectionHeading>
      <p className="max-w-[868px] text-fg opacity-50 text-[18px] leading-[30px] md:text-[20px] md:leading-[32px]">
        {about}
      </p>
    </section>
  )
}

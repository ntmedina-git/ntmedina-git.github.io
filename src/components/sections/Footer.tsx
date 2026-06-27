import { footerText } from '../../data/content'

const [line1, line2] = footerText.split(/,\s*/)

/**
 * Closing line. Contact links are not repeated here — on XL/L they live in the
 * sidebar, on M/S in the fixed ContactBar. Medium / 60%, 20/32 (S·M·L) and
 * 32/52 (XL), matching the Figma frames.
 */
export default function Footer() {
  return (
    <footer className="pt-8">
      <p className="font-medium text-fg opacity-60 text-[20px] leading-[32px] 2xl:text-[32px] 2xl:leading-[52px]">
        {line1},
        <br />
        {line2}
      </p>
    </footer>
  )
}

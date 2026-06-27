import { footerText, social } from '../../data/content'

/** Closing line + contact links. */
export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 pt-8">
      <p className="max-w-[868px] text-[18px] leading-[28px] text-fg-80 md:text-[20px] md:leading-[32px]">
        {footerText}
      </p>
      <ul className="hidden flex-wrap gap-x-6 gap-y-1 text-[16px] leading-[24px] lg:flex">
        {social.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="text-fg-40 underline underline-offset-2 transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

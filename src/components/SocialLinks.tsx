import { social } from '../data/content'

/** Linkedin / Github / email. Lives at the foot of the sidebar (XL/L). */
export default function SocialLinks() {
  return (
    <ul className="flex flex-col gap-1 text-[14px] leading-[18px]">
      {social.map((link) =>
        link.href ? (
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
        ) : (
          <li key={link.label} className="text-fg-40">
            {link.label}
          </li>
        ),
      )}
    </ul>
  )
}

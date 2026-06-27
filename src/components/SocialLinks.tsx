import { social } from '../data/content'

/** Linkedin / Github / email. Lives at the foot of the sidebar (XL/L). */
export default function SocialLinks() {
  return (
    <ul className="flex flex-col gap-1 text-[14px] leading-[18px]">
      {social.map((link, i) => (
        <li key={link.label}>
          <a
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className={[
              'transition-colors hover:text-fg',
              i === social.length - 1 ? 'text-fg-40' : 'text-fg-40 underline underline-offset-2',
            ].join(' ')}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

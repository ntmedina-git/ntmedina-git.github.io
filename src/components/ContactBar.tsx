import { social } from '../data/content'

const [linkedin, github, email] = social

/**
 * Contact info pinned to the bottom of the viewport on M / S. A gradient fades
 * the scrolling content out beneath it so the links stay legible. Hidden on
 * lg+, where the sidebar already carries the social links.
 */
export default function ContactBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 lg:hidden">
      <div className="flex items-end bg-gradient-to-t from-bg from-50% via-bg/80 to-transparent pt-16">
        <div className="pointer-events-auto flex w-full items-center justify-between px-8 pb-8 text-[14px] leading-[20px] md:px-10">
          <div className="flex gap-6">
            {[linkedin, github].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-fg-40 underline underline-offset-2 transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </div>
          <span className="text-fg-40">{email.label}</span>
        </div>
      </div>
    </div>
  )
}

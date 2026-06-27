import Identity from './Identity'
import SectionNav from './SectionNav'
import SocialLinks from './SocialLinks'
import type { NavSectionId } from '../data/content'

type Props = {
  active: string
  onSelect: (id: NavSectionId) => void
}

/**
 * Left navigation used on XL / L. Sticky full-height column with three blocks:
 * identity (top), scroll indicators (middle), social links (bottom). Hidden
 * below lg, where TopBar takes over.
 */
export default function Sidebar({ active, onSelect }: Props) {
  return (
    <aside className="hidden lg:flex lg:sticky lg:top-0 lg:h-screen lg:w-[35%] shrink-0 flex-col justify-between py-16 pl-16 pr-8 2xl:pl-20">
      <Identity />
      <SectionNav active={active} onSelect={onSelect} />
      <SocialLinks />
    </aside>
  )
}

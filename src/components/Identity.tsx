import { identity } from '../data/content'

/** Name + roles block. Shared by the sidebar (XL/L) and the top bar (M/S). */
export default function Identity() {
  return (
    <div className="flex flex-col gap-1 text-[14px] leading-[18px]">
      <p className="text-fg-80">{identity.name}</p>
      {identity.roles.map((role) => (
        <p key={role} className="text-fg-40 whitespace-nowrap">
          {role}
        </p>
      ))}
    </div>
  )
}

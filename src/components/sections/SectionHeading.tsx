type Props = {
  children: React.ReactNode
  pill?: string
}

/** Section label — "Selected work", "About", "Experience"… (32px / Medium / 60%). */
export default function SectionHeading({ children, pill }: Props) {
  return (
    <div className="flex items-center gap-6">
      <h2 className="font-medium text-[20px] leading-[32px] text-fg-60 2xl:text-[32px] 2xl:leading-[52px]">
        {children}
      </h2>
      {pill && (
        <span className="rounded bg-fg-15 px-2 py-1 text-[14px] leading-[16px] text-fg-40">
          {pill}
        </span>
      )}
    </div>
  )
}

import { Check, Copy } from 'lucide-react'

type CopyStatusIconProps = {
  copied: boolean
  wrapperClassName?: string
  iconClassName?: string
}

export function CopyStatusIcon({
  copied,
  wrapperClassName = 'size-5',
  iconClassName = 'size-3',
}: CopyStatusIconProps) {
  const baseIconClassName =
    `absolute ${iconClassName} transition-[opacity,filter,scale] duration-[360ms] ease-[var(--ease-spring)]`

  return (
    <span
      className={`relative grid shrink-0 place-items-center ${wrapperClassName}`}
    >
      <Copy
        aria-hidden="true"
        className={`${baseIconClassName} ${copied ? 'scale-75 opacity-0 blur-[6px]' : 'scale-100 opacity-100 blur-0'}`}
        strokeWidth={1.8}
      />
      <Check
        aria-hidden="true"
        className={`${baseIconClassName} ${copied ? 'scale-100 opacity-100 blur-0' : 'scale-75 opacity-0 blur-[6px]'}`}
        strokeWidth={2}
      />
    </span>
  )
}

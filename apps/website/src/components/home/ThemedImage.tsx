type ThemedImageProps = {
  light: string
  dark: string
  alt: string
  className?: string
  sizes?: string
}

export function ThemedImage({ light, dark, alt, className, sizes }: ThemedImageProps) {
  return (
    <picture className={className}>
      <img src={light} alt={alt} sizes={sizes} className="theme-light-only h-full w-full object-cover" />
      <img
        src={dark}
        alt=""
        aria-hidden="true"
        sizes={sizes}
        className="theme-dark-only h-full w-full object-cover"
      />
    </picture>
  )
}

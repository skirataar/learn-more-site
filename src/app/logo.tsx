import Image from 'next/image'

// Logo Component
export function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="THEVANI Logo"
      width={48}
      height={48}
      className={`${className} object-contain`}
      priority
    />
  )
}

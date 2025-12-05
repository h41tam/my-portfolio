import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = {
  default: 'inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none',
  outline: 'inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 text-sm font-medium text-foreground bg-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none',
}

const sizes = {
  sm: 'h-9 px-3',
  md: 'h-10 px-4',
  lg: 'h-11 px-6 text-base',
}

const Button = forwardRef(({ className, variant = 'default', size = 'md', ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants[variant], sizes[size], className)}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button }
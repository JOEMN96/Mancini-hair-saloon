import { cn } from "@/lib/utils"
import { motion, type HTMLMotionProps } from "motion/react"
import { forwardRef, type ReactNode } from "react"

interface MinimalCardProps extends Omit<HTMLMotionProps<"div">, "ref" | "children"> {
  hover?: boolean
  children?: ReactNode
}

export const MinimalCard = forwardRef<HTMLDivElement, MinimalCardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(
          "group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300",
          "hover:border-primary/30 hover:shadow-md",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative z-10">{children}</div>
      </motion.div>
    )
  }
)
MinimalCard.displayName = "MinimalCard"

export const MinimalCardIcon = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-sm transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
MinimalCardIcon.displayName = "MinimalCardIcon"

export const MinimalCardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn("text-lg font-semibold mb-2", className)}
        {...props}
      />
    )
  }
)
MinimalCardTitle.displayName = "MinimalCardTitle"

export const MinimalCardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
      />
    )
  }
)
MinimalCardDescription.displayName = "MinimalCardDescription"

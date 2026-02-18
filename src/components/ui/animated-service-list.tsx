import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

interface AnimatedServiceItemProps {
  children: ReactNode;
  index: number;
}

export function AnimatedServiceItem({ children, index }: AnimatedServiceItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}

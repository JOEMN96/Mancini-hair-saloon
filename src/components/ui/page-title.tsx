import GradientText from "@/components/GradientText";
import { cn } from "@/lib/utils";

interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
  size?: "h1" | "h2";
}

export function PageTitle({ children, className, size = "h1" }: PageTitleProps) {
  const sizeClasses = {
    h1: "text-4xl md:text-5xl",
    h2: "text-3xl",
  };

  return (
    <GradientText
      className={cn(sizeClasses[size], "font-bold text-center", className)}
      colors={["#6366f1", "#ec4899", "#8b5cf6"]}
      animationSpeed={4}
    >
      {children}
    </GradientText>
  );
}

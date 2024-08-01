import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex max-w-fit flex-row items-center justify-center text-sm font-medium transition-shadow duration-900 ease-out [--bg-size:300%]",
        className
      )}
    >
      {children}
    </div>
  );
}

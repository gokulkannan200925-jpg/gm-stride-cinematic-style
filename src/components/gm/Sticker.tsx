import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "brand" | "flash" | "chrome" | "outline";

const tones: Record<Tone, string> = {
  brand: "bg-gradient-brand text-brand-foreground shadow-glow",
  flash: "bg-flash text-flash-foreground shadow-flash",
  chrome: "bg-gradient-chrome text-ink shadow-lift",
  outline: "bg-card text-ink border-2 border-ink",
};

export function Sticker({
  children,
  tone = "brand",
  rotate = -6,
  delay = 0,
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  rotate?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <span
      style={
        {
          "--sticker-rot": `${rotate}deg`,
          animation: `pop-in 0.7s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms both`,
        } as React.CSSProperties
      }
      className={cn(
        "font-display inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.14em] select-none",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

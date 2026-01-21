import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-accent-500 text-white hover:bg-accent-400 focus-visible:outline-accent-300 shadow-lg shadow-accent-500/30",
        secondary:
          "border border-white/20 text-white hover:border-accent-300 hover:text-accent-50 focus-visible:outline-accent-300 bg-white/5",
        ghost: "text-white/80 hover:text-white hover:bg-white/5",
        subtle: "bg-ink-800 text-white hover:bg-ink-700",
      },
      size: {
        sm: "px-3 py-2 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-5 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonStyles> & {
  children: React.ReactNode;
  className?: string;
};

type ButtonProps = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = ButtonBaseProps & { href: string };

export function Button({ variant, size, className, children, ...rest }: ButtonProps) {
  return (
    <button className={cn(buttonStyles({ variant, size }), className)} {...rest}>
      {children}
    </button>
  );
}

export function LinkButton({ variant, size, className, children, href }: LinkButtonProps) {
  return (
    <Link className={cn(buttonStyles({ variant, size }), className)} href={href}>
      {children}
    </Link>
  );
}

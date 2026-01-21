import Link from "next/link";
import type { Route } from "next";
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

type ButtonBaseProps = {
  variant?: VariantProps<typeof buttonStyles>["variant"] | (string & {});
  size?: VariantProps<typeof buttonStyles>["size"];
  children: React.ReactNode;
  className?: string;
};

type ButtonProps = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button({ variant, size, className, children, ...rest }: ButtonProps) {
  const styles = buttonStyles({ variant: variant as VariantProps<typeof buttonStyles>["variant"], size });
  return (
    <button className={cn(styles, className)} {...rest}>
      {children}
    </button>
  );
}

export function LinkButton({ variant, size, className, children, href, target, rel, ...rest }: LinkButtonProps) {
  const styles = buttonStyles({ variant: variant as VariantProps<typeof buttonStyles>["variant"], size });
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a
        className={cn(styles, className)}
        href={href}
        target={target ?? "_blank"}
        rel={rel ?? "noreferrer"}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link className={cn(styles, className)} href={href as Route} target={target} rel={rel} {...rest}>
      {children}
    </Link>
  );
}

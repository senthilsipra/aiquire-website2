"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "hero" | "outline-white";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /**
   * When true, the Button renders its child element directly, merging all
   * button props and className onto it. Useful for wrapping Next.js <Link>.
   */
  asChild?: boolean;
  loading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "bg-accent text-white border border-accent",
    "hover:bg-accent-light hover:border-accent-light",
    "active:bg-accent-dark active:border-accent-dark",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
    "disabled:bg-accent/50 disabled:border-accent/50 disabled:cursor-not-allowed",
  ].join(" "),
  secondary: [
    "bg-transparent text-accent border border-accent",
    "hover:bg-accent hover:text-white",
    "active:bg-accent-dark active:border-accent-dark active:text-white",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
    "disabled:text-accent/50 disabled:border-accent/50 disabled:cursor-not-allowed",
  ].join(" "),
  ghost: [
    "bg-transparent text-accent border border-transparent",
    "hover:bg-bgBlue hover:border-bgBlue",
    "active:bg-accent/10",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
    "disabled:text-accent/40 disabled:cursor-not-allowed",
  ].join(" "),
  hero: [
    "bg-primary text-white font-semibold border-none shadow-lg hover:shadow-xl",
    "hover:bg-primary/90 hover:-translate-y-0.5",
    "transition-all duration-300",
  ].join(" "),
  "outline-white": [
    "border-2 border-white/60 text-white bg-transparent",
    "hover:bg-white/10 transition-all duration-300",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5 rounded-md",
  md: "h-11 px-6 text-base gap-2 rounded-lg",
  lg: "h-14 px-8 text-lg gap-2.5 rounded-xl",
};

const Spinner: React.FC<{ size: ButtonSize }> = ({ size }) => {
  const spinnerSize =
    size === "sm" ? "h-3.5 w-3.5" : size === "lg" ? "h-5 w-5" : "h-4 w-4";

  return (
    <svg
      className={cn("animate-spin shrink-0", spinnerSize)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
};

/**
 * Shared base classes that are always applied regardless of variant/size.
 */
const baseClasses = [
  "inline-flex items-center justify-center",
  "font-body font-medium",
  "transition-all duration-200 ease-smooth",
  "select-none whitespace-nowrap",
  "focus-visible:outline-none",
].join(" ");

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      asChild = false,
      loading = false,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const composedClassName = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    const content = (
      <>
        {loading && <Spinner size={size} />}
        {children}
      </>
    );

    /**
     * asChild mode: clone the single child element and forward all props onto it.
     * This avoids a dependency on @radix-ui/react-slot while keeping the API
     * compatible with the common pattern of wrapping Next.js <Link>.
     */
    if (asChild) {
      const child = React.Children.only(children) as React.ReactElement<
        React.HTMLAttributes<HTMLElement> & { className?: string }
      >;

      return React.cloneElement(child, {
        ...props,
        className: cn(composedClassName, child.props.className),
        children: (
          <>
            {loading && <Spinner size={size} />}
            {child.props.children}
          </>
        ),
      } as React.HTMLAttributes<HTMLElement>);
    }

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        className={composedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };

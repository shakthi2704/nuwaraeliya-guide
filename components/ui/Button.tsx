"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant =
    | "gold"
    | "glass"
    | "outline"
    | "dark"
    | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

interface ButtonVariantsProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
}

export function buttonVariants({
    variant = "gold",
    size = "md",
    className,
}: ButtonVariantsProps = {}) {
    return cn(
        // Base
        "inline-flex items-center justify-center",
        "font-semibold uppercase tracking-[0.12em]",
        "transition-all duration-300",
        "whitespace-nowrap",
        "rounded-sm",
        "select-none",
        "focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",

        // Variants
        variant === "gold" &&
        [
            "bg-[var(--color-gold)]",
            "text-[var(--color-forest)]",
            "hover:bg-[var(--color-gold-mid)]",
            "hover:-translate-y-1",
            "shadow-lg",
        ],

        variant === "glass" &&
        [
            "bg-white/10",
            "backdrop-blur-md",
            "border border-white/20",
            "text-white",
            "hover:bg-white",
            "hover:text-[var(--color-forest)]",
            "hover:border-white",
            "hover:-translate-y-1",
        ],

        variant === "outline" &&
        [
            "border border-[var(--color-gold)]",
            "text-[var(--color-gold)]",
            "hover:bg-[var(--color-gold)]",
            "hover:text-[var(--color-forest)]",
            "hover:-translate-y-1",
        ],

        variant === "dark" &&
        [
            "bg-[var(--color-forest)]",
            "text-white",
            "hover:bg-[var(--color-green)]",
        ],

        variant === "ghost" &&
        [
            "text-[var(--color-forest)]",
            "hover:bg-black/5",
        ],

        // Sizes
        size === "sm" && "text-[11px] px-4 py-2",
        size === "md" && "text-[12px] px-6 py-3",
        size === "lg" && "text-[13px] px-8 py-4",

        className
    );
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant, size, className, ...props }, ref) => (
        <button
            ref={ref}
            className={buttonVariants({
                variant,
                size,
                className,
            })}
            {...props}
        />
    )
);

Button.displayName = "Button";

interface ButtonLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
}

export function ButtonLink({
    href,
    variant = "gold",
    size = "md",
    className,
    children,
    ...props
}: ButtonLinkProps) {
    return (
        <Link
            href={href}
            className={buttonVariants({
                variant,
                size,
                className,
            })}
            {...props}
        >
            {children}
        </Link>
    );
}
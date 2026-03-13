import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

export const McKinseyLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 40" className={cn("fill-current", className)} aria-label="McKinsey & Company Logo">
        <path d="M12 10h4v20h-4V10zm10 0h6l4 8 4-8h6v20h-4V16l-6 12-6-12v14h-4V10zm24 10a5 5 0 1 1 5-5 5 5 0 0 1-5 5zm0 10a5 5 0 1 1 5-5 5 5 0 0 1-5 5zm15-20h4v20h-4V10zm10 0h12v4h-8v4h6v4h-6v4h8v4h-12V10z" />
    </svg>
);

export const BCGLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 40" className={cn("fill-current", className)} aria-label="BCG Logo">
        <path d="M10 10h15c5 0 8 3 8 7s-3 7-8 7H10V10zm4 4v6h11c3 0 4-1 4-3s-1-3-4-3H14zm25-4h18v4h-14v4h12v4h-12v4h14v4H39V10zm25 10a10 10 0 1 1 10-10 10 10 0 0 1-10 10z" />
    </svg>
);

export const DeloitteLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 40" className={cn("fill-current", className)} aria-label="Deloitte Logo">
        <path d="M10 10h6v12h10V10h6v20H10V10zm36 10a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm20 10a10 10 0 1 1 10-10 10 10 0 0 1-10 10z" />
        <circle cx="90" cy="30" r="4" className="fill-accent" />
    </svg>
);

export const AccentureLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 40" className={cn("fill-current", className)} aria-label="Accenture Logo">
        <path d="M10 10h20l-10 20L10 10zM40 10a10 10 0 1 1 10 10 10 10 0 0 1-10-10zm20 0h20v20H60V10z" />
        <path d="M35 8l4 4-4 4" className="fill-accent" />
    </svg>
);

export const GoogleLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 40" className={cn("fill-current", className)} aria-label="Google Logo">
        <path d="M20 20c0-5 4-10 10-10 3 0 5 1 7 3l-3 3c-1-1-3-1-4-1-3 0-6 3-6 6s3 6 6 6c2 0 4-1 5-3h-5v-4h9v8c-3 3-6 3-9 3-6 0-10-5-10-10zm25 0a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm25 0a10 10 0 1 1 20 0 10 10 0 0 1-20 0z" />
    </svg>
);

export const MetaLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 40" className={cn("fill-current", className)} aria-label="Meta Logo">
        <path d="M20 20c0 5 4 10 10 10s10-5 10-10-4-10-10-10-10 5-10 10zm30 0c0 5 4 10 10 10s10-5 10-10-4-10-10-10-10 5-10 10z" />
    </svg>
);

export const AmazonLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 40" className={cn("fill-current", className)} aria-label="Amazon Logo">
        <path d="M10 20h10v10H10V20zm20 0h10v10H30V20zm20 0h10v10H50V20z" />
        <path d="M10 35c5 5 15 5 20 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

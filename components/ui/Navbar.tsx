"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
    { label: "Experiences", href: "/experiences" },
    { label: "Trip Ideas", href: "/trip-ideas" },
    { label: "Travel Guides", href: "/guides" },
    { label: "About", href: "/about" },
];

const TRANSPARENT_PAGES = ["/"];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const isTransparentPage = TRANSPARENT_PAGES.includes(pathname);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => { setMenuOpen(false); }, [pathname]);

    const isSolid = !isTransparentPage || scrolled;

    return (
        <>
            {/*
              ::after pseudo-element for the nav link underline animation
              cannot be expressed in Tailwind — scoped here, touches nothing else.
            */}
            <style>{`
                .nav-link::after {
                    content: "";
                    position: absolute;
                    bottom: -2px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 1px;
                    background: var(--color-gold-mid);
                    transition: width 0.26s ease;
                }
                .nav-link:hover::after,
                .nav-link--active::after { width: 100%; }
            `}</style>

            {/* ── Header ── */}
            <header
                className={[
                    "fixed top-0 left-0 right-0 z-50 h-[68px]",
                    "transition-[background,border-color,box-shadow] duration-400 ease-in-out",
                    isSolid
                        ? "bg-[rgba(14,28,18,0.94)] border-b border-[rgba(184,146,74,0.2)] shadow-[0_8px_32px_rgba(0,0,0,0.22)] backdrop-blur-xl"
                        : "bg-[rgba(14,28,18,0.35)] border-b border-transparent backdrop-blur-sm",
                ].join(" ")}
            >
                <div className="w-full max-w-[1380px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)] h-full flex items-center relative">

                    {/* Logo */}
                    <Link href="/" className="flex flex-col gap-[2px] flex-shrink-0 z-[2] no-underline">
                        <span
                            className="leading-none tracking-[-0.02em] text-white font-bold"
                            style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem" }}
                        >
                            Nuwara Eliya
                        </span>
                        <span
                            className="leading-none tracking-[0.3em] uppercase text-[var(--color-gold-mid)]"
                            style={{ fontFamily: "var(--font-sans)", fontSize: "0.48rem", fontWeight: 500 }}
                        >
                            Guide
                        </span>
                    </Link>

                    {/* Desktop nav — centered absolutely */}
                    <nav
                        className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10"
                        aria-label="Primary navigation"
                    >
                        {NAV_LINKS.map(({ label, href }) => {
                            const active = pathname === href || pathname.startsWith(href + "/");
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={[
                                        "nav-link relative pb-[2px] no-underline",
                                        "transition-colors duration-200 ease-in-out",
                                        "tracking-[0.15em] uppercase",
                                        active
                                            ? "nav-link--active text-[var(--color-gold-mid)]"
                                            : "text-white/58 hover:text-white/92",
                                    ].join(" ")}
                                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 500 }}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block ml-auto flex-shrink-0 z-[2]">
                        <Link
                            href="/planner"
                            className="inline-flex items-center justify-center tracking-[0.16em] uppercase whitespace-nowrap no-underline transition-colors duration-200
                                       bg-[var(--color-gold-mid)] text-[var(--color-forest)] hover:bg-[var(--color-gold)]"
                            style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 600, padding: "0.55rem 1.35rem", borderRadius: "1px" }}
                        >
                            Plan My Trip
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="flex md:hidden flex-col justify-center items-center gap-[5px] w-9 h-9 ml-auto z-[2]"
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        <span className={`block w-[22px] h-[1.5px] bg-white/82 rounded-[1px] transition-transform duration-240 origin-center ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
                        <span className={`block w-[22px] h-[1.5px] bg-white/82 rounded-[1px] transition-[opacity,transform] duration-240 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                        <span className={`block w-[22px] h-[1.5px] bg-white/82 rounded-[1px] transition-transform duration-240 origin-center ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
                    </button>

                </div>
            </header>

            {/* Mobile drawer */}
            <div
                className={[
                    "md:hidden fixed top-[68px] left-0 right-0 z-49 flex flex-col",
                    "bg-[rgba(14,28,18,0.97)] border-b border-[rgba(184,146,74,0.12)] backdrop-blur-xl",
                    "px-6 pt-2 pb-6",
                    "transition-[opacity,transform] duration-240 ease-in-out",
                    menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-[6px] pointer-events-none",
                ].join(" ")}
                aria-hidden={!menuOpen}
            >
                <nav className="flex flex-col">
                    {NAV_LINKS.map(({ label, href }) => {
                        const active = pathname === href || pathname.startsWith(href + "/");
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={[
                                    "py-4 border-b border-white/6 no-underline tracking-[0.14em] uppercase transition-colors duration-200",
                                    active ? "text-[var(--color-gold-mid)]" : "text-white/58 hover:text-[var(--color-gold-mid)]",
                                ].join(" ")}
                                style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 500 }}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>
                <div className="pt-6">
                    <Link
                        href="/planner"
                        className="block text-center w-full tracking-[0.16em] uppercase no-underline transition-colors duration-200
                                   bg-[var(--color-gold-mid)] text-[var(--color-forest)] hover:bg-[var(--color-gold)]"
                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 600, padding: "0.85rem", borderRadius: "1px" }}
                    >
                        Plan My Trip
                    </Link>
                </div>
            </div>

            {/* Spacer for non-transparent pages */}
            {!isTransparentPage && <div className="h-[68px]" />}
        </>
    );
}
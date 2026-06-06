"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Things To Do", href: "/things" },
    { label: "Itineraries", href: "/plans" },
    { label: "Transport", href: "/transport" },
    { label: "Stay", href: "/stay" },
    { label: "Blog", href: "/blog" },
    { label: "Ask Local", href: "/ask" },
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
            <header
                style={{
                    position: "fixed",
                    top: 0, left: 0, right: 0,
                    zIndex: 50,
                    height: "64px",
                    background: isSolid ? "rgba(6,15,9,0.82)" : "rgba(6,15,9,0.52)",
                    // backdropFilter: isSolid ? "blur(12px)" : "none",
                    borderBottom: isSolid
                        ? "2px solid rgba(201,165,90,0.25)"
                        : "1px solid transparent",
                    boxShadow: isSolid
                        ? "0 1px 0 rgba(201,165,90,0.15), 0 4px 24px rgba(0,0,0,0.25)"
                        : "none",
                    WebkitBackdropFilter: isSolid ? "blur(12px)" : "none",
                    // borderBottom: isSolid
                    //     ? `1px solid rgba(201,165,90,${scrolled ? "0.15" : "0.08"})`
                    //     : "1px solid transparent",
                    transition: "all 0.4s ease",


                }}
            >
                <div className="container" style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                }}>

                    {/* LOGO (LEFT) */}
                    <div style={{ zIndex: 2 }}>
                        <Link href="/" style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                            <span style={{
                                fontFamily: "var(--font-display)",
                                fontWeight: 700,
                                fontSize: "1.15rem",
                                color: "#ffffff",
                                lineHeight: 1,
                                letterSpacing: "-0.02em",
                            }}>
                                Nuwara Eliya
                            </span>
                            <span style={{
                                fontFamily: "var(--font-sans)",
                                fontWeight: 400,
                                fontSize: "0.58rem",
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                color: "var(--color-gold)",
                            }}>
                                Guide
                            </span>
                        </Link>
                    </div>

                    {/* NAV (CENTER) */}
                    <nav
                        className="hidden md:flex"
                        style={{
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                            alignItems: "center",
                            gap: "1.8rem",
                        }}
                    >
                        {NAV_LINKS.map(({ label, href }) => {
                            const active = pathname === href || pathname.startsWith(href + "/");
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.8rem",
                                        fontWeight: 600,
                                        letterSpacing: "0.06em",
                                        textTransform: "uppercase",
                                        color: active ? "var(--color-gold)" : "rgba(255,255,255,0.7)",
                                        borderBottom: active ? "1px solid var(--color-gold)" : "1px solid transparent",
                                        paddingBottom: "2px",
                                        transition: "color 0.2s ease, border-color 0.2s ease",
                                    }}
                                    onMouseEnter={e => { if (!active) e.currentTarget.style.color = "#ffffff"; }}
                                    onMouseLeave={e => { if (!active) e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* BUTTON (RIGHT) — desktop only */}
                    <div className="hidden md:block" style={{ marginLeft: "auto", zIndex: 2 }}>
                        <Link
                            href="/planner"
                            style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "0.75rem",
                                fontWeight: 500,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                color: "var(--color-forest)",
                                background: "var(--color-gold)",
                                padding: "0.45rem 1.1rem",
                                borderRadius: "2px",
                                transition: "background 0.2s ease",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = "var(--color-gold-light)"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "var(--color-gold)"; }}
                        >
                            Plan My Trip
                        </Link>
                    </div>

                    {/* MOBILE HAMBURGER — mobile only */}
                    <button
                        className="flex md:hidden"
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        style={{
                            marginLeft: "auto",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "5px",
                            width: "36px",
                            height: "36px",
                            zIndex: 2,
                        }}
                    >
                        {menuOpen ? (
                            // × close icon
                            <span style={{ color: "white", fontSize: "1.4rem", lineHeight: 1 }}>✕</span>
                        ) : (
                            [0, 1, 2].map(i => (
                                <span key={i} style={{
                                    display: "block",
                                    width: "22px",
                                    height: "1.5px",
                                    background: "white",
                                }} />
                            ))
                        )}
                    </button>

                </div>
            </header>

            {/* MOBILE MENU DROPDOWN */}
            {menuOpen && (
                <div
                    className="flex md:hidden"
                    style={{
                        position: "fixed",
                        top: "64px",
                        left: 0,
                        right: 0,
                        zIndex: 49,
                        background: "rgba(6,15,9,0.97)",
                        borderBottom: "1px solid rgba(201,165,90,0.2)",
                        flexDirection: "column",
                        padding: "1.5rem",
                        gap: "0.25rem",
                    }}
                >
                    {NAV_LINKS.map(({ label, href }) => {
                        const active = pathname === href || pathname.startsWith(href + "/");
                        return (
                            <Link
                                key={href}
                                href={href}
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "0.9rem",
                                    fontWeight: 500,
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase",
                                    color: active ? "var(--color-gold)" : "rgba(255,255,255,0.75)",
                                    padding: "0.9rem 0",
                                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                                    display: "block",
                                }}
                            >
                                {label}
                            </Link>
                        );
                    })}

                    {/* CTA */}
                    <div style={{ paddingTop: "1.25rem" }}>
                        <Link
                            href="/planner"
                            style={{
                                display: "block",
                                textAlign: "center",
                                fontFamily: "var(--font-sans)",
                                fontSize: "0.8rem",
                                fontWeight: 500,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                color: "var(--color-forest)",
                                background: "var(--color-gold)",
                                padding: "0.85rem",
                                borderRadius: "2px",
                            }}
                        >
                            Plan My Trip
                        </Link>
                    </div>
                </div>
            )}

            {!isTransparentPage && <div style={{ height: "72px" }} />}
        </>
    );
}
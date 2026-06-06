"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

const EXPLORE = [
    { label: "Places to Visit", href: "/places" },
    { label: "Where to Stay", href: "/hotels" },
    { label: "Travel Journal", href: "/blog" },
    { label: "Plan My Trip", href: "/planner" },
    { label: "Contact Us", href: "/contact" },
];

const HIGHLIGHTS = [
    "Horton Plains & World's End",
    "Gregory Lake",
    "Victoria Park",
    "Hakgala Botanical Garden",
    "Single Tree Hill",
    "Nuwara Eliya Race Course",
];

const PRACTICAL = [
    { label: "Best Time to Visit", href: "/blog" },
    { label: "Getting There", href: "/blog" },
    { label: "Weather Guide", href: "/blog" },
    { label: "Local Tips", href: "/blog" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={{ background: "var(--color-forest)", color: "white", borderTop: "1px solid rgba(201,165,90,0.18)", }}>

            {/* ── Main Grid ── */}
            <div className="container" style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
                    style={{ gap: "3rem" }}
                >

                    {/* Col 1 — Brand */}
                    <div>
                        <div style={{ marginBottom: "1rem" }}>
                            <p
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontWeight: 700,
                                    fontSize: "1.25rem",
                                    color: "white",
                                    lineHeight: 1,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Nuwara Eliya
                            </p>
                            <p
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "0.58rem",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    color: "var(--color-gold)",
                                    marginTop: "3px",
                                }}
                            >
                                Guide
                            </p>
                        </div>
                        <p
                            style={{
                                fontFamily: "var(--font-serif)",
                                fontStyle: "italic",
                                fontSize: "1rem",
                                color: "rgba(255,255,255,0.5)",
                                lineHeight: 1.7,
                                maxWidth: "240px",
                                marginBottom: "1.5rem",
                            }}
                        >
                            The hill country, properly explored. Honest advice from locals — not an agency.
                        </p>

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/94777000000?text=Hello!%20I%20have%20a%20question%20about%20Nuwara%20Eliya"
                            target="_blank"
                            rel="noopener"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                fontFamily: "var(--font-sans)",
                                fontSize: "0.75rem",
                                fontWeight: 500,
                                color: "#25d366",
                                border: "1px solid rgba(37,211,102,0.3)",
                                borderRadius: "2px",
                                padding: "0.45rem 0.9rem",
                            }}
                        >
                            <MessageCircle size={16} strokeWidth={1.75} />
                            <span>WhatsApp Us</span>
                        </a>
                    </div>

                    {/* Col 2 — Explore */}
                    <div>
                        <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Explore</p>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                            {EXPLORE.map(({ label, href }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        style={{
                                            fontFamily: "var(--font-serif)",
                                            fontSize: "0.85rem",
                                            color: "rgba(255,255,255,0.6)",
                                            transition: "color 0.2s",
                                        }}
                                        onMouseEnter={e => (e.currentTarget.style.color = "var(--color-gold)")}
                                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Top Highlights */}
                    <div>
                        <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Top Highlights</p>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                            {HIGHLIGHTS.map((name) => (
                                <li
                                    key={name}
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.85rem",
                                        color: "rgba(255,255,255,0.6)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                >
                                    <span style={{ color: "var(--color-gold)", fontSize: "0.5rem" }}>◆</span>
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 — Practical Info */}
                    <div>
                        <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Practical Info</p>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "2rem" }}>
                            {PRACTICAL.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        style={{
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "0.85rem",
                                            color: "rgba(255,255,255,0.6)",
                                            transition: "color 0.2s",
                                        }}
                                        onMouseEnter={e => (e.currentTarget.style.color = "var(--color-gold)")}
                                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Contact details */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <a
                                href="mailto:hello@nuwaraeliya.guide"
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "0.8rem",
                                    color: "rgba(255,255,255,0.45)",
                                }}
                            >
                                hello@nuwaraeliya.guide
                            </a>
                            <span
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "0.8rem",
                                    color: "rgba(255,255,255,0.45)",
                                }}
                            >
                                Nuwara Eliya, Sri Lanka
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── Bottom Bar ── */}
            <div
                style={{
                    borderTop: "1px solid rgba(255,255,255,0.08)",

                }}
            >
                <div
                    className="container"
                    style={{
                        paddingTop: "1.25rem",
                        paddingBottom: "1.25rem",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "0.75rem",
                    }}
                >
                    <p
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.75rem",
                            color: "rgba(255,255,255,0.3)",
                        }}
                    >
                        © {year} Nuwara Eliya Guide. All rights reserved.
                    </p>
                    <p
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.75rem",
                            color: "rgba(255,255,255,0.3)",
                        }}
                    >
                        Made with care in Sri Lanka 🇱🇰
                    </p>
                </div>
            </div>

        </footer>
    );
}
"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

const EXPLORE = [
    { label: "Experiences", href: "/experiences" },
    { label: "Trip Ideas", href: "/trip-ideas" },
    { label: "Travel Guides", href: "/guides" },
    { label: "Plan My Trip", href: "/planner" },
    { label: "About", href: "/about" },
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
    { label: "Best Time to Visit", href: "/guides/best-time-to-visit" },
    { label: "Getting There", href: "/guides/getting-there" },
    { label: "Weather Guide", href: "/guides/weather" },
    { label: "Local Tips", href: "/guides/local-tips" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#060e08] text-white">

            {/* Gold top rule */}
            <div
                className="h-[1px]"
                style={{ background: "linear-gradient(90deg, transparent, rgba(201,165,90,0.4), transparent)" }}
            />

            {/* Main grid */}
            <div className="w-full max-w-[1380px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)] pt-20 pb-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">

                    {/* Col 1 — Brand */}
                    <div>
                        <div className="mb-5">
                            <p
                                className="text-white font-bold leading-none tracking-[-0.02em]"
                                style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem" }}
                            >
                                Nuwara Eliya
                            </p>
                            <p
                                className="uppercase tracking-[0.28em] text-[var(--color-gold-mid)] mt-1"
                                style={{ fontFamily: "var(--font-sans)", fontSize: "0.5rem" }}
                            >
                                Guide
                            </p>
                        </div>

                        <p
                            className="italic text-white/38 leading-[1.75] max-w-[220px] mb-7"
                            style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem" }}
                        >
                            The hill country, properly explored. Honest advice from locals — not an agency.
                        </p>

                        <a
                            href="https://wa.me/94777000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#25d366] border border-[rgba(37,211,102,0.22)] transition-colors duration-200 hover:border-[rgba(37,211,102,0.5)]"
                            style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.06em", borderRadius: "2px", padding: "0.5rem 1rem" }}
                        >
                            <MessageCircle size={14} strokeWidth={1.75} />
                            WhatsApp Us
                        </a>
                    </div>

                    {/* Col 2 — Explore */}
                    <div>
                        <p
                            className="inline-block uppercase tracking-[0.2em] text-[var(--color-gold)] font-semibold mb-6"
                            style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)" }}
                        >
                            Explore
                        </p>
                        <ul className="flex flex-col gap-[0.85rem] list-none">
                            {EXPLORE.map(({ label, href }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="block text-white/45 transition-colors duration-200 hover:text-[var(--color-gold-mid)]"
                                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.83rem" }}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Top Highlights */}
                    <div>
                        <p
                            className="inline-block uppercase tracking-[0.2em] text-[var(--color-gold)] font-semibold mb-6"
                            style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)" }}
                        >
                            Top Highlights
                        </p>
                        <ul className="flex flex-col gap-[0.85rem] list-none">
                            {HIGHLIGHTS.map(name => (
                                <li
                                    key={name}
                                    className="flex items-center gap-[0.6rem] text-white/45"
                                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.83rem" }}
                                >
                                    <span className="w-1 h-1 rounded-full bg-[var(--color-gold-mid)] flex-shrink-0" />
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 — Practical */}
                    <div>
                        <p
                            className="inline-block uppercase tracking-[0.2em] text-[var(--color-gold)] font-semibold mb-6"
                            style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)" }}
                        >
                            Practical Info
                        </p>
                        <ul className="flex flex-col gap-[0.85rem] list-none mb-10">
                            {PRACTICAL.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="block text-white/45 transition-colors duration-200 hover:text-[var(--color-gold-mid)]"
                                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.83rem" }}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col gap-2">
                            <a
                                href="mailto:hello@nuwaraeliya.guide"
                                className="text-white/30 transition-colors duration-200 hover:text-white/70"
                                style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem" }}
                            >
                                hello@nuwaraeliya.guide
                            </a>
                            <span
                                className="text-white/30"
                                style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem" }}
                            >
                                Nuwara Eliya, Sri Lanka
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/6">
                <div className="w-full max-w-[1380px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)] py-5 flex flex-wrap items-center justify-between gap-3">
                    <p
                        className="text-white/22"
                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem" }}
                    >
                        &copy; {year} Nuwara Eliya Guide. All rights reserved.
                    </p>
                    <p
                        className="text-white/22"
                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem" }}
                    >
                        Made with care in Sri Lanka
                    </p>
                </div>
            </div>

        </footer>
    );
}
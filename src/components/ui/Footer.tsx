"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MessageCircle } from "lucide-react";

type IconProps = { size?: number; strokeWidth?: number };

function InstagramIcon({ size = 18, strokeWidth = 1.5 }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    );
}

function FacebookIcon({ size = 18, strokeWidth = 1.5 }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

// TODO: replace placeholder URLs and the WhatsApp number before launch
const SOCIAL = [
    { label: "Instagram", href: "https://instagram.com/", Icon: InstagramIcon },
    { label: "Facebook", href: "https://facebook.com/", Icon: FacebookIcon },
    { label: "WhatsApp", href: "https://wa.me/94777000000", Icon: MessageCircle },
] as const;

const EXPLORE = [
    { key: "experiences", href: "/experiences" },
    { key: "tripIdeas", href: "/trip-ideas" },
    { key: "guides", href: "/guides" },
    { key: "planTrip", href: "/plan-my-trip" },
    { key: "about", href: "/about" },
] as const;

const PRACTICAL = [
    { key: "bestTimeToVisit", href: "/guides/best-time-to-visit" },
    { key: "gettingThere", href: "/guides/getting-there" },
    { key: "weatherGuide", href: "/guides/weather" },
    { key: "localTips", href: "/guides/local-tips" },
] as const;

export default function Footer() {
    const t = useTranslations("footer");
    const year = new Date().getFullYear();
    const highlights = t.raw("highlights") as string[];

    return (
        <footer className="bg-[var(--color-forest)] text-white">
            {/* Gold top rule */}
            <div
                className="h-[1px]"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, rgba(201,165,90,0.4), transparent)",
                }}
            />

            {/* Main grid */}
            <div className="w-full max-w-[1380px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)] pt-20 pb-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">

                    {/* Col 1 — Brand */}
                    <div>
                        <div className="mb-5">
                            <p
                                className="text-white font-bold leading-none tracking-[-0.02em]"
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "1.2rem",
                                }}
                            >
                                {t("logoTitle")}
                            </p>

                            <p
                                className="uppercase tracking-[0.28em] text-[var(--color-gold-mid)] mt-1"
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "var(--text-xs)",
                                }}
                            >
                                {t("logoSubtitle")}
                            </p>
                        </div>

                        <p
                            className="italic text-white/65 leading-[1.75] max-w-[240px] mb-7"
                            style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "var(--text-sm)",
                            }}
                        >
                            {t("tagline")}
                        </p>

                        <ul className="flex items-center gap-3 list-none">
                            {SOCIAL.map(({ label, href, Icon }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="flex items-center justify-center w-10 h-10 text-white/70 border border-white/20 transition-colors duration-200 hover:text-[var(--color-gold-mid)] hover:border-[var(--color-gold-mid)]"
                                        style={{ borderRadius: "2px" }}
                                    >
                                        <Icon size={18} strokeWidth={1.5} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 2 — Explore */}
                    <div>
                        <p
                            className="inline-block uppercase tracking-[0.2em] text-[var(--color-gold)] font-semibold mb-6"
                            style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "var(--text-xs)",
                            }}
                        >
                            {t("exploreHeading")}
                        </p>

                        <ul className="flex flex-col gap-[0.85rem] list-none">
                            {EXPLORE.map(({ key, href }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="block text-white/70 transition-colors duration-200 hover:text-[var(--color-gold-mid)]"
                                        style={{
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "var(--text-sm)",
                                        }}
                                    >
                                        {t(key)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Top Highlights */}
                    <div>
                        <p
                            className="inline-block uppercase tracking-[0.2em] text-[var(--color-gold)] font-semibold mb-6"
                            style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "var(--text-xs)",
                            }}
                        >
                            {t("topHighlightsHeading")}
                        </p>

                        <ul className="flex flex-col gap-[0.85rem] list-none">
                            {highlights.map((name) => (
                                <li
                                    key={name}
                                    className="flex items-center gap-[0.6rem] text-white/70"
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "var(--text-sm)",
                                    }}
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
                            style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "var(--text-xs)",
                            }}
                        >
                            {t("practicalInfoHeading")}
                        </p>

                        <ul className="flex flex-col gap-[0.85rem] list-none mb-10">
                            {PRACTICAL.map(({ key, href }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="block text-white/70 transition-colors duration-200 hover:text-[var(--color-gold-mid)]"
                                        style={{
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "var(--text-sm)",
                                        }}
                                    >
                                        {t(key)}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col gap-2">
                            <a
                                href="mailto:hello@nuwaraeliya.guide"
                                className="text-white/55 transition-colors duration-200 hover:text-white"
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "var(--text-xs)",
                                }}
                            >
                                hello@nuwaraeliya.guide
                            </a>

                            <span
                                className="text-white/55"
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "var(--text-xs)",
                                }}
                            >
                                {t("location")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                className="border-t border-white/10"
                style={{ background: "rgba(0,0,0,0.22)" }}
            >
                <div className="w-full max-w-[1380px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)] py-5 flex flex-wrap items-center justify-between gap-3">
                    <p
                        className="text-white/50"
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "var(--text-xs)",
                        }}
                    >
                        {t("copyright", { year })}
                    </p>

                    <p
                        className="text-white/50"
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "var(--text-xs)",
                        }}
                    >
                        {t("madeWithCare")}
                    </p>
                </div>
            </div>
        </footer>
    );
}
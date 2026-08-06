"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MessageCircle } from "lucide-react";

const EXPLORE = [
    { key: "experiences", href: "/experiences" },
    { key: "tripIdeas", href: "/trip-ideas" },
    { key: "guides", href: "/guides" },
    { key: "planTrip", href: "/planner" },
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
                                {t("logoTitle")}
                            </p>
                            <p
                                className="uppercase tracking-[0.28em] text-[var(--color-gold-mid)] mt-1"
                                style={{ fontFamily: "var(--font-sans)", fontSize: "0.5rem" }}
                            >
                                {t("logoSubtitle")}
                            </p>
                        </div>

                        <p
                            className="italic text-white/38 leading-[1.75] max-w-[220px] mb-7"
                            style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem" }}
                        >
                            {t("tagline")}
                        </p>

                        <a
                            href="https://wa.me/94777000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#25d366] border border-[rgba(37,211,102,0.22)] transition-colors duration-200 hover:border-[rgba(37,211,102,0.5)]"
                            style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.06em", borderRadius: "2px", padding: "0.5rem 1rem" }}
                        >
                            <MessageCircle size={14} strokeWidth={1.75} />
                            {t("whatsappUs")}
                        </a>
                    </div>

                    {/* Col 2 — Explore */}
                    <div>
                        <p
                            className="inline-block uppercase tracking-[0.2em] text-[var(--color-gold)] font-semibold mb-6"
                            style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)" }}
                        >
                            {t("exploreHeading")}
                        </p>
                        <ul className="flex flex-col gap-[0.85rem] list-none">
                            {EXPLORE.map(({ key, href }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="block text-white/45 transition-colors duration-200 hover:text-[var(--color-gold-mid)]"
                                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.83rem" }}
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
                            style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)" }}
                        >
                            {t("topHighlightsHeading")}
                        </p>
                        <ul className="flex flex-col gap-[0.85rem] list-none">
                            {highlights.map(name => (
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
                            {t("practicalInfoHeading")}
                        </p>
                        <ul className="flex flex-col gap-[0.85rem] list-none mb-10">
                            {PRACTICAL.map(({ key, href }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="block text-white/45 transition-colors duration-200 hover:text-[var(--color-gold-mid)]"
                                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.83rem" }}
                                    >
                                        {t(key)}
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
                                {t("location")}
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
                        {t("copyright", { year })}
                    </p>
                    <p
                        className="text-white/22"
                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem" }}
                    >
                        {t("madeWithCare")}
                    </p>
                </div>
            </div>

        </footer>
    );
}
"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Experience } from "@/lib/data/experiences";

export default function ExperienceDetail({ experience }: { experience: Experience }) {
    const t = useTranslations("experienceDetail");

    return (
        <article>

            {/* ── Hero image ── */}
            <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "21/9" }}
            >
                <img
                    src={experience.image}
                    alt={experience.alt}
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to top, rgba(10,31,18,0.75) 0%, transparent 45%)",
                    }}
                />

                {/* Category badge, floated on the image like the card pattern */}
                <span
                    className="absolute bottom-6 left-6 sm:left-10 uppercase tracking-[0.18em]"
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-xs)",
                        fontWeight: 700,
                        color: "#0a1f12",
                        background: "var(--color-gold-mid)",
                        padding: "0.28rem 0.65rem",
                        borderRadius: "10px 10px 0 0",
                    }}
                >
                    {experience.category}
                </span>
            </div>

            {/* ── Body ── */}
            <div
                className="w-full max-w-[720px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)]"
                style={{ paddingTop: "clamp(3rem,6vw,5rem)", paddingBottom: "clamp(5rem,9vw,8.5rem)" }}
            >

                <Link
                    href="/experiences"
                    className="inline-flex items-center gap-2 uppercase tracking-[0.2em] no-underline transition-colors duration-200 hover:text-[var(--color-gold-mid)] mb-10"
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-xs)",
                        fontWeight: 600,
                        color: "var(--color-muted)",
                    }}
                >
                    <span style={{ fontSize: "1rem", lineHeight: 1 }}>&#8592;</span>
                    {t("backToExperiences")}
                </Link>

                <h1
                    className="mb-4"
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-3xl)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.05,
                        color: "var(--color-ink)",
                    }}
                >
                    {experience.title}
                </h1>

                <p
                    className="uppercase tracking-[0.1em] mb-10"
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-xs)",
                        fontWeight: 600,
                        color: "var(--color-gold-mid)",
                    }}
                >
                    {t("durationLabel")} — {experience.duration}
                </p>

                {/* Body copy — split on blank lines into paragraphs */}
                <div className="flex flex-col gap-6">
                    {experience.body.split("\n\n").map((paragraph, i) => (
                        <p
                            key={i}
                            className="leading-[1.85]"
                            style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "var(--text-base)",
                                color: "var(--color-ink)",
                            }}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>

            </div>

        </article>
    );
}
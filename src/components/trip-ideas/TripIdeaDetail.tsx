"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { TripIdea } from "@/lib/data/trip-ideas";

export default function TripIdeaDetail({ idea }: { idea: TripIdea }) {
    const t = useTranslations("tripIdeaDetail");

    return (
        <article>

            {/* ── Hero image ── */}
            <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "21/9" }}
            >
                <img
                    src={idea.image}
                    alt={idea.alt}
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to top, rgba(10,31,18,0.75) 0%, transparent 45%)",
                    }}
                />

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
                    {idea.duration}
                </span>
            </div>

            {/* ── Body ── */}
            <div
                className="w-full max-w-[720px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)]"
                style={{ paddingTop: "clamp(3rem,6vw,5rem)", paddingBottom: "clamp(5rem,9vw,8.5rem)" }}
            >

                <Link
                    href="/trip-ideas"
                    className="inline-flex items-center gap-2 uppercase tracking-[0.2em] no-underline transition-colors duration-200 hover:text-[var(--color-gold-mid)] mb-10"
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-xs)",
                        fontWeight: 600,
                        color: "var(--color-muted)",
                    }}
                >
                    <span style={{ fontSize: "1rem", lineHeight: 1 }}>&#8592;</span>
                    {t("backToTripIdeas")}
                </Link>

                <h1
                    className="mb-10"
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-3xl)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.05,
                        color: "var(--color-ink)",
                    }}
                >
                    {idea.title}
                </h1>

                {/* Intro — split on blank lines into paragraphs */}
                <div className="flex flex-col gap-6 mb-12">
                    {idea.body.split("\n\n").map((paragraph, i) => (
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

                {/* Highlights */}
                <div
                    className="mb-14 py-6"
                    style={{
                        borderTop: "1px solid var(--color-border)",
                        borderBottom: "1px solid var(--color-border)",
                    }}
                >
                    <p
                        className="uppercase tracking-[0.2em] font-semibold mb-2"
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "var(--text-xs)",
                            color: "var(--color-gold)",
                        }}
                    >
                        {t("highlightsLabel")}
                    </p>
                    <p
                        className="leading-[1.7]"
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "var(--text-base)",
                            color: "var(--color-ink)",
                        }}
                    >
                        {idea.highlights.join(" · ")}
                    </p>
                </div>

                {/* ── Day-by-day timeline ── */}
                <ol className="list-none flex flex-col">
                    {idea.days.map((day, i) => (
                        <li key={i} className="relative pl-10 pb-10 last:pb-0">

                            {/* Connecting line */}
                            {i < idea.days.length - 1 && (
                                <span
                                    className="absolute left-[7px] top-[1.4rem] bottom-0 w-px"
                                    style={{ background: "var(--color-border)" }}
                                />
                            )}

                            {/* Marker */}
                            <span
                                className="absolute left-0 top-[0.35rem] w-[15px] h-[15px]"
                                style={{
                                    border: "2px solid var(--color-gold-mid)",
                                    background: "var(--color-base)",
                                    borderRadius: "50%",
                                }}
                            />

                            <p
                                className="uppercase tracking-[0.18em] font-semibold mb-1"
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "var(--text-xs)",
                                    color: "var(--color-gold)",
                                }}
                            >
                                {t("day")} {i + 1}
                            </p>

                            <h2
                                className="mb-3"
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "var(--text-xl)",
                                    fontWeight: 700,
                                    letterSpacing: "-0.02em",
                                    lineHeight: 1.2,
                                    color: "var(--color-ink)",
                                }}
                            >
                                {day.title}
                            </h2>

                            <p
                                className="leading-[1.8]"
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "var(--text-base)",
                                    color: "var(--color-muted)",
                                }}
                            >
                                {day.description}
                            </p>
                        </li>
                    ))}
                </ol>

            </div>

        </article>
    );
}
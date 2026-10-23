"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { TRIP_IDEAS, type TripIdea } from "@/lib/data/trip-ideas";

export default function TripIdeasGrid() {
    const t = useTranslations("tripIdeasPage");
    const featured = TRIP_IDEAS.find((idea) => idea.featured) ?? TRIP_IDEAS[0];
    const rest = TRIP_IDEAS.filter((idea) => idea.slug !== featured.slug);

    return (
        <section
            className="py-[clamp(5rem,9vw,8.5rem)]"
            style={{ background: "var(--color-base)" }}
        >
            <div className="w-full max-w-[1380px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)]">

                {/* ── Header ── */}
                <div className="flex flex-col items-center text-center mb-16">

                    <span
                        className="uppercase tracking-[0.22em] font-semibold text-[var(--color-gold)] mb-4"
                        style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)" }}
                    >
                        {t("eyebrow")}
                    </span>

                    <div
                        className="mb-6"
                        style={{ width: "32px", height: "2px", background: "var(--color-gold-mid)" }}
                    />

                    <h1
                        className="mb-4"
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--text-3xl)",
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                            lineHeight: 1.05,
                            maxWidth: "560px",
                            color: "var(--color-ink)",
                        }}
                    >
                        {t("heading")}
                    </h1>

                    <p
                        className="leading-[1.75]"
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "var(--text-sm)",
                            color: "var(--color-muted)",
                            maxWidth: "480px",
                        }}
                    >
                        {t("subheading")}
                    </p>

                </div>

                {/* ── Cards ── */}
                <div className="flex flex-col gap-6">
                    <TripCard idea={featured} height="clamp(320px,32vw,420px)" showHighlights eager />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {rest.map((idea) => (
                            <TripCard key={idea.slug} idea={idea} height="clamp(260px,28vw,340px)" />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

function TripCard({
    idea,
    height,
    showHighlights,
    eager,
}: {
    idea: TripIdea;
    height: string;
    showHighlights?: boolean;
    eager?: boolean;
}) {
    const t = useTranslations("tripIdeasPage");

    return (
        <Link
            href={`/trip-ideas/${idea.slug}`}
            className="group relative flex items-end overflow-hidden no-underline"
            style={{ height, borderRadius: "10px" }}
        >
            <img
                src={idea.image}
                alt={idea.alt}
                loading={eager ? "eager" : "lazy"}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to top, rgba(10,20,14,0.82) 0%, rgba(10,20,14,0.35) 45%, rgba(10,20,14,0.05) 70%)",
                }}
            />

            <div className="relative z-[1] flex flex-col gap-2 px-6 py-6 md:px-8 md:py-7">
                <span
                    className="uppercase tracking-[0.18em] font-semibold"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "var(--color-gold-mid)" }}
                >
                    {idea.duration}
                </span>

                <h2
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: showHighlights ? "var(--text-2xl)" : "var(--text-xl)",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        color: "#ffffff",
                    }}
                >
                    {idea.title}
                </h2>

                <p
                    className="leading-[1.6]"
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-sm)",
                        color: "rgba(255,255,255,0.82)",
                        maxWidth: "48ch",
                    }}
                >
                    {idea.description}
                </p>

                {showHighlights && (
                    <span
                        className="tracking-[0.04em]"
                        style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.65)" }}
                    >
                        {idea.highlights.join(" · ")}
                    </span>
                )}

                <span
                    className="uppercase tracking-[0.16em] font-semibold mt-2"
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-xs)",
                        color: "#ffffff",
                        borderBottom: "1px solid rgba(255,255,255,0.5)",
                        paddingBottom: "0.2rem",
                        width: "fit-content",
                    }}
                >
                    {t("viewItinerary")}
                </span>
            </div>
        </Link>
    );
}
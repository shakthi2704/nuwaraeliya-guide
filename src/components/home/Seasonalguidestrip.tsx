"use client";

import { useTranslations } from "next-intl";

type Rating = "best" | "good" | "ok" | "wet";

type Month = {
    short: string;
    full: string;
    rating: Rating;
    note: string;
};

type Season = {
    range: string;
    title: string;
    description: string;
};

const RATING_CONFIG: Record<Rating, { bar: number; color: string }> = {
    best: { bar: 1, color: "var(--color-ink)" },
    good: { bar: 0.72, color: "var(--color-green)" },
    ok: { bar: 0.48, color: "var(--color-sage)" },
    wet: { bar: 0.22, color: "rgba(14,28,18,0.3)" },
};

export default function SeasonalGuideStrip() {
    const t = useTranslations("seasonalGuide");
    const currentMonth = new Date().getMonth();
    const MONTHS = t.raw("months") as Month[];
    const SEASONS = t.raw("seasons") as Season[];

    return (
        <section
            className="py-[var(--section-gap-sm)]"
            style={{ background: "var(--color-gold-mid)" }}
        >
            <div className="w-full max-w-[1380px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)]">

                <span
                    className="uppercase tracking-[0.22em] font-semibold block mb-4"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "rgba(14,28,18,0.65)" }}
                >
                    {t("eyebrow")}
                </span>

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
                    <h2
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--text-2xl)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.1,
                            color: "var(--color-ink)",
                        }}
                    >
                        {t("heading")}
                    </h2>

                    <div className="flex flex-wrap items-center gap-4">
                        {(Object.keys(RATING_CONFIG) as Rating[]).map(r => (
                            <div key={r} className="flex items-center gap-1.5">
                                <span
                                    className="inline-block rounded-full flex-shrink-0"
                                    style={{ width: "8px", height: "8px", backgroundColor: RATING_CONFIG[r].color }}
                                />
                                <span
                                    className="tracking-[0.08em]"
                                    style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "rgba(14,28,18,0.75)" }}
                                >
                                    {t(`ratings.${r}`)}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <p
                    className="leading-[1.75] mb-10 max-w-[46ch]"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "rgba(14,28,18,0.72)" }}
                >
                    {t("intro")}
                </p>

                <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2">
                    {MONTHS.map((month, i) => {
                        const config = RATING_CONFIG[month.rating];
                        const isCurrent = i === currentMonth;

                        return (
                            <div
                                key={month.short}
                                className="relative flex flex-col items-center gap-2 py-4 px-1 transition-transform duration-200 hover:-translate-y-1"
                                style={{
                                    borderRadius: "10px",
                                    background: isCurrent ? "var(--color-ink)" : "rgba(255,255,255,0.55)",
                                    border: isCurrent ? "none" : "1px solid rgba(14,28,18,0.12)",
                                }}
                            >
                                {isCurrent && (
                                    <span
                                        className="absolute uppercase tracking-[0.1em] font-semibold whitespace-nowrap"
                                        style={{
                                            top: "-9px",
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "var(--text-xs)",
                                            background: "var(--color-gold-mid)",
                                            color: "var(--color-ink)",
                                            borderRadius: "999px",
                                            padding: "2px 8px",
                                        }}
                                    >
                                        {t("nowBadge")}
                                    </span>
                                )}

                                <span
                                    className="uppercase tracking-[0.08em] font-semibold"
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.72rem",
                                        color: isCurrent ? "#fff" : "var(--color-ink)",
                                    }}
                                >
                                    {month.short}
                                </span>

                                <div
                                    className="relative w-full overflow-hidden"
                                    style={{ height: "34px", borderRadius: "4px", background: "rgba(0,0,0,0.06)" }}
                                >
                                    <div
                                        className="absolute bottom-0 left-0 right-0"
                                        style={{
                                            height: `${config.bar * 100}%`,
                                            borderRadius: "4px",
                                            background: isCurrent ? "var(--color-gold-mid)" : config.color,
                                        }}
                                    />
                                </div>

                                <span
                                    className="uppercase tracking-[0.08em] text-center"
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "var(--text-xs)",
                                        color: isCurrent ? "rgba(255,255,255,0.85)" : "rgba(14,28,18,0.65)",
                                    }}
                                >
                                    {t(`ratings.${month.rating}`)}
                                </span>
                            </div>
                        );
                    })}
                </div>

                <div
                    className="mt-8 pt-4 flex flex-wrap items-center justify-between gap-3"
                    style={{ borderTop: "1px solid rgba(14,28,18,0.14)" }}
                >
                    <div className="flex items-center gap-3">
                        <span
                            className="inline-block rounded-full flex-shrink-0"
                            style={{
                                width: "8px",
                                height: "8px",
                                backgroundColor: RATING_CONFIG[MONTHS[currentMonth].rating].color,
                            }}
                        />
                        <span
                            className="uppercase tracking-[0.14em] font-semibold"
                            style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "var(--color-ink)" }}
                        >
                            {t("currentlyLabel", { month: MONTHS[currentMonth].full })}
                        </span>
                    </div>

                    <p
                        style={{
                            fontFamily: "var(--font-display)",
                            fontStyle: "italic",
                            fontSize: "0.9rem",
                            color: "rgba(14,28,18,0.72)",
                        }}
                    >
                        {MONTHS[currentMonth].note}
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x mt-12 pt-10"
                    style={{ borderColor: "rgba(14,28,18,0.16)", borderTop: "1px solid rgba(14,28,18,0.14)" }}
                >
                    {SEASONS.map(season => (
                        <div
                            key={season.title}
                            className="flex flex-col gap-2 py-5 lg:py-0 lg:px-6 first:pl-0 first:pt-0"
                        >
                            <span
                                className="uppercase tracking-[0.14em] font-semibold"
                                style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "rgba(14,28,18,0.6)" }}
                            >
                                {season.range}
                            </span>
                            <h3
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "var(--text-lg)",
                                    fontWeight: 700,
                                    letterSpacing: "-0.01em",
                                    color: "var(--color-ink)",
                                }}
                            >
                                {season.title}
                            </h3>
                            <p
                                className="leading-[1.6]"
                                style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "rgba(14,28,18,0.72)" }}
                            >
                                {season.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
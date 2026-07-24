"use client";

type Rating = "best" | "good" | "ok" | "wet";

type Month = {
    short: string;
    full: string;
    rating: Rating;
    note: string;
};

const MONTHS: Month[] = [
    { short: "Jan", full: "January", rating: "good", note: "Cool and dry. Peak season." },
    { short: "Feb", full: "February", rating: "best", note: "Best weather. Mild days." },
    { short: "Mar", full: "March", rating: "best", note: "Clear skies, warm afternoons." },
    { short: "Apr", full: "April", rating: "ok", note: "Occasional showers begin." },
    { short: "May", full: "May", rating: "wet", note: "South-west monsoon arrives." },
    { short: "Jun", full: "June", rating: "wet", note: "Heavy rain, misty hills." },
    { short: "Jul", full: "July", rating: "wet", note: "Peak monsoon. Lush green." },
    { short: "Aug", full: "August", rating: "wet", note: "Wet but dramatic scenery." },
    { short: "Sep", full: "September", rating: "ok", note: "Rain easing. Waterfalls peak." },
    { short: "Oct", full: "October", rating: "ok", note: "Inter-monsoon showers." },
    { short: "Nov", full: "November", rating: "good", note: "Cooling down. Good visits." },
    { short: "Dec", full: "December", rating: "best", note: "Cool, festive, and clear." },
];

type Season = {
    range: string;
    title: string;
    description: string;
};

const SEASONS: Season[] = [
    {
        range: "April",
        title: "The April Season",
        description: "Nuwara Eliya at its fullest — horse racing, motor racing, and the town in bloom.",
    },
    {
        range: "Dec — Mar",
        title: "Dry Season",
        description: "The clearest skies of the year. Best odds for uninterrupted views from Horton Plains.",
    },
    {
        range: "Jun — Sep",
        title: "Misty Mornings",
        description: "Fog rolls through the tea hills before sunrise. Quieter, slower, and photogenic.",
    },
    {
        range: "Oct — Nov, May",
        title: "Shoulder Season",
        description: "Fewer travelers, lower rates, and still good weather for getting around.",
    },
];

const RATING_CONFIG: Record<Rating, { label: string; bar: number; color: string }> = {
    best: { label: "Best", bar: 1, color: "var(--color-ink)" },
    good: { label: "Good", bar: 0.72, color: "var(--color-green)" },
    ok: { label: "Shoulder", bar: 0.48, color: "var(--color-sage)" },
    wet: { label: "Rainy", bar: 0.22, color: "rgba(14,28,18,0.3)" },
};

export default function SeasonalGuideStrip() {
    const currentMonth = new Date().getMonth();

    return (
        <section
            className="py-[var(--section-gap-sm)]"
            style={{ background: "var(--color-gold-mid)" }}
        >
            <div className="w-full max-w-[1380px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)]">

                {/* Header */}
                <span
                    className="uppercase tracking-[0.22em] font-semibold block mb-4"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", color: "rgba(14,28,18,0.65)" }}
                >
                    When to Visit
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
                        Best Time to Visit
                    </h2>

                    {/* Legend */}
                    <div className="flex flex-wrap items-center gap-4">
                        {(Object.keys(RATING_CONFIG) as Rating[]).map(r => (
                            <div key={r} className="flex items-center gap-1.5">
                                <span
                                    className="inline-block rounded-full flex-shrink-0"
                                    style={{ width: "8px", height: "8px", backgroundColor: RATING_CONFIG[r].color }}
                                />
                                <span
                                    className="tracking-[0.08em]"
                                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.66rem", color: "rgba(14,28,18,0.75)" }}
                                >
                                    {RATING_CONFIG[r].label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <p
                    className="leading-[1.75] mb-10 max-w-[46ch]"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "rgba(14,28,18,0.72)" }}
                >
                    Nuwara Eliya sits at 1,868m — it stays cool year-round, but the dry
                    season (December to March) is when the hills are at their most magical.
                </p>

                {/* Month grid */}
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
                                            fontSize: "0.5rem",
                                            background: "var(--color-gold-mid)",
                                            color: "var(--color-ink)",
                                            borderRadius: "999px",
                                            padding: "2px 8px",
                                        }}
                                    >
                                        Now
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
                                        fontSize: "0.6rem",
                                        color: isCurrent ? "rgba(255,255,255,0.85)" : "rgba(14,28,18,0.65)",
                                    }}
                                >
                                    {config.label}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Current month callout */}
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
                            style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", color: "var(--color-ink)" }}
                        >
                            Currently — {MONTHS[currentMonth].full}
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

                {/* Seasonal breakdown */}
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
                                style={{ fontFamily: "var(--font-sans)", fontSize: "0.66rem", color: "rgba(14,28,18,0.6)" }}
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
// MarqueeStrip — infinite scrolling keyword strip.
// Uses inline animation style — the most reliable cross-browser approach
// for a seamless marquee loop. translateX(-50%) works because the track
// contains exactly 2x the items, so the midpoint is visually identical
// to the start.

const KEYWORDS = [
    "Tea Country",
    "Colonial Charm",
    "Mountain Air",
    "Horse Racing",
    "Botanical Gardens",
    "Cool Climate",
    "Misty Peaks",
    "Scenic Train Rides",
    "Strawberry Fields",
    "Hill Station",
    "World's End",
    "Gregory Lake",
];

export default function MarqueeStrip() {
    const items = [...KEYWORDS, ...KEYWORDS];

    return (
        <section
            aria-label="Highlights"
            className="overflow-hidden py-[14px]"
            style={{
                background: "var(--color-gold-mid)",
                borderTop: "1px solid rgba(0,0,0,0.08)",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}
        >
            <div
                className="flex whitespace-nowrap"
                style={{
                    width: "max-content",
                    animation: "marquee 32s linear infinite",
                }}
            >
                {items.map((keyword, i) => (
                    <span key={i} className="inline-flex items-center">
                        <span
                            className="uppercase tracking-[0.18em]"
                            style={{
                                fontFamily: "var(--font-sans)",
                                fontWeight: 600,
                                fontSize: "0.65rem",
                                color: "var(--color-ink)",
                                opacity: 0.82,
                            }}
                        >
                            {keyword}
                        </span>
                        <span
                            className="inline-block mx-6 w-[4px] h-[4px] rounded-full flex-shrink-0 opacity-35"
                            style={{ background: "var(--color-ink)" }}
                            aria-hidden="true"
                        />
                    </span>
                ))}
            </div>
        </section>
    );
}
// components/home/MarqueeStrip.tsx
// Section 2 — scrolling keyword strip on gold background
// Server component — no interactivity needed

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

const Separator = () => (
    <span
        aria-hidden="true"
        style={{ color: "var(--color-ink)", opacity: 0.35, fontSize: "0.55rem" }}
        className="mx-6 inline-block"
    >
        ◆
    </span>
);

export default function MarqueeStrip() {
    // Duplicate the list so the seamless loop works with translateX(-50%)
    const items = [...KEYWORDS, ...KEYWORDS];

    return (
        <section
            aria-label="Highlights"
            style={{ backgroundColor: "var(--color-gold)", borderTop: "1px solid rgba(0,0,0,0.08)" }}
            className="overflow-hidden py-4"
        >
            <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
                {items.map((keyword, i) => (
                    <span key={i} className="inline-flex items-center">
                        <span
                            style={{
                                fontFamily: "var(--font-sans)",
                                fontWeight: 500,
                                fontSize: "0.7rem",
                                letterSpacing: "0.16em",
                                textTransform: "uppercase",
                                color: "var(--color-ink)",
                            }}
                        >
                            {keyword}
                        </span>
                        <Separator />
                    </span>
                ))}
            </div>
        </section>
    );
}
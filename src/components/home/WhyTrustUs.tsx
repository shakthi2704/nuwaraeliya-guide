type Pillar = {
    mark: string;
    title: string;
    description: string;
};

const PILLARS: Pillar[] = [
    {
        mark: "01",
        title: "Written by people who live here",
        description:
            "Not scraped from other sites, not outsourced, not written once and left to go stale. Every guide comes from someone who actually knows the hill country.",
    },
    {
        mark: "02",
        title: "No bookings, no commissions",
        description:
            "We don't sell rooms or tours, so the advice doesn't change depending on who pays us. If something isn't worth your time, we'll say so.",
    },
    {
        mark: "03",
        title: "Actually kept up to date",
        description:
            "Most travel content about this region was written once, years ago, and never revisited. Ours is checked and updated as things on the ground change.",
    },
];

export default function WhyTrustUs() {
    return (
        <section
            className="py-[var(--section-gap)]"
            style={{ background: "var(--color-base)" }}
        >
            <div className="w-full max-w-[1380px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)]">

                <div className="flex flex-col items-center text-center mb-16">
                    <span
                        className="uppercase tracking-[0.22em] font-semibold mb-4"
                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", color: "var(--color-gold)" }}
                    >
                        Why Trust Us
                    </span>

                    <div
                        className="mb-6"
                        style={{ width: "32px", height: "2px", background: "var(--color-gold-mid)" }}
                    />

                    <h2
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--text-3xl)",
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                            lineHeight: 1.05,
                            color: "var(--color-ink)",
                        }}
                    >
                        Not an agency. Not a booking site.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                    {PILLARS.map(pillar => (
                        <div key={pillar.mark} className="flex flex-col gap-4">
                            <span
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "var(--text-xl)",
                                    fontWeight: 700,
                                    color: "var(--color-gold-mid)",
                                }}
                            >
                                {pillar.mark}
                            </span>

                            <h3
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "var(--text-lg)",
                                    fontWeight: 700,
                                    letterSpacing: "-0.01em",
                                    lineHeight: 1.2,
                                    color: "var(--color-ink)",
                                }}
                            >
                                {pillar.title}
                            </h3>

                            <p
                                className="leading-[1.75]"
                                style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-muted)" }}
                            >
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
export default function PlanMyTripCTA() {
    return (
        <section
            className="py-[var(--section-gap)]"
            style={{ background: "var(--color-forest)" }}
        >
            <div className="w-full max-w-[860px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)] flex flex-col items-center text-center">

                <span
                    className="uppercase tracking-[0.22em] font-semibold mb-6"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", color: "var(--color-gold-mid)" }}
                >
                    Plan My Trip
                </span>

                <h2
                    className="mb-6"
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-3xl)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.05,
                        color: "#ffffff",
                    }}
                >
                    Tell us your trip.
                    <br />
                    We&apos;ll tell you how to spend it.
                </h2>

                <p
                    className="leading-[1.75] mb-10 max-w-[46ch]"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", color: "rgba(255,255,255,0.68)" }}
                >
                    Send us your dates, your pace, and what you care about. You&apos;ll get a
                    real itinerary back from someone who knows the hill country — not a
                    generated list, and not a sales pitch. Completely free.
                </p>

                <a
                    href="/plan-my-trip"
                    className="uppercase tracking-[0.16em] font-semibold"
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.75rem",
                        color: "var(--color-ink)",
                        background: "var(--color-gold-mid)",
                        padding: "1rem 2.5rem",
                        borderRadius: "10px",
                    }}
                >
                    Plan My Trip — Free
                </a>

                <span
                    className="uppercase tracking-[0.14em] mt-5"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.66rem", color: "rgba(255,255,255,0.4)" }}
                >
                    No account needed. Reply within 24 hours.
                </span>

            </div>
        </section>
    );
}
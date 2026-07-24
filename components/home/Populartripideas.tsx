"use client";
import Link from "next/link";

type TripIdea = {
    slug: string;
    duration: string;
    title: string;
    description: string;
    highlights: string[];
    image: string;
    alt: string;
    featured?: boolean;
};

const TRIP_IDEAS: TripIdea[] = [
    {
        slug: "week-in-the-hills",
        duration: "7 Days",
        title: "A Week in the Hills",
        description:
            "The unhurried version. Enough time to actually settle into the pace of the hill country — tea estates in the morning, the plateau at dawn, long lunches, and evenings that end early because the air turns cold. Built for people who would rather do four things well than ten things quickly.",
        highlights: ["Horton Plains & World's End", "Pedro Tea Estate", "Gregory Lake at First Light"],
        image: "https://images.unsplash.com/photo-1748753778598-2e5c4244e90e?w=1200&q=80",
        alt: "Winding road through misty tea plantation hills",
        featured: true,
    },
    {
        slug: "three-days-as-a-couple",
        duration: "3 Days",
        title: "3 Days as a Couple",
        description:
            "A short, quiet trip built around slow mornings and one good view. Less itinerary, more mood.",
        highlights: ["Gregory Lake at First Light", "Pedro Tea Estate"],
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
        alt: "Couple walking beside a still hill-country lake",
    },
    {
        slug: "the-long-weekend",
        duration: "2 Days",
        title: "The Long Weekend",
        description:
            "For when you can only get away for two days but still want it to feel like a proper trip, not a rushed detour.",
        highlights: ["Horton Plains & World's End", "Gregory Lake at First Light"],
        image: "https://images.unsplash.com/photo-1596178060810-72660ee8d3aa?w=800&q=80",
        alt: "Early morning light over the Horton Plains escarpment",
    },
];

export default function PopularTripIdeas() {
    const featured = TRIP_IDEAS.find(t => t.featured) ?? TRIP_IDEAS[0];
    const rest = TRIP_IDEAS.filter(t => t.slug !== featured.slug);

    return (
        <section
            className="py-[clamp(5rem,9vw,8.5rem)]"
            style={{ background: "var(--color-base)" }}
        >
            <div className="w-full max-w-[1380px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)]">

                {/* ── Header — left-aligned, breaks from the centered rhythm above ── */}
                <div className="flex flex-col items-start text-left mb-16 max-w-[560px]">

                    <span
                        className="uppercase tracking-[0.22em] font-semibold text-[var(--color-gold)] mb-4"
                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem" }}
                    >
                        Trip Ideas
                    </span>

                    <div
                        className="mb-6"
                        style={{ width: "32px", height: "2px", background: "var(--color-gold-mid)" }}
                    />

                    <h2
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
                        Trips that already make sense
                    </h2>

                    <p
                        className="leading-[1.75]"
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "var(--text-sm)",
                            color: "var(--color-muted)",
                        }}
                    >
                        Whole itineraries, not a list of things to sort through yourself.
                        Pick the one closest to your trip and adjust from there.
                    </p>

                </div>

                {/* ── Mosaic: two unequal overlay cards, then one full-width card below ── */}
                <div className="flex flex-col gap-6">

                    <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-6">
                        {rest.map((idea, i) => (
                            <TripCard key={idea.slug} idea={idea} height={i === 0 ? "clamp(260px,28vw,340px)" : "clamp(260px,28vw,340px)"} />
                        ))}
                    </div>

                    <TripCard idea={featured} height="clamp(320px,32vw,420px)" showHighlights />

                </div>

            </div>
        </section>
    );
}

function TripCard({
    idea,
    height,
    showHighlights,
}: {
    idea: TripIdea;
    height: string;
    showHighlights?: boolean;
}) {
    return (
        <Link
            href={`/trip-ideas/${idea.slug}`}
            className="group relative flex items-end overflow-hidden no-underline"
            style={{ height, borderRadius: "10px" }}
        >
            <img
                src={idea.image}
                alt={idea.alt}
                loading="lazy"
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
                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", color: "var(--color-gold-mid)" }}
                >
                    {idea.duration}
                </span>

                <h3
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
                </h3>

                <p
                    className="leading-[1.6]"
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-sm)",
                        color: "rgba(255,255,255,0.78)",
                        maxWidth: "48ch",
                    }}
                >
                    {idea.description}
                </p>

                {showHighlights && (
                    <span
                        className="tracking-[0.04em]"
                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "rgba(255,255,255,0.55)" }}
                    >
                        {idea.highlights.join(" · ")}
                    </span>
                )}

                <span
                    className="uppercase tracking-[0.16em] font-semibold mt-2"
                    style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.68rem",
                        color: "#ffffff",
                        borderBottom: "1px solid rgba(255,255,255,0.5)",
                        paddingBottom: "0.2rem",
                        width: "fit-content",
                    }}
                >
                    View Itinerary &#8594;
                </span>
            </div>
        </Link>
    );
}
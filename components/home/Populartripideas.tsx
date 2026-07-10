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
        image: "https://images.unsplash.com/photo-1748753778598-2e5c4244e90e?w=1200&q=80",
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

                {/* ── Asymmetric split: featured card + stacked compact cards ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 items-stretch">

                    {/* Featured card */}
                    <Link
                        href={`/trip-ideas/${featured.slug}`}
                        className="group flex flex-col overflow-hidden no-underline"
                        style={{
                            background: "var(--color-surface)",
                            border: "1px solid rgba(14,28,18,0.09)",
                            borderRadius: "10px",
                            boxShadow: "0 2px 10px rgba(14,28,18,0.06)",
                            transition: "transform 0.28s ease, box-shadow 0.28s ease",
                        }}
                        onMouseEnter={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.transform = "translateY(-4px)";
                            el.style.boxShadow = "0 24px 60px rgba(14,28,18,0.12)";
                        }}
                        onMouseLeave={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.transform = "translateY(0)";
                            el.style.boxShadow = "0 2px 10px rgba(14,28,18,0.06)";
                        }}
                    >
                        <div
                            className="relative overflow-hidden flex-shrink-0"
                            style={{ aspectRatio: "16/9", borderRadius: "10px 10px 0 0" }}
                        >
                            <img
                                src={featured.image}
                                alt={featured.alt}
                                loading="eager"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                            />
                            <div
                                className="absolute inset-0"
                                style={{ background: "linear-gradient(to top, rgba(10,31,18,0.72) 0%, transparent 55%)" }}
                            />
                            <span
                                className="absolute bottom-3 left-4 uppercase tracking-[0.18em]"
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "0.58rem",
                                    fontWeight: 700,
                                    color: "#0a1f12",
                                    background: "var(--color-gold-mid)",
                                    padding: "0.28rem 0.65rem",
                                    borderRadius: "4px",
                                }}
                            >
                                {featured.duration}
                            </span>
                        </div>

                        <div className="flex flex-col flex-1 px-6 pt-6 pb-6 gap-4">
                            <h3
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "var(--text-xl)",
                                    fontWeight: 700,
                                    letterSpacing: "-0.02em",
                                    lineHeight: 1.15,
                                    color: "var(--color-ink)",
                                }}
                            >
                                {featured.title}
                            </h3>

                            <p
                                className="leading-[1.75]"
                                style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-muted)" }}
                            >
                                {featured.description}
                            </p>

                            <ul className="flex flex-wrap gap-2 list-none">
                                {featured.highlights.map(h => (
                                    <li
                                        key={h}
                                        className="tracking-[0.04em]"
                                        style={{
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "0.66rem",
                                            fontWeight: 500,
                                            color: "var(--color-sage)",
                                            background: "var(--color-gold-pale)",
                                            padding: "0.35rem 0.7rem",
                                            borderRadius: "4px",
                                        }}
                                    >
                                        {h}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center gap-2 uppercase tracking-[0.18em] mt-auto pt-2"
                                style={{ fontFamily: "var(--font-sans)", fontSize: "0.66rem", fontWeight: 700, color: "var(--color-gold)" }}
                            >
                                View Itinerary
                                <span style={{ fontSize: "0.9rem", lineHeight: 1 }}>&#8594;</span>
                            </div>
                        </div>
                    </Link>

                    {/* Compact stacked cards */}
                    <div className="flex flex-col gap-6">
                        {rest.map(idea => (
                            <Link
                                key={idea.slug}
                                href={`/trip-ideas/${idea.slug}`}
                                className="group flex flex-1 overflow-hidden no-underline"
                                style={{
                                    background: "var(--color-surface)",
                                    border: "1px solid rgba(14,28,18,0.09)",
                                    borderRadius: "10px",
                                    boxShadow: "0 2px 10px rgba(14,28,18,0.06)",
                                    transition: "transform 0.28s ease, box-shadow 0.28s ease",
                                }}
                                onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.transform = "translateY(-4px)";
                                    el.style.boxShadow = "0 24px 60px rgba(14,28,18,0.12)";
                                }}
                                onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.transform = "translateY(0)";
                                    el.style.boxShadow = "0 2px 10px rgba(14,28,18,0.06)";
                                }}
                            >
                                <div
                                    className="relative overflow-hidden flex-shrink-0"
                                    style={{ width: "38%", borderRadius: "10px 0 0 10px" }}
                                >
                                    <img
                                        src={idea.image}
                                        alt={idea.alt}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                                    />
                                </div>

                                <div className="flex flex-col flex-1 px-5 py-4 gap-2 min-w-0">
                                    <span
                                        className="uppercase tracking-[0.16em]"
                                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 700, color: "var(--color-gold)" }}
                                    >
                                        {idea.duration}
                                    </span>

                                    <h3
                                        style={{
                                            fontFamily: "var(--font-display)",
                                            fontSize: "var(--text-lg)",
                                            fontWeight: 700,
                                            letterSpacing: "-0.02em",
                                            lineHeight: 1.2,
                                            color: "var(--color-ink)",
                                        }}
                                    >
                                        {idea.title}
                                    </h3>

                                    <p
                                        className="leading-[1.6] line-clamp-2"
                                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--color-muted)" }}
                                    >
                                        {idea.description}
                                    </p>

                                    <span
                                        className="self-start tracking-[0.04em]"
                                        style={{
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "0.62rem",
                                            fontWeight: 500,
                                            color: "var(--color-sage)",
                                            background: "var(--color-gold-pale)",
                                            padding: "0.3rem 0.6rem",
                                            borderRadius: "4px",
                                        }}
                                    >
                                        {idea.highlights[0]}
                                    </span>

                                    <div className="flex items-center gap-1.5 uppercase tracking-[0.16em] mt-auto pt-1"
                                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 700, color: "var(--color-sage)" }}
                                    >
                                        View Itinerary
                                        <span style={{ fontSize: "0.8rem", lineHeight: 1 }}>&#8594;</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
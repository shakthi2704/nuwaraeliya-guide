"use client";

import Link from "next/link";

type Guide = {
    slug: string;
    category: string;
    title: string;
    excerpt: string;
    readTime: string;
    image: string;
    alt: string;
};

const GUIDES: Guide[] = [
    {
        slug: "getting-to-nuwara-eliya",
        category: "Getting There",
        title: "The Real Way to Get to Nuwara Eliya",
        excerpt:
            "Train, private car, or the public bus everyone warns you about — what each one actually costs, how long it really takes, and which one we'd pick.",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80",
        alt: "Blue train winding through Sri Lankan hill country",
    },
    {
        slug: "where-to-stay",
        category: "Practical Info",
        title: "Where to Stay, by Type of Trip",
        excerpt:
            "Colonial bungalows, working tea estates, and modern guesthouses — matched to who you're traveling with, not just star ratings.",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80",
        alt: "Colonial-style hill country bungalow surrounded by greenery",
    },
    {
        slug: "what-to-pack",
        category: "Before You Go",
        title: "What to Actually Pack for the Cold",
        excerpt:
            "It's Sri Lanka, but it's 16°C and misty most mornings. What you genuinely need, and what every packing list gets wrong about it.",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80",
        alt: "Warm clothing laid out for a cool-climate trip",
    },
];

export default function LatestGuides() {
    return (
        <section
            className="py-[var(--section-gap)]"
            style={{ background: "var(--color-base)" }}
        >
            <div className="w-full max-w-[1100px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)]">

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
                    <div className="flex flex-col items-start max-w-[520px]">
                        <span
                            className="uppercase tracking-[0.22em] font-semibold mb-4"
                            style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", color: "var(--color-gold)" }}
                        >
                            Travel Guides
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
                            The practical side of the trip
                        </h2>
                    </div>

                    <Link
                        href="/guides"
                        className="uppercase tracking-[0.16em] font-semibold flex items-center gap-2 whitespace-nowrap"
                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", color: "var(--color-gold)" }}
                    >
                        All Guides
                        <span style={{ fontSize: "0.9rem", lineHeight: 1 }}>&#8594;</span>
                    </Link>
                </div>

                <div className="flex flex-col gap-8">
                    {GUIDES.map((guide, i) => (
                        <Link
                            key={guide.slug}
                            href={`/guides/${guide.slug}`}
                            className="group relative flex flex-col sm:flex-row overflow-visible no-underline"
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
                            <span
                                className="hidden md:block absolute select-none"
                                style={{
                                    top: "-1.1rem",
                                    left: "-1rem",
                                    fontFamily: "var(--font-display)",
                                    fontSize: "5rem",
                                    fontWeight: 700,
                                    lineHeight: 1,
                                    color: "var(--color-gold-mid)",
                                    opacity: 0.5,
                                    zIndex: 0,
                                }}
                            >
                                {String(i + 1).padStart(2, "0")}
                            </span>

                            <div
                                className="relative overflow-hidden flex-shrink-0"
                                style={{
                                    width: "100%",
                                    maxWidth: "380px",
                                    aspectRatio: "16/11",
                                    borderRadius: "10px 10px 0 0",
                                }}
                            >
                                <img
                                    src={guide.image}
                                    alt={guide.alt}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                                />
                            </div>

                            <div className="relative z-[1] flex flex-col justify-center flex-1 px-7 py-7 md:px-9 gap-3">
                                <span
                                    className="uppercase tracking-[0.14em]"
                                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.64rem", fontWeight: 700, color: "var(--color-gold)" }}
                                >
                                    {guide.category}
                                </span>

                                <h3
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: "var(--text-2xl)",
                                        fontWeight: 700,
                                        letterSpacing: "-0.02em",
                                        lineHeight: 1.15,
                                        color: "var(--color-ink)",
                                    }}
                                >
                                    {guide.title}
                                </h3>

                                <p
                                    className="leading-[1.7]"
                                    style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-muted)", maxWidth: "52ch" }}
                                >
                                    {guide.excerpt}
                                </p>

                                <div className="flex items-center gap-3 mt-2">
                                    <span
                                        className="uppercase tracking-[0.1em]"
                                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", color: "var(--color-muted)" }}
                                    >
                                        {guide.readTime}
                                    </span>
                                    <span style={{ color: "var(--color-border)" }}>&#8226;</span>
                                    <span
                                        className="uppercase tracking-[0.16em] font-semibold flex items-center gap-1.5"
                                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", color: "var(--color-gold)" }}
                                    >
                                        Read Guide
                                        <span style={{ fontSize: "0.85rem", lineHeight: 1 }}>&#8594;</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
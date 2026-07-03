"use client";
import Link from "next/link";

type Experience = {
    slug: string;
    category: string;
    title: string;
    description: string;
    duration: string;
    image: string;
    alt: string;
};

const EXPERIENCES: Experience[] = [
    {
        slug: "horton-plains-worlds-end",
        category: "Nature",
        title: "Horton Plains & World's End",
        description:
            "Walk the plateau at dawn and reach the escarpment edge where the land drops 880 metres into the valley below. Best in the dry season when the mist clears by mid-morning.",
        duration: "Half day",
        image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80",
        alt: "Open plateau of Horton Plains at first light",
    },
    {
        slug: "pedro-tea-estate",
        category: "Tea & Plantation",
        title: "Pedro Tea Estate",
        description:
            "Follow the leaf from bush to cup inside one of the oldest working estates in the hill country. The factory tour is unhurried and the people who run it have been here for generations.",
        duration: "2 – 3 hours",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        alt: "Terraced tea rows on a hill-country estate",
    },
    {
        slug: "gregory-lake-morning",
        category: "Relaxation",
        title: "Gregory Lake at First Light",
        description:
            "A quiet walk along the colonial-era bund before the town wakes. The lake sits perfectly still in the early morning, the surrounding hills reflected in it without distortion.",
        duration: "1 – 2 hours",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
        alt: "Still lake surrounded by green hills at dawn",
    },
];

export default function FeaturedExperiencesLight() {
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
                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem" }}
                    >
                        Experiences
                    </span>

                    {/* Gold rule */}
                    <div
                        className="mb-6"
                        style={{
                            width: "32px",
                            height: "2px",
                            background: "var(--color-gold-mid)",
                        }}
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
                            maxWidth: "480px",
                        }}
                    >
                        Things worth doing here
                    </h2>

                    <p
                        className="leading-[1.75]"
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "var(--text-sm)",
                            color: "var(--color-muted)",
                            maxWidth: "340px",
                        }}
                    >
                        Not a checklist. A considered set of ways to spend
                        your time in the hill country.
                    </p>

                </div>

                {/* ── Cards ── */}
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 list-none">
                    {EXPERIENCES.map((exp, i) => (
                        <li key={exp.slug} className="flex">
                            <Link
                                href={`/experiences/${exp.slug}`}
                                className="group flex flex-col w-full overflow-hidden no-underline"
                                style={{
                                    background: "var(--color-surface)",
                                    border: "1px solid var(--color-border)",
                                    borderRadius: "10px",
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
                                    el.style.boxShadow = "none";
                                }}
                            >
                                {/* ── Image ── */}
                                <div
                                    className="relative overflow-hidden flex-shrink-0"
                                    style={{
                                        aspectRatio: "16/10",
                                        borderRadius: "10px 10px 0 0",
                                    }}
                                >
                                    <img
                                        src={exp.image}
                                        alt={exp.alt}
                                        loading={i === 0 ? "eager" : "lazy"}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                                    />

                                    {/* Gradient — makes badge readable */}
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background: "linear-gradient(to top, rgba(10,31,18,0.72) 0%, transparent 55%)",
                                        }}
                                    />

                                    {/* Category badge */}
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
                                        {exp.category}
                                    </span>
                                </div>

                                {/* ── Body ── */}
                                <div className="flex flex-col flex-1 px-5 pt-5 pb-4 gap-3">

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
                                        {exp.title}
                                    </h3>

                                    <p
                                        className="flex-1 leading-[1.75]"
                                        style={{
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "var(--text-sm)",
                                            color: "var(--color-muted)",
                                        }}
                                    >
                                        {exp.description}
                                    </p>

                                    {/* Duration */}
                                    <p
                                        className="tracking-[0.06em]"
                                        style={{
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "0.68rem",
                                            fontWeight: 400,
                                            color: "var(--color-border)",
                                        }}
                                    >
                                        {exp.duration}
                                    </p>

                                </div>

                                {/* ── Gold CTA button — margins so it floats inside card ── */}
                                <div className="px-4 pb-4">
                                    <div
                                        className="flex items-center justify-center gap-2 uppercase tracking-[0.18em] transition-colors duration-200 group-hover:bg-[var(--color-gold)]"
                                        style={{
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "0.62rem",
                                            fontWeight: 700,
                                            color: "var(--color-forest)",
                                            background: "var(--color-gold-mid)",
                                            padding: "0.85rem 1rem",
                                            borderRadius: "6px",
                                        }}
                                    >
                                        View Experience
                                        <span style={{ fontSize: "0.85rem", lineHeight: 1 }}>&#8594;</span>
                                    </div>
                                </div>

                            </Link>
                        </li>
                    ))}
                </ul>

                {/* ── Browse all ── */}
                <div
                    className="flex justify-center mt-14 pt-10"
                    style={{ borderTop: "1px solid var(--color-border)" }}
                >
                    <Link
                        href="/experiences"
                        className="flex items-center gap-3 uppercase tracking-[0.2em] no-underline transition-colors duration-200 hover:text-[var(--color-gold)]"
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.66rem",
                            fontWeight: 600,
                            color: "var(--color-muted)",
                        }}
                    >
                        Browse all experiences
                        <span style={{ color: "var(--color-gold-mid)", fontSize: "1rem", lineHeight: 1 }}>
                            &#8594;
                        </span>
                    </Link>
                </div>

            </div>
        </section>
    );
}
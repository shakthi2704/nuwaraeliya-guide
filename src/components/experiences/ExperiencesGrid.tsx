"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { EXPERIENCES } from "@/lib/data/experiences";

export default function ExperiencesGrid() {
    const t = useTranslations("experiencesPage");

    return (
        <section
            className="py-[clamp(5rem,9vw,8.5rem)]"
            style={{ background: "var(--color-base)" }}
        >
            <div className="w-full max-w-[1380px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)]">

                {/* ── Header ── */}
                <div className="flex flex-col items-center text-center mb-16">

                    <span
                        className="uppercase tracking-[0.22em] font-semibold text-[var(--color-gold-mid)] mb-4"
                        style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)" }}
                    >
                        {t("eyebrow")}
                    </span>

                    <div
                        className="mb-6"
                        style={{
                            width: "32px",
                            height: "2px",
                            background: "var(--color-gold-mid)",
                        }}
                    />

                    <h1
                        className="mb-4"
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "var(--text-3xl)",
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                            lineHeight: 1.05,
                            maxWidth: "560px",
                            color: "var(--color-ink)",
                        }}
                    >
                        {t("heading")}
                    </h1>

                    <p
                        className="leading-[1.75]"
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "var(--text-sm)",
                            color: "var(--color-muted)",
                            maxWidth: "440px",
                        }}
                    >
                        {t("subheading")}
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
                                    borderRadius: "10px 10px 0 0",
                                    transition: "transform 0.28s ease, box-shadow 0.28s ease",
                                }}
                                onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.transform = "translateY(-4px)";
                                    el.style.boxShadow = "0 24px 60px rgba(14,28,18,0.14)";
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
                                    style={{ aspectRatio: "16/10" }}
                                >
                                    <img
                                        src={exp.image}
                                        alt={exp.alt}
                                        loading={i < 3 ? "eager" : "lazy"}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                                    />

                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background: "linear-gradient(to top, rgba(14,28,18,0.55) 0%, transparent 55%)",
                                        }}
                                    />

                                    <span
                                        className="absolute bottom-3 left-4 uppercase tracking-[0.18em]"
                                        style={{
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "var(--text-xs)",
                                            fontWeight: 700,
                                            color: "#0a1f12",
                                            background: "var(--color-gold-mid)",
                                            padding: "0.28rem 0.65rem",
                                            borderRadius: "10px 10px 0 0",
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

                                    <p
                                        className="tracking-[0.06em]"
                                        style={{
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "var(--text-xs)",
                                            fontWeight: 400,
                                            color: "var(--color-muted)",
                                            opacity: 0.7,
                                        }}
                                    >
                                        {exp.duration}
                                    </p>

                                </div>


                                {/* ── Text link CTA ── */}
                                <div className="px-5 pb-5">
                                    <span
                                        className="inline-flex items-center gap-2 uppercase tracking-[0.16em] font-semibold pb-[0.2rem] text-[var(--color-ink)] border-b border-[var(--color-gold-mid)] transition-colors duration-200 group-hover:text-[var(--color-gold)]"
                                        style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)" }}
                                    >
                                        {t("viewExperience")} &#8594;
                                    </span>
                                </div>

                            </Link>
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    );
}
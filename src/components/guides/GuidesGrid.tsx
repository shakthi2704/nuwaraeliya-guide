"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { GUIDES } from "@/lib/data/guides";

export default function GuidesGrid() {
    const t = useTranslations("guidesPage");

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
                        style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)" }}
                    >
                        {t("eyebrow")}
                    </span>

                    <div
                        className="mb-6"
                        style={{ width: "32px", height: "2px", background: "var(--color-gold-mid)" }}
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
                            maxWidth: "480px",
                        }}
                    >
                        {t("subheading")}
                    </p>

                </div>

                {/* ── Guide list ── */}
                <div className="flex flex-col gap-8 w-full max-w-[1000px] mx-auto">
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
                                    loading={i < 2 ? "eager" : "lazy"}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                                />
                            </div>

                            <div className="relative z-[1] flex flex-col justify-center flex-1 px-7 py-7 md:px-9 gap-3">
                                <span
                                    className="uppercase tracking-[0.14em]"
                                    style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--color-gold)" }}
                                >
                                    {guide.category}
                                </span>

                                <h2
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
                                </h2>

                                <p
                                    className="leading-[1.7]"
                                    style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-muted)", maxWidth: "52ch" }}
                                >
                                    {guide.excerpt}
                                </p>

                                <div className="flex items-center gap-3 mt-2">
                                    <span
                                        className="uppercase tracking-[0.1em]"
                                        style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "var(--color-muted)" }}
                                    >
                                        {guide.readTime}
                                    </span>
                                    <span style={{ color: "var(--color-border)" }}>&#8226;</span>
                                    <span
                                        className="uppercase tracking-[0.16em] font-semibold flex items-center gap-1.5"
                                        style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "var(--color-gold)" }}
                                    >
                                        {t("readGuide")}
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
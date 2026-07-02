"use client";

import { useState, useEffect } from "react";
import { ButtonLink } from "@/components/ui/Button";

const STATS = [
    { value: "1,868m", label: "Above Sea Level" },
    { value: "16°C", label: "Year-Round Climate" },
    { value: "20+", label: "Experiences" },
    { value: "Free", label: "Local Advice" },
];

// Entrance animation — Tailwind cannot express JS-driven opacity/transform,
// so these two properties stay as inline styles on each staggered element.
function fadeIn(loaded: boolean, delay: string, dy = "20px") {
    return {
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : `translateY(${dy})`,
        transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}`,
    };
}

export default function Hero() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 80);
        return () => clearTimeout(t);
    }, []);

    return (
        <section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden bg-[#060f09]">

            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.82]"
                style={{ backgroundImage: "url('/images/03.jpg')", backgroundPosition: "center 55%" }}
            />

            {/* Gradient overlay — two layers, cannot be expressed as single Tailwind class */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
                        linear-gradient(to top,    rgba(6, 15, 9, 0) 0%, rgba(6,15,9,0.1) 55%, transparent 100%),
                        linear-gradient(to bottom, transparent 40%,  rgba(6,15,9,0.55) 70%, rgba(6,15,9,0.97) 100%)
                    `,
                }}
            />

            {/* Centered content */}
            <div className="absolute inset-0 z-[2] flex items-center justify-center px-6">
                <div className="w-full text-center" style={{ maxWidth: "min(900px, 85vw)" }}>

                    {/* Location tag */}
                    <div
                        className="flex items-center justify-center gap-[0.6rem] mb-5"
                        style={fadeIn(loaded, "0.25s", "12px")}
                    >
                        <span className="w-[5px] h-[5px] rounded-full bg-[var(--color-gold)] flex-shrink-0" />
                        <span
                            className="uppercase tracking-[0.22em] text-white/98"
                            style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 500 }}
                        >
                            Sri Lanka · Hill Country · Est. 1846
                        </span>
                    </div>

                    {/* "Welcome to" script */}
                    <p
                        className="italic font-light text-[var(--color-gold-mid)] -mb-[0.1em]"
                        style={{ ...fadeIn(loaded, "0.35s", "16px"), fontSize: "clamp(0.95rem, 1.8vw, 1.6rem)" }}
                    >
                        Welcome to
                    </p>

                    {/* Main heading */}
                    <h1
                        className="text-white font-black leading-[0.9] tracking-[-0.045em] mb-0"
                        style={{ ...fadeIn(loaded, "0.45s", "28px"), fontSize: "clamp(3.2rem, 8vw, 11rem)" }}
                    >
                        Nuwara<br />
                        <span style={{ WebkitTextStroke: "3px var(--color-gold)", color: "transparent" }}>
                            Eliya
                        </span>
                    </h1>

                    {/* Tagline + buttons */}
                    <div
                        className="flex flex-col items-center gap-6 mt-10"
                        style={fadeIn(loaded, "0.6s")}
                    >
                        <div className="max-w-[420px]">
                            <div className="w-9 h-[1.5px] bg-[var(--color-gold)] mx-auto mb-3" />
                            <p
                                className="italic font-medium text-white/60 leading-[1.75]"
                                style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}
                            >
                                Misty tea hills, colonial charm, and cool mountain air.
                                Honest guidance from locals — completely free.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center">
                            <ButtonLink href="/planner" variant="gold" size="md">
                                Plan My Trip — Free
                            </ButtonLink>
                            <ButtonLink href="/places" variant="glass" size="md">
                                Explore Places
                            </ButtonLink>
                        </div>
                    </div>

                </div>
            </div>

            {/* Stats bar */}
            <div
                className="absolute bottom-0 left-0 right-0 z-[3] backdrop-blur-xl border-t border-[rgba(201,165,90,0.18)] border-b-2 border-b-[rgba(201,165,90,0.25)]"
                style={{
                    ...fadeIn(loaded, "0.85s", "16px"),
                    background: "rgba(6,15,9,0.82)",
                }}
            >
                <div className="grid justify-center mx-auto max-w-[900px]"
                    style={{ gridTemplateColumns: "repeat(4, minmax(0, 220px))" }}
                >
                    {STATS.map(({ value, label }, i) => (
                        <div
                            key={label}
                            className={[
                                "py-5 text-center",
                                i < 3 ? "border-r border-white/6" : "",
                            ].join(" ")}
                        >
                            <p
                                className="font-bold text-[var(--color-gold)]"
                                style={{ fontSize: "clamp(1rem, 1.5vw, 1.4rem)" }}
                            >
                                {value}
                            </p>
                            <p
                                className="uppercase tracking-[0.1em] text-white/38"
                                style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem" }}
                            >
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
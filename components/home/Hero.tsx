"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const STATS = [
    { value: "1,868m", label: "Above Sea Level" },
    { value: "16°C", label: "Year-Round Climate" },
    { value: "20+", label: "Experiences" },
    { value: "Free", label: "Local Advice" },
];

export default function Hero() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 80);
        return () => clearTimeout(t);
    }, []);

    return (
        <section className="h-[100vh]" style={{
            position: "relative",
            width: "100%",

            minHeight: "600px",
            overflow: "hidden",
            background: "#060f09",
        }}>

            {/* Background Image */}
            <div
                className="animate-zoom-in"
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url('/images/banner.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center 55%",
                    opacity: 0.82,
                }}
            />

            {/* Gradient Overlay */}
            <div style={{
                position: "absolute",
                inset: 0,
                background: `
                    linear-gradient(to top, rgba(6,15,9,0.65) 0%, rgba(6,15,9,0.1) 55%, transparent 100%),
                    linear-gradient(to bottom, transparent 40%, rgba(6,15,9,0.55) 70%, rgba(6,15,9,0.97) 100%)
                `,
            }} />

            {/* CENTERED CONTENT */}
            <div style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 1.5rem",

            }}>
                <div style={{
                    width: "100%",
                    maxWidth: "min(900px, 85vw)",
                    textAlign: "center",

                }}>

                    {/* Location tag */}
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.6rem",
                        marginBottom: "1.25rem",
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? "translateY(0)" : "translateY(12px)",
                        transition: "opacity 0.5s ease 0.25s, transform 0.5s ease 0.25s",
                    }}>
                        <span style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "var(--color-gold)",
                        }} />
                        <span style={{
                            fontSize: "0.6rem",
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.98)",
                            fontWeight: 500,
                        }}>
                            Sri Lanka · Hill Country · Est. 1846
                        </span>
                    </div>

                    {/* Script line */}
                    <p style={{
                        fontStyle: "italic",
                        fontWeight: 600,
                        fontSize: "clamp(0.95rem, 1.8vw, 1.6rem)",
                        color: "var(--color-gold-light)",
                        marginBottom: "-0.1em",
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? "translateY(0)" : "translateY(16px)",
                        transition: "opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s",
                    }}>
                        Welcome to
                    </p>

                    {/* Main Heading */}
                    <h1 style={{
                        fontWeight: 900,
                        fontSize: "clamp(3.2rem, 8vw, 11rem)",
                        lineHeight: 0.9,
                        letterSpacing: "-0.045em",
                        color: "white",
                        marginBottom: 0,
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? "translateY(0)" : "translateY(28px)",
                        transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s",
                    }}>
                        Nuwara
                        <span style={{
                            WebkitTextStroke: "4px var(--color-gold)",
                            color: "transparent",
                        }}>
                            Eliya
                        </span>
                    </h1>

                    {/* Tagline + CTA */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1.5rem",
                        marginTop: "2.5rem",
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s",
                    }}>
                        {/* Tagline */}
                        <div style={{ maxWidth: "420px" }}>
                            <div style={{
                                width: "36px",
                                height: "1.5px",
                                background: "var(--color-gold)",
                                margin: "0 auto 0.75rem",
                            }} />
                            <p style={{
                                fontStyle: "italic",
                                fontWeight: 500,
                                fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
                                color: "rgba(255,255,255,0.6)",
                                lineHeight: 1.75,
                            }}>
                                Misty tea hills, colonial charm, and cool mountain air.
                                Honest guidance from locals — completely free.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div style={{
                            display: "flex",
                            gap: "0.75rem",
                            flexWrap: "wrap",
                            justifyContent: "center"
                        }}>
                            <a href="/planner" style={{
                                fontSize: "0.72rem",
                                fontWeight: 600,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "#060f09",
                                background: "var(--color-gold)",
                                padding: "0.85rem 2rem",
                            }}>
                                Plan My Trip — Free
                            </a>

                            <a href="/places" style={{
                                fontSize: "0.72rem",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "white",
                                background: "rgba(255,255,255,0.07)",
                                border: "1px solid rgba(255,255,255,0.22)",
                                backdropFilter: "blur(8px)",
                                padding: "0.85rem 2rem",
                            }}>
                                Explore Places
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* STATS BAR */}
            <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 3,
                background: "rgba(6,15,9,0.82)",
                backdropFilter: "blur(20px)",
                borderTop: "1px solid rgba(201,165,90,0.18)",
                borderBottom: "2px solid rgba(201,165,90,0.25)",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease 0.85s, transform 0.6s ease 0.85s",
            }}>
                <div style={{
                    maxWidth: "900px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(4, minmax(0, 220px))",
                    justifyContent: "center",


                }}>
                    {STATS.map(({ value, label }, i) => (
                        <div key={label} style={{
                            padding: "1.2rem 0",
                            borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                            textAlign: "center",
                        }}>
                            <p style={{
                                fontWeight: 700,
                                fontSize: "clamp(1rem, 1.5vw, 1.4rem)",
                                color: "var(--color-gold)",
                            }}>
                                {value}
                            </p>
                            <p style={{
                                fontSize: "0.6rem",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.38)",
                            }}>
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section >
    );
}


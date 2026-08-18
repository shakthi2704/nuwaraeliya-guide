"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function PlanMyTripCTA() {
    const t = useTranslations("planMyTripCTA");

    return (
        <section
            className="py-[var(--section-gap)]"
            style={{ background: "var(--color-forest)" }}
        >
            <div className="w-full max-w-[860px] mx-auto px-[clamp(1.25rem,4vw,3.5rem)] flex flex-col items-center text-center">

                <span
                    className="uppercase tracking-[0.22em] font-semibold mb-6"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "var(--color-gold-mid)" }}
                >
                    {t("eyebrow")}
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
                    {t("heading").split("\n")[0]}
                    <br />
                    {t("heading").split("\n")[1]}
                </h2>

                <p
                    className="leading-[1.75] mb-10 max-w-[46ch]"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", color: "rgba(255,255,255,0.68)" }}
                >
                    {t("description")}
                </p>

                <Link
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
                    {t("cta")}
                </Link>

                <span
                    className="uppercase tracking-[0.14em] mt-5"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.4)" }}
                >
                    {t("note")}
                </span>

            </div>
        </section>
    );
}
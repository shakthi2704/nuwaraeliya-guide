"use client";

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LOCALE_LABELS: Record<string, string> = {
    en: "EN",
    de: "DE",
};

export default function LanguageSwitcher() {
    const activeLocale = useLocale();
    const pathname = usePathname();

    return (
        <div className="flex items-center gap-2" aria-label="Language switcher">
            <Globe size={14} strokeWidth={1.75} className="text-white/45 flex-shrink-0" />
            {routing.locales.map((locale, index) => {
                const isActive = locale === activeLocale;
                return (
                    <span key={locale} className="flex items-center gap-2">
                        {index > 0 && <span className="text-white/25 select-none">/</span>}
                        <Link
                            href={pathname}
                            locale={locale}
                            aria-current={isActive ? "true" : undefined}
                            className={[
                                "no-underline tracking-[0.15em] uppercase transition-colors duration-200",
                                isActive
                                    ? "text-[var(--color-gold-mid)]"
                                    : "text-white/45 hover:text-white/80",
                            ].join(" ")}
                            style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 500 }}
                        >
                            {LOCALE_LABELS[locale] ?? locale.toUpperCase()}
                        </Link>
                    </span>
                );
            })}
        </div>
    );
}
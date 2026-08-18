import { getMessages } from "next-intl/server";

export default async function MarqueeStrip() {

    const messages = await getMessages();
    const marqueeItems = messages.marquee.items as string[];
    const items = [...marqueeItems, ...marqueeItems];
    return (
        <section
            aria-label="Highlights"
            className="overflow-hidden py-[14px]"
            style={{
                background: "var(--color-gold-mid)",
                borderTop: "1px solid rgba(0,0,0,0.08)",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}
        >
            <div
                className="flex whitespace-nowrap"
                style={{
                    width: "max-content",
                    animation: "marquee 32s linear infinite",
                }}
            >
                {items.map((item, index) => (
                    <span key={index} className="inline-flex items-center">
                        <span
                            className="uppercase tracking-[0.18em]"
                            style={{
                                fontFamily: "var(--font-sans)",
                                fontWeight: 600,
                                fontSize: "var(--text-xs)",
                                color: "var(--color-ink)",
                                opacity: 0.82,
                            }}
                        >
                            {item}
                        </span>
                        <span
                            className="inline-block mx-6 w-[4px] h-[4px] rounded-full flex-shrink-0 opacity-35"
                            style={{ background: "var(--color-ink)" }}
                            aria-hidden="true"
                        />
                    </span>
                ))}
            </div>
        </section>
    );
}
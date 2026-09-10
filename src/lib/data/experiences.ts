// Data shape mirrors a future Supabase `experiences` table.
// Single source of truth for the homepage teaser strip, the /experiences
// index, and /experiences/[slug] detail pages. Replace with a fetch/query
// when the DB is connected — consuming components stay identical.

export type Experience = {
    slug: string;
    category: string;
    title: string;
    description: string; // short teaser — homepage card, index card
    body: string;        // full write-up — detail page
    duration: string;
    image: string;
    alt: string;
};

export const EXPERIENCES: Experience[] = [
    {
        slug: "horton-plains-worlds-end",
        category: "Nature",
        title: "Horton Plains & World's End",
        description:
            "Walk the plateau at dawn and reach the escarpment edge where the land drops 880 metres into the valley below. Best in the dry season when the mist clears by mid-morning.",
        body:
            "Horton Plains is a highland plateau of grassland and cloud forest, roughly forty-five minutes from town. The reserve opens at dawn, and that timing is not a suggestion — the whole point of the walk is reaching World's End, the escarpment where the plateau falls away 880 metres into the valley, before the midday mist rolls in and closes the view.\n\nThe circuit is about nine kilometres and takes three to four hours at an easy pace, passing Baker's Falls partway round. The terrain is flat to gently rolling, no technical climbing, but the altitude and early cold catch people off guard — bring a proper layer for the first hour.\n\nBest visited in the dry season, roughly January to March, when the morning mist clears reliably. Outside that window you can still go, but the view at World's End is a genuine gamble.",
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
        body:
            "Pedro is one of the oldest working tea estates around Nuwara Eliya, still processing leaf on machinery that has barely changed in a century. The factory tour walks the full process — withering, rolling, oxidation, firing — narrated by people who grew up around the same floors.\n\nUnlike the larger, more commercial estates closer to town, Pedro's tour moves at its own pace rather than a fixed script. Expect to spend two to three hours, finishing with a tasting of the estate's own grades.\n\nWorth combining with a walk through the surrounding tea rows before or after — the terraced hillsides are at their most photogenic in the hour after the morning mist lifts.",
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
        body:
            "Gregory Lake sits at the centre of town, and by mid-morning it is firmly a tourist stop — pedal boats, vendors, crowds. At first light it is a different place entirely: still water, the surrounding hills reflected without distortion, and almost nobody else on the bund.\n\nThe walk along the colonial-era bund takes about an hour at an unhurried pace, roughly circling the lake. No booking, no cost, no guide needed — just a reason to be up before the town properly wakes.\n\nBest paired with breakfast afterward at one of the cafes near the lake, once they open around eight.",
        duration: "1 – 2 hours",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
        alt: "Still lake surrounded by green hills at dawn",
    },
];
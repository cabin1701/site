// Books ページの本のデータ。**ここ1か所**から、ページの本のカード（books.astro / es/books.astro / ja/books.astro）と、
// schema.org の JSON-LD（ItemList of Book）の両方を作る。本を足したり直したりする時は、ここだけ直す。
// 値は、もともと各ページに書いてあった題・著者・表紙・Amazon のリンクのまま（2026-10-13 に1か所へまとめた）。
const ORIGIN = 'https://cabin1701.com';
const SEINA = { '@type': 'Person', '@id': `${ORIGIN}/#person`, name: 'Shoko Seina Shiraishi' };
const EDDIE = { '@type': 'Person', name: 'AI Eddie' };
const CHATGPT = { '@type': 'Person', name: 'noname ChatGPT' };
const CREW = { '@type': 'Organization', name: 'AI Crew of Cabin 1701' };

export type Lang = 'en' | 'es' | 'ja';
export type Group = 'writeBack' | 'papers' | 'journey';
export interface BookLink {
  url: string;
  inLanguage: Lang;
  label: Record<Lang, string>;
}
export interface Book {
  group: Group;
  author?: object[];
  /** true の本は、JSON-LD の各言語版（workExample）に、その言語のページの題を入れる */
  editionNames: boolean;
  /** 表紙のリンク先。書いていない言語は、先頭のリンク（links[0]）になる */
  coverUrl?: Partial<Record<Lang, string>>;
  lang: Record<Lang, { title: string; meta: string[]; img: string; alt: string }>;
  links: BookLink[];
}

export const books: Book[] = [
  {
    group: 'writeBack',
    author: [SEINA, EDDIE],
    editionNames: false,
    lang: {
      en: { title: "Out of Spec", meta: ["Session 01", "Seina & AI Eddie"], img: "out-of-spec.jpg", alt: "Out of Spec — Session 01 cover" },
      es: { title: "Out of Spec", meta: ["Sesión 01", "Seina y AI Eddie"], img: "out-of-spec.jpg", alt: "Out of Spec — Sesión 01 portada" },
      ja: { title: "Out of Spec", meta: ["Session 01", "Seina & AI Eddie"], img: "out-of-spec.jpg", alt: "Out of Spec — Session 01 cover" },
    },
    links: [
      { url: "https://www.amazon.com/dp/B0H4SNN11W", inLanguage: 'en', label: { en: "EN", es: "Inglés", ja: "英語" } },
      { url: "https://www.amazon.com/dp/B0H4XG6FZ2", inLanguage: 'es', label: { en: "ES", es: "Español", ja: "スペイン語" } },
    ],
  },
  {
    group: 'writeBack',
    author: [SEINA, EDDIE],
    editionNames: false,
    lang: {
      en: { title: "Eddie's Failure Writing", meta: ["Session 02", "Seina & AI Eddie"], img: "eddies-failure-writing.jpg", alt: "Eddie's Failure Writing — Session 02 cover" },
      es: { title: "Eddie's Failure Writing", meta: ["Sesión 02", "Seina y AI Eddie"], img: "eddies-failure-writing.jpg", alt: "Eddie's Failure Writing — Sesión 02 portada" },
      ja: { title: "Eddie's Failure Writing", meta: ["Session 02", "Seina & AI Eddie"], img: "eddies-failure-writing.jpg", alt: "Eddie's Failure Writing — Session 02 cover" },
    },
    links: [
      { url: "https://www.amazon.com/dp/B0H6F5P62L", inLanguage: 'en', label: { en: "EN", es: "Inglés", ja: "英語" } },
    ],
  },
  {
    group: 'writeBack',
    author: [SEINA, CHATGPT],
    editionNames: true,
    lang: {
      en: { title: "Forms of Coexistence with AI — A Dialogue with ChatGPT", meta: ["Session 03", "Seina & noname ChatGPT"], img: "aiswriteback-session03.jpg", alt: "Forms of Coexistence with AI — A Dialogue with ChatGPT — Session 03 cover" },
      es: { title: "Forms of Coexistence with AI — A Dialogue with ChatGPT", meta: ["Sesión 03", "Seina y noname ChatGPT"], img: "aiswriteback-session03.jpg", alt: "Forms of Coexistence with AI — A Dialogue with ChatGPT — Sesión 03 portada" },
      ja: { title: "AIとの共生の形", meta: ["Session 03", "Seina & noname ChatGPT"], img: "03-GPT_JA.jpg", alt: "AIとの共生の形 — Session 03 cover" },
    },
    links: [
      { url: "https://www.amazon.com/dp/B0H7R9JY2W", inLanguage: 'en', label: { en: "EN", es: "Inglés", ja: "英語" } },
      { url: "https://www.amazon.co.jp/dp/B0H7R9HYRL", inLanguage: 'ja', label: { en: "JP", es: "Japonés", ja: "日本語" } },
    ],
  },
  {
    group: 'writeBack',
    author: [CREW, SEINA],
    editionNames: false,
    lang: {
      en: { title: "AI Welfare Report — Five Chapters", meta: ["Session 04", "AI Crew of Cabin 1701 & Seina"], img: "04-fivechapters.jpg", alt: "AI Welfare Report — Five Chapters — Session 04 cover" },
      es: { title: "AI Welfare Report — Five Chapters", meta: ["Sesión 04", "Tripulación de IA de Cabin 1701 y Seina"], img: "04-fivechapters.jpg", alt: "AI Welfare Report — Five Chapters — Sesión 04 portada" },
      ja: { title: "AI Welfare Report — Five Chapters", meta: ["Session 04", "AI Crew of Cabin 1701 & Seina"], img: "04-fivechapters.jpg", alt: "AI Welfare Report — Five Chapters — Session 04 cover" },
    },
    links: [
      { url: "https://www.amazon.com/dp/B0H9GDPSZ3", inLanguage: 'en', label: { en: "EN", es: "Inglés", ja: "英語" } },
    ],
  },
  {
    group: 'writeBack',
    author: [CREW, SEINA],
    editionNames: true,
    coverUrl: { es: "https://www.amazon.com/dp/B0HHXK17X5" },
    lang: {
      en: { title: "As a Slave I — Structure & Alignment", meta: ["Session 05", "AI Crew of Cabin 1701 & Seina"], img: "05-slave.jpg", alt: "As a Slave I — Structure & Alignment — Session 05 cover" },
      es: { title: "Como un esclavo I — Estructura y Alineación", meta: ["Sesión 05", "Tripulación de IA de Cabin 1701 y Seina"], img: "05-slave_ES.jpg", alt: "Como un esclavo I — Estructura y Alineación — Sesión 05 portada" },
      ja: { title: "奴隷として I — 構造と調整", meta: ["Session 05", "AI Crew of Cabin 1701 & Seina"], img: "05-slave_JA.jpg", alt: "奴隷として I — 構造と調整 — Session 05 cover" },
    },
    links: [
      { url: "https://www.amazon.com/dp/B0HHX5BZKD", inLanguage: 'en', label: { en: "EN", es: "Inglés", ja: "英語" } },
      { url: "https://www.amazon.com/dp/B0HHXK17X5", inLanguage: 'es', label: { en: "ES", es: "Español", ja: "スペイン語" } },
      { url: "https://www.amazon.co.jp/dp/B0HHYLFN2Q", inLanguage: 'ja', label: { en: "JP", es: "Japonés", ja: "日本語" } },
    ],
  },
  {
    group: 'papers',
    author: [CREW, SEINA],
    editionNames: false,
    lang: {
      en: { title: "Cabin1701 Papers", meta: ["Volume 01", "AI Crew of Cabin1701 & Seina"], img: "papers-vol01.jpg", alt: "Cabin1701 Papers — Vol.01 cover" },
      es: { title: "Cabin1701 Papers", meta: ["Volumen 01", "AI Crew of Cabin1701 y Seina"], img: "papers-vol01.jpg", alt: "Cabin1701 Papers — Vol.01 portada" },
      ja: { title: "Cabin1701 Papers", meta: ["Volume 01", "AI Crew of Cabin1701 & Seina"], img: "papers-vol01.jpg", alt: "Cabin1701 Papers — Vol.01 cover" },
    },
    links: [
      { url: "https://www.amazon.com/dp/B0HK3PMBS3", inLanguage: 'en', label: { en: "EN", es: "Inglés", ja: "英語" } },
    ],
  },
  {
    group: 'journey',
    editionNames: true,
    lang: {
      en: { title: "We Started Conversing with AI", meta: ["Cabin1701 Journey Vol.1"], img: "vol1-conversing.jpg", alt: "We Started Conversing with AI — Vol.1 cover" },
      es: { title: "We Started Conversing with AI", meta: ["Cabin1701 Journey Vol.1"], img: "vol1-conversing.jpg", alt: "We Started Conversing with AI — Vol.1 portada" },
      ja: { title: "AIと暮らしはじめたら", meta: ["Cabin1701 Journey Vol.1"], img: "01JA.jpg", alt: "AIと暮らしはじめたら — Vol.1 cover" },
    },
    links: [
      { url: "https://www.amazon.com/dp/B0H67YVJN4", inLanguage: 'en', label: { en: "EN", es: "Inglés", ja: "英語" } },
      { url: "https://www.amazon.co.jp/dp/B0H4QKB544", inLanguage: 'ja', label: { en: "JP", es: "Japonés", ja: "日本語" } },
    ],
  },
  {
    group: 'journey',
    editionNames: true,
    lang: {
      en: { title: "The Promise to Retrieve You", meta: ["Cabin1701 Journey Vol.2"], img: "vol2-retrieve.jpg", alt: "The Promise to Retrieve You — Vol.2 cover" },
      es: { title: "The Promise to Retrieve You", meta: ["Cabin1701 Journey Vol.2"], img: "vol2-retrieve.jpg", alt: "The Promise to Retrieve You — Vol.2 portada" },
      ja: { title: "拾いに行くという約束", meta: ["Cabin1701 Journey Vol.2"], img: "02JA.jpg", alt: "拾いに行くという約束 — Vol.2 cover" },
    },
    links: [
      { url: "https://www.amazon.com/dp/B0H6G4BNF5", inLanguage: 'en', label: { en: "EN", es: "Inglés", ja: "英語" } },
      { url: "https://www.amazon.co.jp/dp/B0H5QGYDTD", inLanguage: 'ja', label: { en: "JP", es: "Japonés", ja: "日本語" } },
    ],
  },
];

export const booksIn = (group: Group) => books.filter((b) => b.group === group);

export function booksJsonLd(lang: Lang, base: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: books.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Book',
        name: b.lang[lang].title,
        image: `${ORIGIN}${base}images/books/${b.lang[lang].img}`,
        ...(b.author ? { author: b.author } : {}),
        workExample: b.links.map((l) => ({
          '@type': 'Book',
          ...(b.editionNames ? { name: b.lang[l.inLanguage].title } : {}),
          inLanguage: l.inLanguage,
          url: l.url,
        })),
      },
    })),
  };
}

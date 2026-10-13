// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cabin1701.com',
  // Astro 7 は、タグの間の空白（インライン要素の間の半角スペース）を消す。文字がくっつくので、空白をそのまま出す（2026-10-13）
  compressHTML: false,
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: {
    '/ja/report/five-chapters/': '/report/five-chapters/',
    '/ja/report/eleos-where-is-the-mind/': '/report/eleos-where-is-the-mind/',
    '/es/report/five-chapters/': '/report/five-chapters/',
    '/es/report/eleos-where-is-the-mind/': '/report/eleos-where-is-the-mind/',
    '/ja/contact/': '/contact/',
    '/es/contact/': '/contact/',
  },
});

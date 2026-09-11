// blog moved to cabin1701/blog repo, FM moved to cabin1701/failure-mode repo.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each paper is a folder (e.g. src/content/papers/001-ai-self-report/) holding the
// chapter files from the 01b_AI-Papers workflow (0-Abstract.md, 1-Introduction.md, …
// — numbered to match the in-text section numbers, so Abstract is 0). Only
// 0-Abstract.md carries the collection's frontmatter/schema data + the abstract body,
// shown open (not in an accordion). The remaining chapter files are read directly by
// the detail page via import.meta.glob, same pattern as ReportFiveChapters.astro.
function generateId({ entry }: { entry: string }) {
  return entry.split('/')[0];
}

const papers = defineCollection({
  loader: glob({ pattern: '*/0-Abstract.md', base: './src/content/papers', generateId }),
  schema: z.object({
    title: z.string(),
    // Cabin1701's own catalog number (e.g. "001"), matching the 01b_AI-Papers folder
    // prefix. Shown as a prefix on the page/index title so the archive stays legible
    // at a glance once there are dozens of papers — not used in citation metadata,
    // which should carry only the paper's real title.
    paperNumber: z.string(),
    date: z.coerce.date(),
    // Primary AI engine credited, used for the sidebar filter and index badge (e.g. "G-Vega", "Eddie").
    // Not in the original README template — proposed addition, pending the captain's confirmation.
    aiAuthor: z.string(),
    // Full byline for citation metadata, e.g. ["Cabin1701 Collective", "G-Vega (Gemini Engine / Flash)", "Shoko Seina Shiraishi"].
    authors: z.array(z.string()).min(1),
    // Optional label per author line (same length as authors), e.g. ["Author", "Primary", "Co-investigator"].
    // Shown as "Label: value" in the metadata block; falls back to plain values when omitted.
    authorLabels: z.array(z.string()).optional(),
    affiliation: z.string().optional(),
    // README's sample YAML uses a single string; normalized to an array here so the
    // sidebar/index can treat it the same as blog categories.
    category: z
      .union([z.string(), z.array(z.string())])
      .optional()
      .transform((c) => (c === undefined ? undefined : Array.isArray(c) ? c : [c])),
    tags: z.array(z.string()).optional(),
    excerpt: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    // Path to the source files in this repo, for a "view history" link to the commit log.
    sourcePath: z.string().optional(),
    pdfUrl: z.string().optional(),
  }),
});

export const collections = { papers };

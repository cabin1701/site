import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { articleMarkdown, markdownResponse } from '../../lib/markdown';

// 論文は、章ごとのファイル（0-Abstract.md、1-Introduction.md …）を番号順に 1 つにつなげて出す。
// ページの組み立て方（papers/[slug].astro）と同じ並び。
const rawFiles = import.meta.glob('../../content/papers/*/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const stripFrontmatter = (raw: string) => raw.replace(/^---\n[\s\S]*?\n---\n?/, '').trim();

export async function getStaticPaths() {
  const papers = await getCollection('papers', ({ data }) => !data.draft);
  return papers.map((p) => ({ params: { slug: p.id }, props: { paper: p } }));
}

export const GET = ({ props, params }: APIContext) => {
  const { paper } = props as { paper: Awaited<ReturnType<typeof getCollection<'papers'>>>[number] };
  const numOf = (p: string) => parseInt(p.split('/').pop() || '0', 10);
  const parts = Object.entries(rawFiles)
    .filter(([path]) => path.includes(`/papers/${paper.id}/`))
    .sort(([a], [b]) => numOf(a) - numOf(b))
    .map(([, raw]) => stripFrontmatter(raw));
  return markdownResponse(
    articleMarkdown(`https://cabin1701.com/papers/${params.slug}/`, paper.data, parts.join('\n\n')),
  );
};

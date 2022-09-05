import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';

const docsDirectory = join(process.cwd(), 'mds/posts');

export function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug: realSlug, meta: data, content };
}

export function getAllDocs() {
  const slugs = fs.readdirSync(docsDirectory);
  return slugs.map((slug) => getDocBySlug(slug));
}

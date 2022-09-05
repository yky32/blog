import MarkdownLayout from "../../components/_child/markdownLayout";
import {getAllDocs, getDocBySlug} from "../../lib/docs";
import markdownToHtml from "../../lib/markdown";

export async function getStaticProps({params: {slug}}) {
    const doc = getDocBySlug(slug);
    const content = await markdownToHtml(doc.content || '');

    return {
        props: {
            ...doc, content
        }
    };
}

export async function getStaticPaths() {
    const docs = getAllDocs();
    return {
        paths: docs.map((doc) => {
            return {
                params: {
                    slug: doc.slug
                }
            };
        }), fallback: 'blocking'
    };
}

export default function Doc({meta, content}) {
    return <MarkdownLayout meta={meta}>{content}</MarkdownLayout>;
}

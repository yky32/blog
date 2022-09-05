import Head from 'next/head';
import {useState} from 'react';

export default function MarkdownLayout({children, meta: pageMeta}) {
    const [theme, setTheme] = useState('okaidia');
    const meta = {
        title: pageMeta.title,
        description: pageMeta.description,
        cardImage: 'https://og-image.now.sh/**Prism**%20with%20Next.js.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg',
        ...pageMeta
    };

    return (<>
            <Head>
                <title>{meta.title}</title>
                <meta charSet="utf-8"/>
                <meta content="IE=edge" httpEquiv="X-UA-Compatible"/>
                <meta content="width=device-width, initial-scale=1" name="viewport"/>
                <meta name="robots" content="follow, index"/>
                <link href="/public/favicon.ico" rel="shortcut icon"/>
                <meta content={meta.description} name="description"/>
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content={meta.title}/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:title" content={meta.title}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@vercel"/>
                <meta name="twitter:title" content={meta.title}/>
                <meta name="twitter:description" content={meta.description}/>
                <link
                    rel="preload"
                    href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
                    as="script"
                />
                <link
                    rel="preload"
                    href="https://unpkg.com/prismjs@0.0.1/themes/prism-coy.css"
                    as="script"
                />
                <link
                    rel="preload"
                    href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
                    as="script"
                />
                <link
                    rel="preload"
                    href="https://unpkg.com/prismjs@0.0.1/themes/prism-funky.css"
                    as="script"
                />
                <link
                    href={`https://unpkg.com/prismjs@0.0.1/themes/prism-${theme}.css`}
                    rel="stylesheet"
                />
            </Head>
            <div id="skip">
                <article
                    className="prose lg:prose-xl px-8 m-auto my-4 sm:my-16"
                    dangerouslySetInnerHTML={{__html: children}}
                />
            </div>
        </>);
}

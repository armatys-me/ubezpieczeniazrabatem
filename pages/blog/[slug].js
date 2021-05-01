import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

import { getAllPostsWithSlug, getPost } from 'utils/api';

const formatDate = date => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
}

export async function getStaticPaths() {
    const allPost = await getAllPostsWithSlug();

    return {
        paths: allPost.edges.map(({ node }) => `/blog/${node.slug}`) || [],
        fallback: true
    }
};

export async function getStaticProps({ params }) {
    const data = await getPost(params.slug);

    return {
        revalidate: 30,
        props: {
            postData: data.post
        }
    };
};

export default function BlogPage({ postData }) {
    const router = useRouter();

    if (!router.isFallback && !postData?.slug) {
        return <p>Hmm .. error</p>;
    }

    if (router.isFallback) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <Head>
                <title>{postData.title} - blog internetowy</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <h1>{postData.title}</h1>
                <p>{formatDate(postData.date)}</p>
                <div dangerouslySetInnerHTML={{ __html: postData.content }} />
            </main>
        </div>
    );
};
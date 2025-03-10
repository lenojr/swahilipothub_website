import React from 'react';
import Head from 'next/head';

interface MetaTagsProps {
    title: string;
    description: string;
    keywords?: string;
    author?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({ title, description, keywords, author }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {author && <meta name="author" content={author} />}
        </Head>
    );
};

export default MetaTags;
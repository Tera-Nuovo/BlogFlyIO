import { Head, Title, Meta, Link, Body, Scripts } from 'solid-start'

interface ArticleHeadProps {
  title: string;
  description: string;
}

const ArticleHead = ({ title, description }: ArticleHeadProps) => {
    return (
        <Head>
            <Title>{title} - Solid Blog</Title>
            <Meta name="description" content={description} />
            <Meta property='og:description' content={description} />
            <Meta property='og:title' content={`${title} - Solid Blog`} />

        </Head>
    );
}

export default ArticleHead;

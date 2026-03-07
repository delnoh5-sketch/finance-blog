import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';

export const revalidate = 30;

// 1. Set up the Sanity Image Builder
const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageBlock) {
  return builder.image(source);
}

interface SanityImageBlock {
  asset?: {
    _ref: string;
  };
  alt?: string;
}

// 2. Tell PortableText EXACTLY how to render an image block
const portableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImageBlock }) => {
      if (!value?.asset?._ref) return null;
      
      return (
        <Image
          src={urlFor(value).width(800).auto('format').url()}
          alt={value.alt || 'Blog post image'}
          className="rounded-xl shadow-sm border border-gray-100 mx-auto my-8 w-full max-w-3xl object-cover"
          width={800}
          height={600}
        />
      );
    },
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  
  const query = `*[_type == "post" && slug.current == $slug][0] { title, excerpt }`;
  const post = await client.fetch(query, { slug: resolvedParams.slug });

  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;

  // We are fetching the body exactly as before
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    publishedAt,
    "authorName": author->name,
    body
  }`;
  
  const post = await client.fetch(query, { slug: resolvedParams.slug });

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      
      <div className="mb-10">
        <Link href="/" className="text-sm font-semibold text-finance-green hover:underline flex items-center gap-2">
          &larr; Back to all articles
        </Link>
      </div>

      <header className="mb-12 border-b border-gray-200 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-finance-green leading-tight mb-6">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-medium uppercase tracking-wider">
          <time dateTime={post.publishedAt}>
            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'No Date'}
          </time>
          {post.authorName && (
            <>
              <span className="text-gray-300">|</span>
              <span>By {post.authorName}</span>
            </>
          )}
        </div>
      </header>

      <div className="prose prose-lg prose-p:text-gray-600 prose-headings:font-serif prose-headings:text-finance-green prose-a:text-blue-600 hover:prose-a:text-blue-500 mx-auto">
        {/* 3. Pass the custom components into PortableText! */}
        <PortableText value={post.body} components={portableTextComponents} />
      </div>

    </article>
  );
}
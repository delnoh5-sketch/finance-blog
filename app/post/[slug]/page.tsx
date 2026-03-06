import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';

export const revalidate = 30;

// 1. Define the new Next.js parameter type as a Promise
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // 2. Await the params before using them
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
  // 3. Await the params here too
  const resolvedParams = await params;

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
        <Link href="/" className="text-sm font-semibold text-[var(--color-finance-green)] hover:underline flex items-center gap-2">
          &larr; Back to all articles
        </Link>
      </div>

      <header className="mb-12 border-b border-gray-200 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-finance-green)] leading-tight mb-6">
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

      <div className="prose prose-lg prose-p:text-gray-600 prose-headings:font-serif prose-headings:text-[var(--color-finance-green)] prose-a:text-blue-600 hover:prose-a:text-blue-500 mx-auto">
        <PortableText value={post.body} />
      </div>

    </article>
  );
}
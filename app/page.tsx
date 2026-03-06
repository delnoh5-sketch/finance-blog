import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
}

// This query asks your Sanity database for all posts, ordered by the newest first.
const query = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt
}`;

// Next.js server component that fetches the data automatically
export default async function Home() {
  const posts: Post[] = await client.fetch(query);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-finance-green leading-tight mb-6">
          Master your money.<br />Design your life.
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Actionable, jargon-free personal finance advice to help you build wealth, eliminate debt, and achieve financial independence.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section>
        <h2 className="text-2xl font-serif font-bold text-finance-green mb-8 border-b border-gray-200 pb-2">
          Latest Articles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post: Post) => (
              <article key={post._id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full p-6">
                
                <h3 className="text-xl font-serif font-bold mb-3 leading-snug">
                  <Link href={`/post/${post.slug}`} className="hover:text-finance-green transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-400 text-xs mb-4 font-medium uppercase tracking-wider">
                  {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'No Date'}
                </p>
                
                <p className="text-gray-600 text-sm mb-6 grow">
                  {post.excerpt || "Click to read this article and take control of your finances."}
                </p>
                
                <Link href={`/post/${post.slug}`} className="text-finance-green font-bold text-sm hover:underline mt-auto inline-block">
                  Read Article &rarr;
                </Link>

              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
              <p className="text-gray-500 mb-2">No articles published yet.</p>
              <p className="text-sm text-gray-400">Head over to your Admin Login to write your first post!</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
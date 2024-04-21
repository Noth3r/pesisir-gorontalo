import { type Metadata} from "next";
import { notFound } from "next/navigation";
import { fetchBlogPost, fetchBlogPosts } from "~/contentful/blogPosts";
import Navbar from "~/containers/navbar";
import Footer from "~/containers/footer";
import BlogDetail from "~/containers/blog/BlogDetail";

interface BlogPostPageParams {
  slug: string;
}

interface BlogPostPageProps {
  params: BlogPostPageParams;
}

export async function generateStaticParams(): Promise<BlogPostPageParams[]> {
  const blogPosts = await fetchBlogPosts({ preview: false });

  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  { params }: BlogPostPageProps,
): Promise<Metadata> {
  const blogPost = await fetchBlogPost({
    slug: params.slug,
    preview: false,
  });

  if (!blogPost) {
    return notFound();
  }

  return {
    title: blogPost.title + " | KKN Pesisir Gorontalo 2024",
  };
}

async function BlogPostPage({ params }: BlogPostPageProps) {
  const blogPost = await fetchBlogPost({
    slug: params.slug,
    preview: false,
  });

  if (!blogPost) {
    return notFound();
  }

  return (
    <main>
      <Navbar />
      <BlogDetail blogPost={blogPost} />
      <Footer />
    </main>
  );
}

export default BlogPostPage;

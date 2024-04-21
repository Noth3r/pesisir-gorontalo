import BlogData from "~/containers/blog/BlogData";
import Footer from "~/containers/footer";
import Navbar from "~/containers/navbar";
import { fetchBlogPosts } from "~/contentful/blogPosts";

async function Blog() {
  const blogPosts = await fetchBlogPosts({ preview: false });

  return (
    <main className="bg-purplish-200">
      <Navbar />
      <div className="container">
        <div className="flex flex-col items-center justify-center pt-16">
          <h1 className="font-cocogoose text-center text-xl lg:text-4xl font-light text-bluish-100">
            Artikel Terbaru
          </h1>
          <p className="font-beach text-2xl text-center lg:text-5xl text-bluish-100">
            Pesisir Gorontalo 2024
          </p>
        </div>
        <BlogData blogPosts={blogPosts} />
      </div>
      <Footer/>
    </main>
  );
}

export default Blog;

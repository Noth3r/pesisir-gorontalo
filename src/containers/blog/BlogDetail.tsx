import Link from "next/link";
import RichText from "~/contentful/RichText";
import { fetchBlogPosts, type BlogPost } from "~/contentful/blogPosts";

async function BlogDetail({ blogPost }: { blogPost: BlogPost }) {
  const blogPosts = await fetchBlogPosts({ preview: false, limit: 3 });

  return (
    <div className="container mb-32">
      {blogPost.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={blogPost.image.src}
          srcSet={`${blogPost.image.src}?w=1280 1x, ${blogPost.image.src} 2x`}
          width={1000}
          height={640}
          className="mt-8 aspect-video w-5/6 ml-auto mr-auto self-center rounded-md"
          alt={blogPost.image.alt}
        />
      )}

      <div
        style={{
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
        className="mt-12 w-screen bg-bluish-100 py-8"
      >
        <div className="container">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            {blogPost.title}
          </h1>
          <p className="mt-2 text-gray-500">
            {blogPost.date} -{" "}
            <span className="text-purplish-200">{blogPost.author}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="relative mt-8 flex gap-12">
          <div className="flex flex-col text-justify font-futura text-lg font-light leading-relaxed xl:basis-3/4">
            <RichText document={blogPost.body} />
          </div>
          <div className="sticky top-20 hidden self-start xl:block xl:basis-1/4">
            <h1 className="text-2xl">Artikel Lain</h1>
            <ul className="mt-3 flex flex-col gap-4">
              {blogPosts?.length > 0 &&
                blogPosts
                  .filter((post) => post.slug != blogPost.slug)
                  .map((post) => <OtherComponents key={post.slug} {...post} />)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const OtherComponents = (blogPost: BlogPost) => {
  return (
    <Link href={`/blog/${blogPost.slug}`}>
      <div className="w-full gap-2 rounded-xl bg-bluish-100 px-4 py-2">
        <h1 className="font-futura text-lg font-bold">{blogPost.title}</h1>
        <p className="mt-3 text-sm">{blogPost.date}</p>
      </div>
    </Link>
  );
};

export default BlogDetail;

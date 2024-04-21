import RichText from "~/contentful/RichText"
import { fetchBlogPosts, type BlogPost } from "~/contentful/blogPosts"

async function BlogDetail({blogPost}: {blogPost: BlogPost}) {
  const blogPosts = await fetchBlogPosts({ preview: false, limit: 5 });


  return (
    <div className="container mb-32">
    <div className="mt-8 flex flex-col">
      {blogPost.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={blogPost.image.src}
          srcSet={`${blogPost.image.src}?w=1280 1x, ${blogPost.image.src} 2x`}
          width={1280}
          height={720}
          className="aspect-video self-center rounded-md"
          alt={blogPost.image.alt}
        />
      )}

      <div className="bg-bluish-100 mt-12 py-8">
        <h1 className="text-4xl">{blogPost.title}</h1>
        <p className="mt-2 text-gray-500">
          {blogPost.date} - <span className="text-purplish-200">{blogPost.author}</span>
        </p>
      </div>

      <div className="flex relative gap-12 mt-8">
      <div className="basis-3/4 font-futura text-lg font-light flex flex-col text-justify leading-relaxed">
        <RichText document={blogPost.body} />
      </div>
        <div className="basis-1/4 sticky top-20 self-start">
        <h1 className="text-2xl">Artikel Lain</h1>
        <ul>

        </ul>
        </div>
      </div>

    </div>
  </div>
  )
}

export default BlogDetail
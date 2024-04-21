/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { searchBlogPosts, type BlogPost } from "~/contentful/blogPosts";
import { useDebounce } from "use-debounce";

function BlogData({ blogPosts }: { blogPosts: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<BlogPost[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    searchBlogPosts({ query, preview: false })
      .then((results) => {
        setSearchResults(results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [value] = useDebounce(searchQuery, 500);

  useEffect(() => {
    handleSearch(value);
  }, [value]);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <input
        type="text"
        value={searchQuery}
        placeholder="Cari Artikel..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="my-4 w-1/3 rounded-xl px-4 py-2"
      />

      <ul className="w-full flex flex-col items-center">
        {searchQuery != ""
          ? searchResults.map((blogPost) => (
            <BlogComponent key={blogPost.slug} {...blogPost} />
            ))
          : blogPosts.map((blogPost) => (
              <BlogComponent key={blogPost.slug} {...blogPost} />
            ))}
      </ul>
    </div>
  );
}

const BlogComponent = (blogPost: BlogPost) => {
  return (
    <div className="flex w-3/4 mb-32 gap-4 rounded-xl bg-bluish-100 p-4">
      <div className="basis-1/3">
        <img
          src={blogPost.image?.src}
          srcSet={`${blogPost.image?.src}?w=300 1x, ${blogPost.image?.src} 2x`}
          width={300}
          height={175}
          className="aspect-video w-full self-center rounded-md"
          alt={blogPost.image?.alt}
        />
      </div>
      <div className="flex flex-col justify-between basis-2/3">
        <div>
          <h1 className="font-cocogoose text-2xl">{blogPost.title}</h1>
          <p>{blogPost.date}</p>
        </div>

        <Link className="self-end" href={`/blog/${blogPost.slug}`}>
          <button className="rounded-lg bg-bluish-300 text-bluish-100 p-2 font-cocogoose font-[350]">
            Kunjungi
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogData;

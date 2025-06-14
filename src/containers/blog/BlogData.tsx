/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { searchBlogPosts, type BlogPost } from "~/contentful/blogPosts";
import { useDebounce } from "use-debounce";

function BlogData({ blogPosts, authors }: { blogPosts: BlogPost[], authors: string[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<BlogPost[]>([]);
  const [searchAuthor, setSearchAuthor] = useState("");

  const handleSearch = (query: string, author: string) => {
    setSearchQuery(query);
    searchBlogPosts({ query, preview: false })
      .then((results) => {
        console.log(results)
        if (author) {
          results = results.filter((result) => result.author === author);
        }
        setSearchResults(results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [value] = useDebounce(searchQuery, 250);

  useEffect(() => {
    handleSearch(value, searchAuthor);
  }, [value, searchAuthor]);

  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="flex w-full gap-4 justify-center items-center h-10 my-4 ">
      <input
        type="text"
        value={searchQuery}
        placeholder="Cari Artikel..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="rounded-xl px-4 py-2 h-full w-full md:w-2/3"
      />

      <select
        className="rounded-xl px-4 w-1/4 h-full"
        onChange={(e) => setSearchAuthor(e.target.value)}
      >
        <option value="">Semua Penulis</option>
        {authors.map((author) => (
          <option key={author} value={author}>
            {author}
          </option>
        ))}
      </select>
      </div>

      <ul className="mt-6 flex w-full flex-col items-center mb-24">
        {(searchQuery != "" || searchAuthor != "")
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
    <div className="mb-12 flex gap-4 rounded-xl bg-bluish-100 p-4 lg:w-3/4">
      <div className="hidden md:block md:basis-1/3">
        <img
          src={blogPost.image?.src}
          srcSet={`${blogPost.image?.src}?w=300 1x, ${blogPost.image?.src} 2x`}
          width={300}
          height={175}
          className="aspect-video w-full self-center rounded-md"
          alt={blogPost.image?.alt}
        />
      </div>
      <div className="flex flex-col justify-between md:basis-2/3">
        <div>
          <h1 className="font-futura text-xl font-bold lg:text-2xl">
            {blogPost.title}
          </h1>
          <div className="flex w-full justify-between mt-4 md:mt-0">
            <p className="mt-2 text-sm">{blogPost.date}</p>
            <Link className="md:hidden self-end" href={`/blog/${blogPost.slug}`}>
              <button className="rounded-lg text-sm bg-bluish-300 p-2 font-cocogoose font-[350] text-bluish-100">
                Kunjungi
              </button>
            </Link>
          </div>
        </div>

        <Link className="hidden md:block self-end" href={`/blog/${blogPost.slug}`}>
          <button className="rounded-lg bg-bluish-300 p-2 font-cocogoose font-[350] text-bluish-100">
            Kunjungi
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogData;

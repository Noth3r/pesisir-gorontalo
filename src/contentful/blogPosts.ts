import { type TypeAuthorSkeleton, type TypeBlogSkeleton } from "./types";
import { type Entry } from "contentful";
import { type Document as RichTextDocument } from "@contentful/rich-text-types";
import contentfulClient from "./contentfulClient";
import { type ContentImage, parseContentfulContentImage } from "./contentImage";

type BlogPostEntry = Entry<TypeBlogSkeleton, undefined, string>;

export interface BlogPost {
  title: string;
  slug: string;
  body: RichTextDocument | null;
  author: string;
  image: ContentImage | null;
  date: string;
}

export function parseContentfulBlogPost(
  blogPostEntry?: BlogPostEntry,
): BlogPost | null {
  if (!blogPostEntry) {
    return null;
  }

  const d = Date.parse(blogPostEntry.fields.date);
  const ye = new Intl.DateTimeFormat("id", { year: "numeric" }).format(d);
  const mo = new Intl.DateTimeFormat("id", { month: "long" }).format(d);
  const da = new Intl.DateTimeFormat("id", { day: "2-digit" }).format(d);

  return {
    title: blogPostEntry.fields.title || "",
    slug: blogPostEntry.fields.slug,
    body: blogPostEntry.fields.content || null,
    image: parseContentfulContentImage(blogPostEntry.fields.cover[0]),
    author: (
      blogPostEntry.fields.author as Entry<
        TypeAuthorSkeleton,
        undefined,
        string
      >
    ).fields.name,
    date: `${da} ${mo} ${ye}`,
  };
}

interface FetchBlogPostsOptions {
  preview: boolean;
  limit?: number;
  skip?: number;
}
export async function fetchBlogPosts({
  preview,
  limit,
  skip
}: FetchBlogPostsOptions): Promise<BlogPost[]> {
  const contentful = contentfulClient({ preview });

  const blogPostsResult = await contentful.getEntries<TypeBlogSkeleton>({
    content_type: "blog",
    limit: limit ?? 5,
    include: 5,
    skip: skip ?? 0,
    order: ["fields.date"],
  });

  return blogPostsResult.items.map(
    (blogPostEntry) => parseContentfulBlogPost(blogPostEntry)!,
  );
}

interface SearchBlogPostsOptions {
  query: string;
  preview: boolean;
}

export async function searchBlogPosts({preview,query}: SearchBlogPostsOptions) {
  const contentful = contentfulClient({preview});

  const blogPostsResult = await contentful.getEntries<TypeBlogSkeleton>({
    content_type: "blog",
    "fields.title[match]": query,
    include: 5,
    limit: 5,
  });

  return blogPostsResult.items.map(
    (blogPostEntry) => parseContentfulBlogPost(blogPostEntry)!,
  );
}

interface FetchBlogPostOptions {
  slug: string;
  preview: boolean;
}
export async function fetchBlogPost({
  slug,
  preview,
}: FetchBlogPostOptions): Promise<BlogPost | null> {
  const contentful = contentfulClient({ preview });

  const blogPostsResult = await contentful.getEntries<TypeBlogSkeleton>({
    content_type: "blog",
    "fields.slug": slug,
    include: 10,
  });

  return parseContentfulBlogPost(blogPostsResult.items[0]);
}

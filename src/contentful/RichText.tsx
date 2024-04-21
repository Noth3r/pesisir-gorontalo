/* eslint-disable @next/next/no-img-element */
import { type Document as RichTextDocument } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { parseContentfulContentImage } from "./contentImage";

type RichTextProps = {
  document: RichTextDocument | null;
};

function RichText({ document }: RichTextProps) {
  if (!document) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return (
    <article className="prose lg:prose-lg prose-h1:text-xl md:prose-h1:text-2xl lg:prose-h1:text-3xl prose-img:w-full max-w-none">
      {documentToReactComponents(document, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            const data = parseContentfulContentImage(node.data.target);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            const desc = node.data?.target?.fields?.description as
              | string
              | undefined;
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <>
                <img
                  src={data?.src}
                  srcSet={`${data?.src} 1x, ${data?.src} 2x`}
                  alt={data?.alt}
                  className="my-4 aspect-video rounded-md"
                />
                {desc && <p className="text-sm text-center !-mt-6">{desc}</p>}
                </>
            );
          },
        },
      })}
    </article>
  );
}

export default RichText;

/**
 * Generates an array of metadata tag objects for SEO and social media sharing.
 *
 * Constructs standard meta tags, Twitter card tags, and Open Graph tags based on the provided information. If an image URL is supplied, additional image-related tags are included.
 *
 * @param title - The page title to use in metadata.
 * @param description - Optional description for the page.
 * @param keywords - Optional comma-separated keywords for the page.
 * @param image - Optional URL of an image to use for social sharing previews.
 * @returns An array of objects representing meta and title tags for SEO and social platforms.
 */
export function seo({
  title,
  description,
  keywords,
  image,
}: {
  title: string;
  description?: string;
  image?: string;
  keywords?: string;
}) {
  const tags = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: "@shivamvijaywarg" },
    { name: "twitter:site", content: "@shivamvijaywarg" },
    { name: "og:type", content: "website" },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    ...(image
      ? [
          { name: "twitter:image", content: image },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "og:image", content: image },
        ]
      : []),
  ];

  return tags;
}

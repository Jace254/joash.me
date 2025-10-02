import { g as useHead } from './server.mjs';

function useCustomHead(title, description, image) {
  useHead({
    title,
    meta: [
      {
        name: "description",
        content: description ?? "Building for comfort"
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@JoashMacenton" },
      { name: "twitter:domain", content: "joash.me" },
      { name: "twitter:image", content: "https://www.joash.me/og" },
      { name: "twitter:url", content: "https://www.joash.me/" },
      { name: "twitter:description", content: description ?? "Building for comfort" },
      { name: "twitter:title", content: title ?? "Joash Agesa | Building for comfort" },
      { property: "og:title", content: title ?? "Joash Agesa | Building for comfort" },
      { property: "og:url", content: "https://www.joash.me/" },
      { property: "og:image", content: "https://www.joash.me/og" },
      { property: "og:image:secure_url", content: "https://www.joash.me/og" },
      { property: "og:image:type", content: "image/png" },
      {
        property: "og:description",
        content: description ?? "Building for comfort"
      }
    ]
  });
}

export { useCustomHead as u };
//# sourceMappingURL=head-oc2xLLz6.mjs.map

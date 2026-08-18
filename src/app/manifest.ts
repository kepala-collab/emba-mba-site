import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Future Ready Executive MBA",
    short_name: "Future Ready EMBA",
    description: "A three-month professional management programme for experienced working adults, approved and endorsed by CMI against its Professional Standard.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#F7FBFF",
    theme_color: "#F7FBFF",
    lang: "en-MY",
    categories: ["education", "business"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/brand/rdr-emblem.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Future Ready Executive MBA",
    short_name: "Future Ready EMBA",
    description: "A professional Executive MBA recognised by CMI (UK) for working leaders in Malaysia.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#06080E",
    theme_color: "#06080E",
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

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Future Ready Executive MBA",
    short_name: "Future Ready EMBA",
    description: "The Executive MBA on Future Ready Business Leadership is awarded and endorsed by CMI. A three-month professional programme for experienced working adults.",
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

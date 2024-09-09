/** @type {import('next').NextConfig} */

import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  images: {
    unoptimized: true,
    path: "/myprofile"
  },
  assetPrefix: "/myprofile",
  basePath: "/myprofile",
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {},
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);

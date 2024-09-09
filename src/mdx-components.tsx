import type { MDXComponents } from "mdx/types";
import { CSSProperties } from "react";

const theme = {
  h1: {
    color: "#db694a",
  },
  h2: {
    color: "#d48c45",
  },
  h3: {
    color: "#cdc874",
  },
  h4: {
    color: "#94c55b",
  },
  h5: {
    color: "#57c69c",
  },
  h6: {
    color: "#57a3c7",
  },
} as { [key: string]: CSSProperties };

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 style={theme.h1}>{children}</h1>,
    h2: ({ children }) => <h2 style={theme.h2}>{children}</h2>,
    h3: ({ children }) => <h3 style={theme.h3}>{children}</h3>,
    h4: ({ children }) => <h4 style={theme.h4}>{children}</h4>,
    h5: ({ children }) => <h5 style={theme.h5}>{children}</h5>,
    h6: ({ children }) => <h6 style={theme.h6}>{children}</h6>,
    ...components,
  };
}

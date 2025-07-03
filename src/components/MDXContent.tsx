"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXComponents } from "@/lib/useMDXComponents";

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export default function MDXContent({ source }: MDXContentProps) {
  const components = MDXComponents({});
  return <MDXRemote {...source} components={components} />;
}

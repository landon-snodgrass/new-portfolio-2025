'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useMDXComponents } from '@/lib/useMDXComponents'

interface MDXContentProps {
  source: MDXRemoteSerializeResult
}

export default function MDXContent({ source }: MDXContentProps) {
  const components = useMDXComponents({})
  return <MDXRemote {...source} components={components} />
}
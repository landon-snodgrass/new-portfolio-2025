import type { MDXComponents } from 'mdx/types'

export function MDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-deep-brown mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-deep-brown mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-deep-brown mb-2">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-lg leading-relaxed mb-4">{children}</p>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-burnt-orange">{children}</strong>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-1 mb-4">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="text-base">{children}</li>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    ...components,
  }
}
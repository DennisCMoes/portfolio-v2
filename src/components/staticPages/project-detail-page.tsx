'use client'

import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import * as Component from '@/components/ui/markdown-components'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import Link from 'next/link'

// TODO: Add table styling
// TODO: Maybe use this plugin: https://github.com/kevin940726/remark-codesandbox
// https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins
export default function ProjectDetailPage({ data, content }: any) {
  function getFormattedDate() {
    return new Intl.DateTimeFormat('en', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(data.date))
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">
      <div className="space-y-2 mb-4">
        <div className="mb-4">
          <p className="text-gray-500 font-bold">{getFormattedDate()}</p>
          <h1 className="text-4xl font-semibold">{data.title}</h1>
        </div>
        <div className="flex flex-row justify-between items-center">
          <Link
            href={data.repository}
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            className="transition-colors duration-300 text-primary-dark hover:text-primary-light bg-primary-light hover:bg-primary-dark font-medium rounded-md text-sm px-8 py-2.5 text-center inline-flex items-center justify-center border-2 border-primary-dark"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-2 -ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
            GitHub
          </Link>
          <div className="inline-flex flex-row gap-2 text-gray-500 font-medium">
            {data.technologies.map((item: any, index: number) => (
              <p key={index}>#{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full relative aspect-video">
        <Image
          src={data.coverImage}
          alt={'Cover image'}
          sizes="100%"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-md"
        />
      </div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeAccessibleEmojis]}
        components={{
          table: Component.Table,
          thead: Component.TableHead,
          tr: Component.TableRow,
          th: Component.TableHeadCell,
          td: Component.TableCell,
          tbody: Component.TableBody,
          ul: Component.UnorderedList,
          ol: Component.OrderedList,
          h1: Component.Heading1,
          h2: Component.Heading2,
          h3: Component.Heading3,
          p: Component.Paragraph,
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')

            // TODO: Add copy to clipboard button
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                style={darcula}
                language={match[1]}
                PreTag="div"
                customStyle={{ borderRadius: 6 }}
                showLineNumbers={true}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          },
          img: ({ src, alt }: any): JSX.Element => {
            return (
              <div className="flex flex-col mb-4">
                <div className="relative aspect-video overflow-hidden rounded-md">
                  <Image
                    src={src!}
                    alt={alt!}
                    sizes="100%"
                    style={{ objectFit: 'cover' }}
                    fill
                  />
                </div>
                <div>{alt}</div>
              </div>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

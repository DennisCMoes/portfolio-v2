'use client'

import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import * as Component from '@/components/ui/markdown-components'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'

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
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="space-y-2 mb-4">
        <h1 className="text-4xl font-semibold">{data.title}</h1>
        <p className="text-gray-500 font-bold">{getFormattedDate()}</p>
        <div className="flex flex-row gap-2 text-sm text-gray-500 font-medium">
          {data.technologies.map((item: any, index: number) => (
            <p key={index}>{item}</p>
          ))}
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

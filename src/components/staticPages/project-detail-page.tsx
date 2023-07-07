'use client'

import Image from 'next/image'
import Link from 'next/link'

// Markdown
import ReactMarkdown from 'react-markdown'
import * as Component from '@/components/ui/markdown-components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'

// Remark plugins
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'

// Rehype plugins
import rehypeVideo from 'rehype-video'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'

export default function ProjectDetailPage({ data, content }: any) {
  /**
   * Returns a formatted date string.
   * @returns {string} The formatted date string.
   */
  function getFormattedDate(): string {
    return new Intl.DateTimeFormat('en', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(data.date))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-2 mb-4">
        <div className="mb-4">
          <p className="text-gray-500 font-bold">{getFormattedDate()}</p>
          <h1 className="text-4xl font-semibold">{data.title}</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1">
          <Link
            href={data.repository}
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            className="transition-colors duration-300 text-primary-dark hover:text-primary-light bg-primary-light hover:bg-primary-dark font-medium rounded-md text-sm px-8 py-2.5 text-center inline-flex items-center justify-center border-2 border-primary-dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-1 -ml-1"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"
                strokeWidth="0"
                fill="currentColor"
              ></path>
            </svg>
            GitHub
          </Link>
          <div className="inline-flex flex-row gap-x-2 text-gray-500 font-medium items-end justify-end flex-wrap">
            {data.technologies.map((item: any, index: number) => (
              <p key={index}>#{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full relative aspect-[4/3] mb-4">
        <Image
          src={data.coverImage}
          alt={'Cover image'}
          sizes="100%"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkUnwrapImages]}
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
          a({ href, children }: any) {
            return (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:underline"
              >
                {children}
              </Link>
            )
          },
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')

            // TODO: Add copy to clipboard button
            if (!inline && match) {
              return (
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
              )
            } else if (inline) {
              return (
                <code
                  {...props}
                  className={`inline-code bg-primary-dark text-primary-light rounded-sm px-1 py-0.5`}
                >
                  {children}
                </code>
              )
            } else {
              return (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            }
          },
          img({ src, alt }: any): JSX.Element {
            return (
              <div className="flex flex-col mb-4">
                {src.endsWith('.mp4') ? (
                  <div className="relative aspect-video overflow-hidden rounded-md">
                    <video
                      src={src!}
                      className="object-cover"
                      autoPlay
                      loop
                      muted
                    >
                      <source src={src!} type="video/mp4" />
                      Your browser does not support the video tag
                    </video>
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] md:aspect-video overflow-hidden rounded-md">
                    <Image
                      src={src!}
                      alt={alt!}
                      sizes="100%"
                      className="object-cover"
                      fill
                    />
                  </div>
                )}
                <div className="text-sm text-tertiary-light">{alt}</div>
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

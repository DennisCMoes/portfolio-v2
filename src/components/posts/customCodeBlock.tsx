import { ReactNode } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'

type CodeProps = {
  classname?: string
  children: ReactNode
}

export default function CustomCodeBlock({ classname, children }: CodeProps) {
  const match = /language-(\w+)/.exec(classname || '')

  if (match) {
    return (
      <SyntaxHighlighter
        style={darcula}
        language={match[1]}
        PreTag="div"
        showLineNumbers={true}
        customStyle={{ borderRadius: '6px' }}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    )
  } else {
    return <code className={classname}>{children}</code>
  }
}

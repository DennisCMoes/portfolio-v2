import SyntaxHighlighter from 'react-syntax-highlighter'
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

type Props = {
  code: string
  language: string
}

export default function CodeBlockComponent({ code, language }: Props) {
  return (
    <SyntaxHighlighter
      style={gruvboxDark}
      language={language}
      customStyle={{ borderRadius: '6px' }}
      showLineNumbers={true}
    >
      {code}
    </SyntaxHighlighter>
  )
}

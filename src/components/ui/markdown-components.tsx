import SyntaxHighlighter from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'

type Props = {
  children: React.ReactNode
  elementType?: keyof JSX.IntrinsicElements
}

export const CustomElement = ({
  children,
  elementType: ElementType = 'h2',
  ...props
}: Props): JSX.Element => {
  return <ElementType {...props}>{children}</ElementType>
}

export const TableCell = ({ children, ...props }: any) => {
  const { isHeader, ...restOfProps } = props

  return (
    <td {...restOfProps} className="p-4">
      {children}
    </td>
  )
}

export const TableBody = ({ children, ...props }: any) => {
  const { isHeader, ...restOfProps } = props

  return (
    <tbody {...restOfProps} className="divide-y">
      {children}
    </tbody>
  )
}

export const TableHeadCell = ({ children, ...props }: any) => {
  const { isHeader, ...restOfProps } = props

  return (
    <td {...restOfProps} className="p-4">
      {children}
    </td>
  )
}

export const TableRow = ({ children, ...props }: any) => {
  const { isHeader, ...restOfProps } = props

  return (
    <tr {...restOfProps} className="hover:bg-gray-100">
      {children}
    </tr>
  )
}

export const TableHead = ({ children, ...props }: any) => (
  <thead
    {...props}
    className="text-xs text-gray-700 uppercase bg-gray-100 font-semibold"
  >
    {children}
  </thead>
)

export const Table = ({ children, ...props }: any) => (
  <table {...props} className="w-full text-sm text-center text-gray-500 mb-4">
    {children}
  </table>
)

export const UnorderedList = ({ children, ...props }: any): JSX.Element => {
  const { ordered, ...restOfProps } = props

  return (
    <ul {...restOfProps} className="list-inside list-disc">
      {children}
    </ul>
  )
}

export const OrderedList = ({ children, ...props }: any): JSX.Element => {
  const { ordered, ...restOfProps } = props

  return (
    <ol {...restOfProps} className="list-inside list-decimal">
      {children}
    </ol>
  )
}

export const Heading1 = ({ children, ...props }: any) => (
  <h1 {...props} className="text-4xl font-semibold mb-2 mt-8">
    {children}
  </h1>
)

export const Heading2 = ({ children, ...props }: any) => (
  <h2 {...props} className="text-2xl font-medium mb-2 mt-8">
    {children}
  </h2>
)

export const Heading3 = ({ children, ...props }: any) => (
  <h3 {...props} className="text-xl mb-2 mt-8">
    {children}
  </h3>
)

export const Image = ({ src, alt }: any): JSX.Element => {
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
}

export const Paragraph = ({ children }: any) => {
  // Render without P wrapper
  if (
    children &&
    children[0] &&
    children.length === 1 &&
    children[0].props &&
    children[0].props.src
  ) {
    return children
  }

  return <p>{children}</p>
}
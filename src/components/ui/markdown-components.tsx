import SyntaxHighlighter from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import JSXStyle from 'styled-jsx/style'

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

export const ListItem = ({ children, ...props }: any): JSX.Element => {
  return <li>{children}</li>
}

export const Heading1 = ({ children, ...props }: any) => (
  <h1 {...props} className="text-4xl font-semibold mb-2 mt-8">
    {children}
  </h1>
)

export const Heading2 = ({ children, ...props }: any) => (
  <h2 {...props} className="text-3xl font-semibold mb-2 mt-8">
    {children}
  </h2>
)

export const Heading3 = ({ children, ...props }: any) => (
  <h3 {...props} className="text-xl font-semibold mb-2 mt-8">
    {children}
  </h3>
)

export const Image = ({ src, alt }: any): JSX.Element => {
  const isMp4 = src.endsWith('.mp4')

  return (
    <div className="flex flex-col mb-4">
      {isMp4 ? (
        <>
          <div className="relative aspect-video overflow-hidden rounded-md">
            <video
              src={src!}
              style={{ objectFit: 'cover' }}
              autoPlay
              loop
              muted
            >
              Your browser does not support the video tag
            </video>
          </div>
          <div>{alt}</div>
        </>
      ) : (
        <>
          <div className="relative aspect-video overflow-hidden rounded-md">
            <Image
              src={src!}
              alt={alt!}
              sizes="100%"
              style={{ objectFit: 'cover' }}
              // fill
            />
          </div>
          <div>
            {alt} - {src}
          </div>
        </>
      )}
    </div>
  )
}

export const Paragraph = ({ children, ...props }: any) => {
  // console.log(props)

  // Render without P wrapper
  return <p className="text-xl my-4">{children}</p>
}

export const Link = ({ href, children }: any) => {
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
}

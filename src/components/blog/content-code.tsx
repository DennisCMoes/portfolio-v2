import { Prism } from '@mantine/prism'
import { useColorScheme } from '@mantine/hooks'

type Props = {
  code: string
}

export default function ContentCode({ code }: Props) {
  const colorScheme = useColorScheme()

  // TODO: Change the background color in lightmode to primary tailwind color
  return (
    <>
      <Prism
        withLineNumbers
        copyLabel="Copy code to clipboard"
        copiedLabel="Code copied to clipboard"
        language="typescript"
        colorScheme={colorScheme}
        radius="12px"
      >
        {code}
      </Prism>
    </>
  )
}

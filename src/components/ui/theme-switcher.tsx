import { useTheme } from 'next-themes'

enum Theme {
  SYSTEM = 'system',
  LIGHT = 'light',
  DARK = 'dark',
}

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col space-y-2">
      {Object.values(Theme).map((theme, index) => (
        <button onClick={() => setTheme(theme)} key={index}>
          {theme}
        </button>
      ))}
    </div>
  )
}

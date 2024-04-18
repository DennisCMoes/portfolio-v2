export default function Footer() {
  const getYear = (): number => new Date().getFullYear()

  return (
    <footer className="w-full">
      <div className="mx-auto max-w-2xl py-4">
        <p>{getYear()} | &copy; Dennis Moes. All rights reserved</p>
      </div>
    </footer>
  )
}

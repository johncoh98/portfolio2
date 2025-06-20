import DarkModeToggle from "./DarkModeToggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-black/80 border-b border-gray-200 dark:border-gray-700">
      <div className="container flex items-center justify-between h-16">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <DarkModeToggle />
      </div>
    </header>
  )
}
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b bg-white dark:bg-gray-950 dark:border-gray-800">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <div className="mr-8 pl-2">
          <Link href="/" className="text-gray-900 dark:text-gray-100 text-xl font-bold">ProjectName</Link>
        </div>
        <div className="flex gap-6">
          <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
            About
          </Link>
          <Link href="/team" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
            Team
          </Link>
          <Link href="/project" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
            Project
          </Link>
        </div>
        <div className="flex-1 flex justify-end pr-6">
          <Button variant="default">Contact Us</Button>
        </div>
      </div>
    </nav>
  )
} 
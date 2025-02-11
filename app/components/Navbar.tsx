import Link from 'next/link'
import { Button } from "@/components/ui/button"
import "./navbar.css"

export function Navbar() {
  return (
    <nav className="navbar z-50">
      <div className="navbar-container mx-auto">
        <div className="mr-8">
          <Link href="/" className="navbar-brand navbar-brand-large">Solar Canopy</Link>
        </div>
        <div className="flex gap-6">
          <Link href="/about" className="navbar-link">Project Overview</Link>
          <Link href="/team" className="navbar-link">Team</Link>
          <Link href="/project" className="navbar-link">Next Steps</Link>
        </div>
        <div className="ml-auto">
          <Button asChild variant="default">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
} 
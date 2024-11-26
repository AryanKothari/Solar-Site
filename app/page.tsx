import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-24 md:py-32 lg:py-40 border-b">
        <div className="container flex flex-col items-center text-center gap-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Engineering Innovation
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Discover how we&apos;re solving real-world problems through innovative engineering solutions.
          </p>
          <div className="flex gap-4 mt-6">
            <Button size="lg" asChild>
              <Link href="/project">View Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/team">Meet the Team</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="w-full py-24 bg-muted">
        <div className="container grid md:grid-cols-3 gap-8">
          {/* Add feature highlights here */}
        </div>
      </section>
    </div>
  )
}

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { RoadmapPreview } from "@/components/roadmap-preview"
import { TopicsIndex } from "@/components/topics-index"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Hero />
        <Features />
        <RoadmapPreview />
        <TopicsIndex />
      </main>
      <Footer />
    </div>
  )
}

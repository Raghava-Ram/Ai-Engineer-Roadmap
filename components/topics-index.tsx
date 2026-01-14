"use client"

import Link from "next/link"
import { topicsIndex } from "@/lib/roadmap-data"

export function TopicsIndex() {
  const sortedTopics = Object.entries(topicsIndex).sort((a, b) => a[0].localeCompare(b[0]))

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">A-Z Topic Index</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Jump directly to any topic in the roadmap.</p>
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="flex flex-wrap gap-3">
            {sortedTopics.map(([topic, weeks]) => (
              <Link
                key={topic}
                href={`/roadmap?search=${encodeURIComponent(topic)}`}
                className="group flex items-center gap-2 glass glass-hover px-4 py-2 rounded-lg transition-colors"
              >
                <span className="capitalize font-medium group-hover:text-primary transition-colors">{topic}</span>
                <span className="text-xs text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                  {weeks.length} {weeks.length === 1 ? "week" : "weeks"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

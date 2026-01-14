"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { weeks } from "@/lib/roadmap-data"
import { useProgressStore } from "@/lib/progress-store"
import { cn } from "@/lib/utils"

export function RoadmapPreview() {
  const { completedWeeks } = useProgressStore()
  const previewWeeks = weeks.slice(0, 6)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Week-by-Week Roadmap</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured learning path from Python basics to advanced Gen AI and cloud deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {previewWeeks.map((week, index) => {
            const isCompleted = completedWeeks.includes(week.week)
            return (
              <Link
                key={week.week}
                href={`/roadmap#week-${week.week}`}
                className={cn(
                  "glass-card glass-hover rounded-xl p-5 transition-all duration-300",
                  isCompleted && "border-accent/50",
                )}
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={cn(
                      "text-xs font-semibold px-2 py-1 rounded-md",
                      isCompleted ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary",
                    )}
                  >
                    Week {week.week}
                  </span>
                  {isCompleted && <CheckCircle2 className="w-5 h-5 text-accent" />}
                </div>
                <h3 className="font-semibold mb-2 line-clamp-1">{week.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{week.focus}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {week.topics.slice(0, 2).map((topic, i) => (
                    <span key={i} className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-0.5 rounded">
                      {topic.split(" ").slice(0, 2).join(" ")}
                    </span>
                  ))}
                  {week.topics.length > 2 && (
                    <span className="text-xs text-muted-foreground">+{week.topics.length - 2} more</span>
                  )}
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/roadmap">
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              View Full Roadmap
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

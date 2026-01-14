"use client"

import { useProgressStore } from "@/lib/progress-store"
import { weeks } from "@/lib/roadmap-data"

export function ProgressBar() {
  const { completedWeeks } = useProgressStore()
  const progress = Math.round((completedWeeks.length / weeks.length) * 100)

  return (
    <div className="glass-card rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">Overall Progress</span>
        <span className="text-sm text-muted-foreground">
          {completedWeeks.length}/{weeks.length} weeks
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2">{progress}% complete</p>
    </div>
  )
}

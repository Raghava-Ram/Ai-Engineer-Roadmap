"use client"

import { useProgressStore } from "@/lib/progress-store"
import type { ChecklistCategory } from "@/lib/types"

interface ChecklistProgressProps {
  categories: ChecklistCategory[]
  title: string
}

export function ChecklistProgress({ categories, title }: ChecklistProgressProps) {
  const { completedChecklistItems } = useProgressStore()

  const totalItems = categories.reduce((acc, cat) => acc + cat.items.length, 0)
  const completedItems = categories.reduce(
    (acc, cat) => acc + cat.items.filter((item) => completedChecklistItems.includes(item.id)).length,
    0,
  )
  const progress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0

  return (
    <div className="glass-card rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-sm text-muted-foreground">
          {completedItems}/{totalItems} items
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

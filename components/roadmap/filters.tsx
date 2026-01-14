"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type FilterOption = "all" | "completed" | "in-progress" | "not-started"

interface FiltersProps {
  activeFilter: FilterOption
  onFilterChange: (filter: FilterOption) => void
}

const filterOptions: { value: FilterOption; label: string }[] = [
  { value: "all", label: "All Weeks" },
  { value: "completed", label: "Completed" },
  { value: "in-progress", label: "In Progress" },
  { value: "not-started", label: "Not Started" },
]

export function Filters({ activeFilter, onFilterChange }: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filterOptions.map((option) => (
        <Button
          key={option.value}
          variant="ghost"
          size="sm"
          onClick={() => onFilterChange(option.value)}
          className={cn(
            "transition-colors",
            activeFilter === option.value
              ? "bg-primary/20 text-primary"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {option.label}
        </Button>
      ))}
    </div>
  )
}

export type { FilterOption }

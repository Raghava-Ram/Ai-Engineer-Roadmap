"use client"

import type React from "react"

import { useState } from "react"
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Circle,
  ExternalLink,
  Play,
  BookOpen,
  FileText,
  Code,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import type { Week, Resource } from "@/lib/types"
import { useProgressStore } from "@/lib/progress-store"
import { cn } from "@/lib/utils"

interface WeekCardProps {
  week: Week
  defaultExpanded?: boolean
}

const resourceIcons: Record<Resource["type"], React.ComponentType<{ className?: string }>> = {
  video: Play,
  course: BookOpen,
  article: FileText,
  project: Code,
  playlist: Play,
  tool: Wrench,
}

export function WeekCard({ week, defaultExpanded = false }: WeekCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const { completedWeeks, completedAssignments, toggleWeek, toggleAssignment } = useProgressStore()

  const isWeekCompleted = completedWeeks.includes(week.week)
  const weekAssignments = completedAssignments[week.week] || []
  const progress =
    week.assignments.length > 0 ? Math.round((weekAssignments.length / week.assignments.length) * 100) : 0

  return (
    <div
      id={`week-${week.week}`}
      className={cn(
        "glass-card rounded-xl transition-all duration-300",
        isExpanded && "ring-1 ring-primary/30",
        isWeekCompleted && "border-accent/30",
      )}
    >
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-5 flex items-start gap-4 text-left"
        aria-expanded={isExpanded}
      >
        <div className="flex-shrink-0 mt-1">
          {isWeekCompleted ? (
            <CheckCircle2 className="w-6 h-6 text-accent" />
          ) : (
            <Circle className="w-6 h-6 text-muted-foreground" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <span
              className={cn(
                "text-xs font-semibold px-2 py-1 rounded-md",
                isWeekCompleted ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary",
              )}
            >
              Week {week.week}
            </span>
            {progress > 0 && !isWeekCompleted && (
              <span className="text-xs text-muted-foreground">{progress}% complete</span>
            )}
          </div>
          <h3 className="font-semibold text-lg mb-1">{week.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{week.focus}</p>

          {/* Topics preview when collapsed */}
          {!isExpanded && (
            <div className="mt-3 flex flex-wrap gap-1">
              {week.topics.slice(0, 3).map((topic, i) => (
                <span key={i} className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-0.5 rounded">
                  {topic.length > 25 ? topic.slice(0, 25) + "..." : topic}
                </span>
              ))}
              {week.topics.length > 3 && (
                <span className="text-xs text-muted-foreground">+{week.topics.length - 3} more</span>
              )}
            </div>
          )}
        </div>

        <div className="flex-shrink-0">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-5 pb-5 space-y-6">
          {/* Topics */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Topics</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {week.topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          {week.resources.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Resources</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {week.resources.map((resource, i) => {
                  const Icon = resourceIcons[resource.type] || ExternalLink
                  return (
                    <a
                      key={i}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 glass glass-hover p-3 rounded-lg group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium line-clamp-1 group-hover:text-primary transition-colors">
                          {resource.title}
                        </p>
                        <p className="text-xs text-muted-foreground capitalize">{resource.type}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </a>
                  )
                })}
              </div>
            </div>
          )}

          {/* Assignments */}
          {week.assignments.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Assignments</h4>
              <div className="space-y-2">
                {week.assignments.map((assignment, i) => {
                  const isChecked = weekAssignments.includes(assignment)
                  return (
                    <label
                      key={i}
                      className={cn(
                        "flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors",
                        isChecked ? "bg-accent/10" : "glass glass-hover",
                      )}
                    >
                      <Checkbox
                        checked={isChecked}
                        onCheckedChange={() => toggleAssignment(week.week, assignment)}
                        className="mt-0.5"
                      />
                      <span className={cn("text-sm", isChecked && "line-through text-muted-foreground")}>
                        {assignment}
                      </span>
                    </label>
                  )
                })}
              </div>
            </div>
          )}

          {/* Core Skills */}
          {week.coreSkills && week.coreSkills.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Core/Soft Skills
              </h4>
              <ul className="space-y-2">
                {week.coreSkills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Motivation */}
          {week.motivation && week.motivation.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Motivation</h4>
              <ul className="space-y-2">
                {week.motivation.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mark Complete Button */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <Button
              variant={isWeekCompleted ? "outline" : "default"}
              size="sm"
              onClick={() => toggleWeek(week.week)}
              className={cn(isWeekCompleted && "bg-transparent")}
            >
              {isWeekCompleted ? "Mark Incomplete" : "Mark Week Complete"}
            </Button>
            <span className="text-xs text-muted-foreground">Content source: Codebasics.io</span>
          </div>
        </div>
      )}
    </div>
  )
}

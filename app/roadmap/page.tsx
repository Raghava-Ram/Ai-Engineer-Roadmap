"use client"

import { useState, useMemo, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Download, Upload, RotateCcw } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WeekCard } from "@/components/roadmap/week-card"
import { SearchBar } from "@/components/roadmap/search-bar"
import { ProgressBar } from "@/components/roadmap/progress-bar"
import { Filters, type FilterOption } from "@/components/roadmap/filters"
import { Button } from "@/components/ui/button"
import { weeks, roadmapMeta, topicsIndex } from "@/lib/roadmap-data"
import { useProgressStore } from "@/lib/progress-store"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

function RoadmapContent() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "")
  const [filter, setFilter] = useState<FilterOption>("all")
  const [importData, setImportData] = useState("")
  const [importDialogOpen, setImportDialogOpen] = useState(false)

  const { completedWeeks, completedAssignments, exportProgress, importProgress, resetProgress } = useProgressStore()

  // Handle search param on mount
  useEffect(() => {
    const search = searchParams.get("search")
    if (search) {
      setSearchQuery(search)
    }
  }, [searchParams])

  // Filter weeks based on search and filter
  const filteredWeeks = useMemo(() => {
    let result = weeks

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()

      // Check if query matches a topic in the index
      const matchingTopic = Object.keys(topicsIndex).find((topic) => topic.toLowerCase().includes(query))
      if (matchingTopic) {
        const weekNumbers = topicsIndex[matchingTopic]
        result = result.filter((w) => weekNumbers.includes(w.week))
      } else {
        // General search
        result = result.filter(
          (w) =>
            w.title.toLowerCase().includes(query) ||
            w.focus.toLowerCase().includes(query) ||
            w.topics.some((t) => t.toLowerCase().includes(query)) ||
            w.resources.some((r) => r.title.toLowerCase().includes(query)),
        )
      }
    }

    // Apply status filter
    if (filter !== "all") {
      result = result.filter((w) => {
        const isCompleted = completedWeeks.includes(w.week)
        const hasProgress = (completedAssignments[w.week]?.length || 0) > 0

        if (filter === "completed") return isCompleted
        if (filter === "in-progress") return !isCompleted && hasProgress
        if (filter === "not-started") return !isCompleted && !hasProgress
        return true
      })
    }

    return result
  }, [searchQuery, filter, completedWeeks, completedAssignments])

  const handleExport = () => {
    const data = exportProgress()
    const blob = new Blob([data], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "ai-roadmap-progress.json"
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = () => {
    if (importData) {
      importProgress(importData)
      setImportData("")
      setImportDialogOpen(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{roadmapMeta.title}</h1>
            <p className="text-muted-foreground">{roadmapMeta.duration}</p>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <div className="lg:col-span-3 space-y-4">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Filters activeFilter={filter} onFilterChange={setFilter} />
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={handleExport} className="gap-2 bg-transparent">
                    <Download className="w-4 h-4" />
                    Export
                  </Button>
                  <Dialog open={importDialogOpen} onOpenChange={setImportDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                        <Upload className="w-4 h-4" />
                        Import
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Import Progress</DialogTitle>
                        <DialogDescription>
                          Paste your exported progress JSON to restore your progress.
                        </DialogDescription>
                      </DialogHeader>
                      <Textarea
                        value={importData}
                        onChange={(e) => setImportData(e.target.value)}
                        placeholder='{"completedWeeks":[],...}'
                        rows={6}
                      />
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setImportDialogOpen(false)} className="bg-transparent">
                          Cancel
                        </Button>
                        <Button onClick={handleImport}>Import</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2 text-destructive bg-transparent">
                        <RotateCcw className="w-4 h-4" />
                        Reset
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Reset Progress</DialogTitle>
                        <DialogDescription>
                          This will clear all your progress. This action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button variant="outline" className="bg-transparent">
                          Cancel
                        </Button>
                        <Button variant="destructive" onClick={resetProgress}>
                          Reset All Progress
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
            <div>
              <ProgressBar />
            </div>
          </div>

          {/* Results count */}
          {searchQuery && (
            <p className="text-sm text-muted-foreground mb-4">
              Showing {filteredWeeks.length} of {weeks.length} weeks
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          )}

          {/* Week Cards */}
          <div className="space-y-4">
            {filteredWeeks.length > 0 ? (
              filteredWeeks.map((week) => <WeekCard key={week.week} week={week} />)
            ) : (
              <div className="glass-card rounded-xl p-12 text-center">
                <p className="text-muted-foreground">No weeks found matching your criteria.</p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchQuery("")
                    setFilter("all")
                  }}
                  className="mt-2"
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>

          {/* Source attribution */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Content source:{" "}
              <a
                href="https://codebasics.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Codebasics.io AI Engineer Roadmap 2026
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function RoadmapPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading roadmap...</div>
        </div>
      }
    >
      <RoadmapContent />
    </Suspense>
  )
}

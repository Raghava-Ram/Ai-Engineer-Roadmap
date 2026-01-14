"use client"

import type React from "react"
import { Suspense } from "react"
import { useState, useMemo } from "react"
import { ExternalLink, Play, BookOpen, FileText, Code, Wrench, Download, Search, File } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { weeks } from "@/lib/roadmap-data"
import type { Resource } from "@/lib/types"
import { cn } from "@/lib/utils"

const resourceIcons: Record<Resource["type"], React.ComponentType<{ className?: string }>> = {
  video: Play,
  course: BookOpen,
  article: FileText,
  project: Code,
  playlist: Play,
  tool: Wrench,
  pdf: File,
}

const resourceColors: Record<Resource["type"], string> = {
  video: "bg-red-500/20 text-red-400",
  course: "bg-blue-500/20 text-blue-400",
  article: "bg-green-500/20 text-green-400",
  project: "bg-purple-500/20 text-purple-400",
  playlist: "bg-orange-500/20 text-orange-400",
  tool: "bg-cyan-500/20 text-cyan-400",
  pdf: "bg-pink-500/20 text-pink-400",
}

type ResourceType = Resource["type"] | "all"

function ResourcesContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState<ResourceType>("all")

  // Collect all resources with their week info
  const allResources = useMemo(() => {
    const resources: Array<Resource & { weekNumber: number; weekTitle: string }> = []
    weeks.forEach((week) => {
      week.resources.forEach((resource) => {
        resources.push({
          ...resource,
          weekNumber: week.week,
          weekTitle: week.title,
        })
      })
    })
    return resources
  }, [])

  // Get unique resource types
  const resourceTypes: ResourceType[] = ["all", "video", "playlist", "course", "article", "project", "tool"]

  // Filter resources
  const filteredResources = useMemo(() => {
    return allResources.filter((resource) => {
      const matchesSearch =
        searchQuery === "" ||
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.weekTitle.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesType = typeFilter === "all" || resource.type === typeFilter
      return matchesSearch && matchesType
    })
  }, [allResources, searchQuery, typeFilter])

  // Group by type for stats
  const resourceStats = useMemo(() => {
    const stats: Record<string, number> = { all: allResources.length }
    allResources.forEach((r) => {
      stats[r.type] = (stats[r.type] || 0) + 1
    })
    return stats
  }, [allResources])

  // PDF resources
  const pdfResources = [
    {
      title: "AI Engineer Roadmap 2026",
      description: "Complete roadmap for becoming an AI Engineer in 2026",
      path: "/AI_Engineer_Roadmap_2026.pdf",
      filename: "AI_Engineer_Roadmap_2026.pdf"
    },
    {
      title: "LinkedIn Optimization Checklist",
      description: "Step-by-step guide to optimize your LinkedIn profile for AI/ML jobs",
      path: "/LinkedIn_Checklist.pdf",
      filename: "LinkedIn_Optimization_Checklist.pdf"
    },
    {
      title: "Resume Checklist",
      description: "Essential elements for an AI/ML engineer's resume",
      path: "/Resume_Checklist.pdf",
      filename: "AI_ML_Resume_Checklist.pdf"
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Learning Resources</h1>
            <p className="text-muted-foreground">
              All free learning resources from the AI Engineer Roadmap in one place.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources..."
                className="pl-10 bg-secondary/50 border-border/50"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {resourceTypes.map((type) => (
                <Button
                  key={type}
                  variant="ghost"
                  size="sm"
                  onClick={() => setTypeFilter(type)}
                  className={cn(
                    "gap-2 transition-colors",
                    typeFilter === type ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {type !== "all" &&
                    (() => {
                      const Icon = resourceIcons[type as Resource["type"]]
                      return <Icon className="w-4 h-4" />
                    })()}
                  <span className="capitalize">{type}</span>
                  <span className="text-xs opacity-70">({resourceStats[type] || 0})</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredResources.length} of {allResources.length} resources
          </p>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredResources.map((resource, index) => {
              const Icon = resourceIcons[resource.type]
              return (
                <a
                  key={`${resource.url}-${index}`}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card glass-hover rounded-xl p-5 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                        resourceColors[resource.type],
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">Week {resource.weekNumber}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1">{resource.weekTitle}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>
                </a>
              )
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="glass-card rounded-xl p-12 text-center">
              <p className="text-muted-foreground">No resources found matching your criteria.</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchQuery("")
                  setTypeFilter("all")
                }}
                className="mt-2"
              >
                Clear filters
              </Button>
            </div>
          )}

          {/* Download Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Download PDFs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium">AI Engineer Roadmap</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Complete 32-week roadmap with all resources</p>
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>

              <div className="glass-card rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0077B5]/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#0077B5]" />
                  </div>
                  <h3 className="font-medium">LinkedIn Checklist</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">17-item checklist for profile optimization</p>
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>

              <div className="glass-card rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-medium">Resume Checklist</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">18-item ATS-friendly resume checklist</p>
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>
            </div>
          </section>

          {/* Source Attribution */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              All resources curated by{" "}
              <a
                href="https://codebasics.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Codebasics.io
              </a>
            </p>
          </div>

          {/* PDF Resources Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Downloadable Resources</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pdfResources.map((pdf) => (
                <div key={pdf.path} className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-card">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${resourceColors.pdf} h-fit`}>
                      <File className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{pdf.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{pdf.description}</p>
                      <a
                        href={pdf.path}
                        download={pdf.filename}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function ResourcesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading resources...</div>
        </div>
      }
    >
      <ResourcesContent />
    </Suspense>
  )
}

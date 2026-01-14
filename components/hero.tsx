"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, CheckCircle, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { roadmapMeta } from "@/lib/roadmap-data"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-muted-foreground">Updated for 2026</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            <span className="gradient-text">{roadmapMeta.title}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {roadmapMeta.description} Based on analysis of hundreds of real AI job postings.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>{roadmapMeta.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>{roadmapMeta.totalWeeks} Weeks</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4 text-primary" />
              <span>For Freshers & Experienced</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/roadmap">
              <Button size="lg" className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90">
                Start Roadmap
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/checklists/linkedin">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 bg-transparent">
                <CheckCircle className="w-4 h-4" />
                LinkedIn Checklist
              </Button>
            </Link>
          </div>

          {/* Quick links */}
          <div className="pt-8 flex flex-wrap justify-center gap-3">
            {["Python", "Machine Learning", "Deep Learning", "Gen AI", "LLM", "Cloud"].map((tag) => (
              <Link
                key={tag}
                href={`/roadmap?search=${tag.toLowerCase()}`}
                className="glass-card glass-hover px-3 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

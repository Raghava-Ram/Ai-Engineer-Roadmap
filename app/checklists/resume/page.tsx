"use client"

import { useState } from "react"
import { Download, FileText, Twitter, Linkedin, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChecklistItem } from "@/components/checklists/checklist-item"
import { ChecklistProgress } from "@/components/checklists/checklist-progress"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { resumeChecklist } from "@/lib/checklist-data"
import { useProgressStore } from "@/lib/progress-store"

export default function ResumeChecklistPage() {
  const { completedChecklistItems } = useProgressStore()
  const [headlinePreview, setHeadlinePreview] = useState({
    role: "AI Engineer",
    company: "TechCorp",
    skill1: "Machine Learning",
    skill2: "Gen AI",
    achievement: "Building RAG systems",
  })

  const totalItems = resumeChecklist.reduce((acc, cat) => acc + cat.items.length, 0)
  const completedItems = resumeChecklist.reduce(
    (acc, cat) => acc + cat.items.filter((item) => completedChecklistItems.includes(item.id)).length,
    0,
  )

  const generatedHeadline = `${headlinePreview.role} at ${headlinePreview.company} | ${headlinePreview.skill1} | ${headlinePreview.skill2} | ${headlinePreview.achievement}`

  const handleShare = (platform: "linkedin" | "twitter") => {
    const text = `I've completed ${completedItems}/${totalItems} items on my resume optimization checklist! Ready for AI Engineer roles. #AIEngineer #CareerGrowth`
    const url = window.location.href

    if (platform === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        "_blank",
        "noopener,noreferrer",
      )
    } else {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        "_blank",
        "noopener,noreferrer",
      )
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">Resume Checklist</h1>
                <p className="text-muted-foreground">Build an ATS-friendly resume for AI Engineer positions</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {resumeChecklist.map((category) => (
                <section key={category.category}>
                  <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-xl font-semibold">{category.category}</h2>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                      {category.items.filter((item) => completedChecklistItems.includes(item.id)).length}/
                      {category.items.length}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <ChecklistItem key={item.id} item={item} />
                    ))}
                  </div>
                </section>
              ))}

              {/* Headline Builder */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Headline Builder</h2>
                <div className="glass-card rounded-xl p-6 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Build your resume headline using this interactive tool.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Input
                        id="role"
                        value={headlinePreview.role}
                        onChange={(e) => setHeadlinePreview({ ...headlinePreview, role: e.target.value })}
                        placeholder="AI Engineer"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={headlinePreview.company}
                        onChange={(e) => setHeadlinePreview({ ...headlinePreview, company: e.target.value })}
                        placeholder="TechCorp"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="skill1">Key Skill 1</Label>
                      <Input
                        id="skill1"
                        value={headlinePreview.skill1}
                        onChange={(e) => setHeadlinePreview({ ...headlinePreview, skill1: e.target.value })}
                        placeholder="Machine Learning"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="skill2">Key Skill 2</Label>
                      <Input
                        id="skill2"
                        value={headlinePreview.skill2}
                        onChange={(e) => setHeadlinePreview({ ...headlinePreview, skill2: e.target.value })}
                        placeholder="Gen AI"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="achievement">Achievement/Interest</Label>
                      <Input
                        id="achievement"
                        value={headlinePreview.achievement}
                        onChange={(e) => setHeadlinePreview({ ...headlinePreview, achievement: e.target.value })}
                        placeholder="Building RAG systems"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <Label className="text-muted-foreground text-sm">Preview</Label>
                    <p className="mt-2 p-3 bg-secondary/30 rounded-lg font-medium">{generatedHeadline}</p>
                  </div>
                </div>
              </section>

              {/* Source Attribution */}
              <div className="text-center pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Content source:{" "}
                  <a
                    href="https://codebasics.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Codebasics.io Resume Checklist
                  </a>
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <ChecklistProgress categories={resumeChecklist} title="Resume Progress" />

              <div className="glass-card rounded-xl p-4 space-y-3">
                <h3 className="font-medium">Actions</h3>
                <Button variant="outline" className="w-full gap-2 justify-start bg-transparent">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
                <Button
                  variant="outline"
                  className="w-full gap-2 justify-start bg-transparent"
                  onClick={() => handleShare("linkedin")}
                >
                  <Linkedin className="w-4 h-4" />
                  Share on LinkedIn
                </Button>
                <Button
                  variant="outline"
                  className="w-full gap-2 justify-start bg-transparent"
                  onClick={() => handleShare("twitter")}
                >
                  <Twitter className="w-4 h-4" />
                  Share on Twitter
                </Button>
              </div>

              <div className="glass-card rounded-xl p-4 space-y-3">
                <h3 className="font-medium">Quick Tips</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Use ATS-friendly format
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Keep to 1-2 pages max
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Quantify achievements
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Name file: Firstname_Lastname_Position
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-4">
                <h3 className="font-medium mb-2">ATS Score Check</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Use Resume Worded to check your ATS score before applying.
                </p>
                <a
                  href="https://resumeworded.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Check your resume →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

"use client"

import { Download, Linkedin, Twitter, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChecklistItem } from "@/components/checklists/checklist-item"
import { ChecklistProgress } from "@/components/checklists/checklist-progress"
import { TemplateCard } from "@/components/checklists/template-card"
import { Button } from "@/components/ui/button"
import { linkedinChecklist, linkedinTemplates } from "@/lib/checklist-data"
import { useProgressStore } from "@/lib/progress-store"

export default function LinkedInChecklistPage() {
  const { completedChecklistItems } = useProgressStore()

  const totalItems = linkedinChecklist.reduce((acc, cat) => acc + cat.items.length, 0)
  const completedItems = linkedinChecklist.reduce(
    (acc, cat) => acc + cat.items.filter((item) => completedChecklistItems.includes(item.id)).length,
    0,
  )

  const handleShare = (platform: "linkedin" | "twitter") => {
    const text = `I've completed ${completedItems}/${totalItems} items on my LinkedIn profile optimization checklist! 🚀 #AIEngineer #CareerGrowth`
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
              <div className="w-12 h-12 rounded-xl bg-[#0077B5]/20 flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-[#0077B5]" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">LinkedIn Checklist</h1>
                <p className="text-muted-foreground">Optimize your LinkedIn profile for AI Engineer roles</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {linkedinChecklist.map((category) => (
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

              {/* Templates Section */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Templates</h2>
                <div className="space-y-4">
                  <TemplateCard title="Headline Formula" template={linkedinTemplates.headline} />
                  <TemplateCard title="About Section Template" template={linkedinTemplates.about} />
                  <TemplateCard title="Connection Request Template" template={linkedinTemplates.connectionRequest} />
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
                    Codebasics.io LinkedIn Checklist
                  </a>
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <ChecklistProgress categories={linkedinChecklist} title="LinkedIn Progress" />

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
                    Post at least twice a week
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Make one meaningful comment daily
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Online presence is the new resume
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

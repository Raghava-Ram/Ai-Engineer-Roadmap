import { BookOpen, CheckSquare, BarChart3, Download, Search, Share2 } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "32-Week Curriculum",
    description: "Comprehensive week-by-week learning path from basics to advanced AI topics",
  },
  {
    icon: CheckSquare,
    title: "Interactive Checklists",
    description: "LinkedIn and Resume checklists to build your professional presence",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Track your learning progress and pick up where you left off",
  },
  {
    icon: Search,
    title: "Search & Filter",
    description: "Quickly find topics, resources, and weeks with powerful search",
  },
  {
    icon: Download,
    title: "PDF Downloads",
    description: "Download the complete roadmap and checklists for offline access",
  },
  {
    icon: Share2,
    title: "Share Progress",
    description: "Export and share your progress with mentors or on social media",
  },
]

export function Features() {
  return (
    <section className="py-20 glass border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and resources to guide your AI engineering journey from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="glass-card glass-hover rounded-xl p-6 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

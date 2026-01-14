import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookOpen, Target, Users, FileText, ExternalLink } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">About This Roadmap</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive guide to becoming an AI Engineer, based on real industry analysis and practical
              experience.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Origin */}
            <section className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Origin & Methodology</h2>
              </div>
              <div className="text-muted-foreground space-y-4">
                <p>
                  This roadmap is designed based on the analysis of hundreds of AI jobs and practical experience working
                  on AI projects at AtliQ Technologies, where they have worked on 25+ AI projects in the last two years.
                  More than 90% of their clients are SMEs (Small to medium size enterprises) based in the USA.
                </p>
                <p>
                  The curriculum covers everything from Python basics to advanced Gen AI and cloud deployment,
                  structured into a practical 8-month journey (4 hours of study every day, 6 days a week).
                </p>
              </div>
            </section>

            {/* Who is this for */}
            <section className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-semibold">Who Is This For?</h2>
              </div>
              <div className="text-muted-foreground space-y-4">
                <p>This roadmap is valid for both freshers and experienced professionals looking to:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span>Become an AI Engineer, ML Engineer, or Gen AI Engineer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span>Transition into AI from software development or data science</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span>Build practical skills with real-world projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span>Develop both technical and soft skills needed for the industry</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Content Sources */}
            <section className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Content Sources</h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">All content on this website is derived from the following PDFs:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="glass p-4 rounded-lg">
                    <h3 className="font-medium mb-1">AI Engineer Roadmap 2026</h3>
                    <p className="text-xs text-muted-foreground">32-week curriculum</p>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <h3 className="font-medium mb-1">LinkedIn Checklist</h3>
                    <p className="text-xs text-muted-foreground">17 profile items</p>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <h3 className="font-medium mb-1">Resume Checklist</h3>
                    <p className="text-xs text-muted-foreground">18 resume items</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Learning Approach */}
            <section className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-semibold">Learning Approach</h2>
              </div>
              <div className="text-muted-foreground space-y-4">
                <p>
                  The roadmap follows the mindset of an <strong>expert handyman</strong>: someone who has strong
                  fundamentals, wide knowledge of tools, and the judgment to pick the right tool at the right time.
                </p>
                <p>Key principles:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span>Technical skills and soft skills are equally important</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span>Build online credibility from day 1 (LinkedIn is your "busy street")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span>Use ChatGPT as your personal tutor when you have questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span>Practice through real projects and contribute to open source</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* External Links */}
            <section className="glass-card rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://codebasics.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass glass-hover p-4 rounded-lg group"
                >
                  <span className="font-medium group-hover:text-primary transition-colors">Codebasics.io</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=zwUSZD3t_BU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass glass-hover p-4 rounded-lg group"
                >
                  <span className="font-medium group-hover:text-primary transition-colors">Full YouTube Video</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                </a>
                <a
                  href="https://codebasics.io/survey/find-your-match-ds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass glass-hover p-4 rounded-lg group"
                >
                  <span className="font-medium group-hover:text-primary transition-colors">Suitability Assessment</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                </a>
                <a
                  href="https://www.atliq.com/case-studies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass glass-hover p-4 rounded-lg group"
                >
                  <span className="font-medium group-hover:text-primary transition-colors">AI Case Studies</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

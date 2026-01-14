import Link from "next/link"
import { Linkedin, FileText, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ChecklistsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Career Checklists</h1>
            <p className="text-muted-foreground">
              Optimize your professional presence with these comprehensive checklists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              href="/checklists/linkedin"
              className="glass-card glass-hover rounded-xl p-6 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0077B5]/20 flex items-center justify-center mb-4">
                <Linkedin className="w-7 h-7 text-[#0077B5]" />
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                LinkedIn Checklist
              </h2>
              <p className="text-muted-foreground mb-4">
                17 essential items to optimize your LinkedIn profile for maximum visibility and professional impact.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <span>View checklist</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/checklists/resume"
              className="glass-card glass-hover rounded-xl p-6 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Resume Checklist
              </h2>
              <p className="text-muted-foreground mb-4">
                18 items to ensure your resume is ATS-friendly and ready for AI Engineer applications.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <span>View checklist</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

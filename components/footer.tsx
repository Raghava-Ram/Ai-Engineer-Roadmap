import Link from "next/link"
import { FileText, Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="glass border-t border-border/50 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">AI</span>
              </div>
              <span className="font-semibold">AI Engineer Roadmap</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your comprehensive guide to becoming an AI Engineer in 2026.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/roadmap" className="hover:text-foreground transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/checklists/linkedin" className="hover:text-foreground transition-colors">
                  LinkedIn Checklist
                </Link>
              </li>
              <li>
                <Link href="/checklists/resume" className="hover:text-foreground transition-colors">
                  Resume Checklist
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-foreground transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Downloads</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>AI Roadmap PDF</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>LinkedIn Checklist PDF</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Resume Checklist PDF</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Content source:{" "}
            <a
              href="https://codebasics.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Codebasics.io
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AI Engineer Roadmap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

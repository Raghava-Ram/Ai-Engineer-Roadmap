"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TemplateCardProps {
  title: string
  template: string
}

export function TemplateCard({ title, template }: TemplateCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(template)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="glass-card rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-medium">{title}</h4>
        <Button variant="ghost" size="sm" onClick={handleCopy} className="gap-2 text-sm">
          {copied ? (
            <>
              <Check className="w-4 h-4 text-accent" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy Template
            </>
          )}
        </Button>
      </div>
      <pre className="text-sm text-muted-foreground whitespace-pre-wrap bg-secondary/30 p-3 rounded-lg overflow-x-auto">
        {template}
      </pre>
    </div>
  )
}

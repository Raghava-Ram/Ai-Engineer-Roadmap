"use client"

import { useState } from "react"
import { Check, Copy, HelpCircle } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { ChecklistItem as ChecklistItemType } from "@/lib/types"
import { useProgressStore } from "@/lib/progress-store"
import { cn } from "@/lib/utils"

interface ChecklistItemProps {
  item: ChecklistItemType
}

export function ChecklistItem({ item }: ChecklistItemProps) {
  const [copied, setCopied] = useState(false)
  const { completedChecklistItems, toggleChecklistItem } = useProgressStore()
  const isChecked = completedChecklistItems.includes(item.id)

  const handleCopy = () => {
    navigator.clipboard.writeText(item.description)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={cn(
        "glass-card rounded-xl p-4 transition-all duration-300",
        isChecked && "bg-accent/5 border-accent/30",
      )}
    >
      <div className="flex items-start gap-3">
        <Checkbox
          id={item.id}
          checked={isChecked}
          onCheckedChange={() => toggleChecklistItem(item.id)}
          className="mt-1"
        />
        <div className="flex-1 min-w-0">
          <label
            htmlFor={item.id}
            className={cn("font-medium cursor-pointer block mb-1", isChecked && "line-through text-muted-foreground")}
          >
            {item.title}
          </label>
          <p className="text-sm text-muted-foreground mb-2">{item.description}</p>

          {item.tips && item.tips.length > 0 && (
            <div className="flex items-start gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-xs text-muted-foreground">
                      <HelpCircle className="w-3.5 h-3.5" />
                      Tips
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-xs">
                    <ul className="text-sm space-y-1">
                      {item.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-7 gap-1.5 text-xs text-muted-foreground"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-accent" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

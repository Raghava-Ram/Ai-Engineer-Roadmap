export type ResourceType = "video" | "course" | "article" | "project" | "playlist" | "tool" | "pdf"

export interface Resource {
  type: ResourceType
  title: string
  url: string
}

export interface Week {
  week: number
  title: string
  focus: string
  topics: string[]
  resources: Resource[]
  assignments: string[]
  coreSkills?: string[]
  motivation?: string[]
}

export interface ChecklistItem {
  id: string
  title: string
  description: string
  tips?: string[]
}

export interface ChecklistCategory {
  category: string
  items: ChecklistItem[]
}

export interface TopicIndex {
  [topic: string]: number[]
}

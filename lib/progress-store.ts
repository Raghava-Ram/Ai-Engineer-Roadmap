"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface ProgressState {
  completedWeeks: number[]
  completedAssignments: Record<number, string[]>
  completedChecklistItems: string[]
  toggleWeek: (week: number) => void
  toggleAssignment: (week: number, assignment: string) => void
  toggleChecklistItem: (itemId: string) => void
  getWeekProgress: (week: number, totalAssignments: number) => number
  getTotalProgress: () => number
  exportProgress: () => string
  importProgress: (data: string) => void
  resetProgress: () => void
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedWeeks: [],
      completedAssignments: {},
      completedChecklistItems: [],

      toggleWeek: (week) =>
        set((state) => ({
          completedWeeks: state.completedWeeks.includes(week)
            ? state.completedWeeks.filter((w) => w !== week)
            : [...state.completedWeeks, week],
        })),

      toggleAssignment: (week, assignment) =>
        set((state) => {
          const weekAssignments = state.completedAssignments[week] || []
          const newAssignments = weekAssignments.includes(assignment)
            ? weekAssignments.filter((a) => a !== assignment)
            : [...weekAssignments, assignment]
          return {
            completedAssignments: {
              ...state.completedAssignments,
              [week]: newAssignments,
            },
          }
        }),

      toggleChecklistItem: (itemId) =>
        set((state) => ({
          completedChecklistItems: state.completedChecklistItems.includes(itemId)
            ? state.completedChecklistItems.filter((id) => id !== itemId)
            : [...state.completedChecklistItems, itemId],
        })),

      getWeekProgress: (week, totalAssignments) => {
        const state = get()
        const completed = state.completedAssignments[week]?.length || 0
        return totalAssignments > 0 ? Math.round((completed / totalAssignments) * 100) : 0
      },

      getTotalProgress: () => {
        const state = get()
        return state.completedWeeks.length
      },

      exportProgress: () => {
        const state = get()
        return JSON.stringify({
          completedWeeks: state.completedWeeks,
          completedAssignments: state.completedAssignments,
          completedChecklistItems: state.completedChecklistItems,
        })
      },

      importProgress: (data) => {
        try {
          const parsed = JSON.parse(data)
          set({
            completedWeeks: parsed.completedWeeks || [],
            completedAssignments: parsed.completedAssignments || {},
            completedChecklistItems: parsed.completedChecklistItems || [],
          })
        } catch (e) {
          console.error("Failed to import progress", e)
        }
      },

      resetProgress: () =>
        set({
          completedWeeks: [],
          completedAssignments: {},
          completedChecklistItems: [],
        }),
    }),
    {
      name: "ai-roadmap-progress",
    },
  ),
)


import { defineStore } from 'pinia'
import { Note } from '~/types/notes'

export const useNotesStore = defineStore('notes', {
  state: () => {
    return {
      notes: null as Note[] | null
    }
  },
  actions: {
    setNotes (notes: Note[]): void {
      this.notes = notes
    },
    addNoteToStore (note: Note): void {
      if (this.notes === null) {
        this.notes = [note]
      } else {
        this.notes.push(note)
      }
    },

  }
})

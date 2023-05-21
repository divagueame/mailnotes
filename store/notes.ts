
import { defineStore } from 'pinia'
import { Note } from '~/types/notes'

export const useNotesStore = defineStore('notes', {
  state: () => {
    return {
      notes: null as Note[] | null
    }
  },
})

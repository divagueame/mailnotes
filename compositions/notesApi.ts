import { useContext } from '@nuxtjs/composition-api'
import { Note } from '~/types/notes'

export function notesApi () {
  const { $axios } = useContext()

  async function getNotes (messageIds:String[]) : Promise<Note[]> {
    try {
      const queryParams = messageIds.map(id => `message_ids[]=${id}`).join('&')
      // /notes?message_ids[]=<38u3o5ooooadulm49pir@convertkit-mail2.com>&page=1&per_page=50
      return await $axios.$get(`/notes?${queryParams}`)
    } catch (error) {
      throw new Error('Failed to fetch notes')
    }
  }

  async function createNote (note: Note) : Promise<Note> {
    try {
      return await $axios.$post('/notes', note)
    } catch (error) {
      throw new Error('Failed to create notes')
    }
  }

  async function updateNote (note: Note) : Promise<Note> {
    try {
      return await $axios.$patch(`/notes/${note.id}`, note)
    } catch (error) {
      throw new Error('Failed to create notes')
    }
  }

  async function deleteNote (note: Note): Promise<boolean> {
    try {
      await $axios.$delete(`/notes/${note.id}`)
      return true
    } catch (error) {
      throw new Error('Failed to create notes')
    }
  }

  return { getNotes, createNote, updateNote, deleteNote }
}

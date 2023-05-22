import { useContext } from '@nuxtjs/composition-api'
import { Note } from '~/types/notes'
import { utils } from '~/compositions/utils'
import { Params } from '~/types/utils'

export function notesApi () {
  const { $axios } = useContext()

  async function getNotes (params?: Params) : Promise<Note[]> {
    const { buildUrlQuery } = utils()
    const url = buildUrlQuery('/notes', params)

    try {
      return await $axios.$get(url)
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

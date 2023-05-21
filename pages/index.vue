<template>
  <div class="page-root">
    <AddNoteForm :email-id="selectedEmailId" />
    <div v-for="note in notes" :key="note.id" class="note">
      <EditNoteForm :note="note" />
      <img src="~/static/delete.svg" alt="Delete note" role="presentation" focusable="false" @click="handleDeleteNote(note)">
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from '@nuxtjs/composition-api'
import { notesApi } from '~/compositions/notesApi'
import { useNotesStore } from '~/store/notes'
import { Email, Note } from '~/types/notes'

export default defineComponent({
  name: 'IndexPage',
  layout: 'simple',
  setup () {
    const selectedEmailId = '<38u3o5ooooadulm49pir@convertkit-mail2.com>'
    const notesStore = useNotesStore()

    const { getNotes, deleteNote } = notesApi()


    const notes = ref(notesStore.notes)
    const fetchNotes = async () => {
      const messageIds = [selectedEmailId]

      const fetchedNotes:Note[] = await getNotes(messageIds)
      notesStore.setNotes(fetchedNotes)
      notes.value = fetchedNotes
    }

    fetchNotes()

    const handleDeleteNote = async (note: Note) => {
      const success = await deleteNote(note)

      if (success) {
        notesStore.deleteNote(note)
        notes.value = notesStore.notes || []
      }
    }
    return { notes, selectedEmailId, handleDeleteNote }
  }
})
</script>
<style scoped lang="scss">
.note {
  position: relative;
  margin: 10px auto;
  img {
    position: absolute;
    right: 20px;
    top: 20px;
    opacity: .4;
    width: 20px;
    height: 20px;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
}
</style>

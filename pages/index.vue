<template>
  <div>
    <AddNoteForm :email-id="selectedEmailId" />
    <div v-for="note in notes" :key="note.id" class="note">
      <EditNoteForm :note="note" />
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
  setup () {
    const selectedEmailId = '<38u3o5ooooadulm49pir@convertkit-mail2.com>'
    const notesStore = useNotesStore()

    const { getNotes } = notesApi()
    const notes = ref(notesStore.notes)
    const fetchNotes = async () => {
      const messageIds = [selectedEmailId]

      const fetchedNotes:Note[] = await getNotes(messageIds)
      notesStore.setNotes(fetchedNotes)
      notes.value = fetchedNotes
    }

    fetchNotes()
    return { notes, selectedEmailId }
  }
})
</script>

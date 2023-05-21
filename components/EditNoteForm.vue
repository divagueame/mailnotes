<template>
  <form>
    <textarea v-model="noteText" rows="4" cols="50" @blur="submitForm" />
  </form>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue'
import { ref } from '@nuxtjs/composition-api'
import { notesApi } from '~/compositions/notesApi'
import { Note } from '~/types/notes'

export default defineComponent({
  props: {
    note: {
      type: Object as PropType<Note>,
      required: true
    }
  },
  setup (props) {
    const noteText = ref(props.note.text)
    const savedText = ref(props.note.text)

    const { updateNote } = notesApi()

    const submitForm = async (e: Event) => {
      e.preventDefault()
      if (savedText.value === noteText.value) { return } // Return if the value has not changed since last save

      const updatedNote: Note = {
        ...props.note,
        text: noteText.value
      }
      await updateNote(updatedNote)
      savedText.value = noteText.value // Update last saved text
    }

    return { noteText, submitForm }
  }
})
</script>

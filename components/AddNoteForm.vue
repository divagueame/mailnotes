<template>
  <form>
    <textarea v-model="noteText" rows="1" @blur="submitForm" />
  </form>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue'
import { ref } from '@nuxtjs/composition-api'
import { notesApi } from '~/compositions/notesApi'
import { Note } from '~/types/notes'
import { useNotesStore } from '~/store/notes'

export default defineComponent({
  props: {
    emailId: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup (props) {
    const noteText = ref('')
    const { createNote } = notesApi()
    const notesStore = useNotesStore()
    const submitForm = async (e: Event) => {
      e.preventDefault()
      if (noteText.value === '') { return false } // If there's no text, we don't save the note
      const note: Note = {
        text: noteText.value,
        context: {
          message_id: props.emailId
        }
      }
      const res = await createNote(note)
      notesStore.addNoteToStore(res)
      noteText.value = ''
    }

    return { noteText, submitForm }
  }
})
</script>

<style lang="scss">

textarea {
  resize: none;
  &.auto {
      overflow-y: hidden;
  }
}

textarea {
  -webkit-appearance: none;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  font-size: 14px;
  font-family: 'Inter';
  line-height: 22px;
  padding: 16px 50px 16px 20px;
  border-radius: 15px;
  color: #404660;
  border: none;
  background: #fff;
  transition: box-shadow .25s;
  box-shadow: inset 0 0 0 1px var(--border-color, #E1E6F9), 0 0 0 3px var(--focus-color, transparent);
  &:focus {
     --focus-color: #ECEFFC;
  }
  &:focus,
  &:hover {
      --border-color: #BBC1E1;
  }
}
</style>

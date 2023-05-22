<template>
  <form id="add-note-form">
    <div
      id="add-trigger"
      :class="{ 'active': addFormActive }"
      @click="addFormActive = !addFormActive"
    >
      <img
        src="~/static/add.svg"
        alt="Add note"
        role="presentation"
        focusable="false"
      >
      Add a note
    </div>
    <textarea v-model="noteText" rows="1" :class="{ 'active': addFormActive }" @blur="submitForm" />
  </form>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue'
import { ref } from '@nuxtjs/composition-api'
import { notesApi } from '~/compositions/notesApi'
import { Email, Note } from '~/types/notes'
import { useNotesStore } from '~/store/notes'

export default defineComponent({
  props: {
    email: {
      type: Object as PropType<Email>,
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
          message_id: props.email.identifiers.message_id
        }
      }
      const res = await createNote(note)
      notesStore.addNoteToStore(res)
      noteText.value = ''
      addFormActive.value = false
    }

    const addFormActive = ref(false)

    return { noteText, submitForm, addFormActive }
  }
})
</script>

<style lang="scss">

form#add-note-form {
  #add-trigger {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background-color: rgb(250, 178, 71);
    padding: 3px 10px;
    border-radius: 5px;
    font-size: 12px;
    &:hover {
      opacity: .8;
      cursor: pointer;
    }
    &.active {
      opacity: .4;
    }
    img {
      width: 20px;
      height: 20px;
      opacity: 1;
    }
  }
  textarea {
    display: none;
    &.active {
      display: block;
    }
  }
}
</style>

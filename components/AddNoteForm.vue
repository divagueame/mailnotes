<template>
  <form id="add-note-form">
    <div class="actions">
      <div
        v-if="!addFormActive"
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
      <div v-else id="save-trigger">
        <img
          src="~/static/save.svg"
          alt="Add note"
          role="presentation"
          focusable="false"
        >
        Save
      </div>
    </div>
    <div class="textarea-wrapper">
      <textarea
        v-model="noteText"
        rows="1"
        :class="{ 'active': addFormActive }"
        @blur="submitForm"
        @input="autoExpandTextarea"
      />
      <img src="~/static/discard.svg" alt="Discard note" role="presentation" focusable="false" @mousedown="discardNote">
    </div>
  </form>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue'
import { ref, onMounted } from '@nuxtjs/composition-api'
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
      // If there's no text, we don't save the note
      if (noteText.value === '') {
        addFormActive.value = false
        return false
      }
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

    const autoExpandTextarea = () => {
      const textarea: HTMLTextAreaElement | null = document.querySelector('#add-note-form textarea')
      if (textarea) {
        textarea.style.height = 'auto'
        textarea.style.height = textarea.scrollHeight + 'px'
      }
    }

    onMounted(() => {
      const textarea = document.querySelector('#add-note-form textarea')
      if (textarea) {
        textarea.addEventListener('input', autoExpandTextarea)
      }
    })

    const discardNote = () => {
      noteText.value = ''
      addFormActive.value = false
    }

    return {
      noteText,
      submitForm,
      addFormActive,
      autoExpandTextarea,
      discardNote
    }
  }
})
</script>

<style lang="scss">

form#add-note-form {
  .actions {
    #add-trigger, #save-trigger {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background-color: rgb(250, 178, 71);
      padding: 5px 10px;
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
    #save-trigger {
      background-color: rgb(255, 255, 255);
      outline: 1px solid rgb(180, 210, 210);
    }
}
  .textarea-wrapper {
    position: relative;
    textarea {
      display: none;
      overflow: hidden;
      resize: none;
      padding-right: 40px;
      &.active {
        display: block;
      }
    }
    img {
      position: absolute;
      right: 15px;
      top: 15px;
      opacity: .4;
      width: 26px;
      height: 26px;
      padding: 2px;
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }
}

</style>

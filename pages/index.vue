<template>
  <LoadingWrapper v-if="isLoading" />
  <div v-else class="page-root">
    <ul class="emails">
      <li
        v-for="email in emails"
        :key="email.id"
        :class="{ active: email.id === activeEmail?.id }"
        @click="changeActiveEmail(email)"
      >
        <img
          src="~/static/email.svg"
          alt="Email"
        >
        {{ email.meta.sender?.email ? email.meta.sender?.email : 'Unknown sender' }} {{ email.meta.subject ? email.meta.subject : 'No subject' }}
      </li>
    </ul>
    <AddNoteForm v-if="activeEmail !== null" :email="activeEmail" />
    <div v-for="note in notes" :key="note.id" class="note">
      <EditNoteForm :note="note" />
      <img src="~/static/delete.svg" alt="Delete note" role="presentation" focusable="false" @click="handleDeleteNote(note)">
    </div>
  </div>
</template>

<script lang="ts">

import { Ref, defineComponent, ref, watch } from '@nuxtjs/composition-api'
import { notesApi } from '~/compositions/notesApi'
import { emailsApi } from '~/compositions/emailsApi'
import { useNotesStore } from '~/store/notes'
import { Email, Note } from '~/types/notes'
import { Params } from '~/types/utils'

export default defineComponent({
  name: 'IndexPage',
  layout: 'simple',
  setup () {
    const isLoading: Ref<boolean> = ref(false)
    const notesStore = useNotesStore()

    const { getNotes, deleteNote } = notesApi()

    const { getEmails } = emailsApi()
    const emails: Ref<Email[]> = ref([])
    const activeEmail: Ref<Email | null> = ref(null)
    const changeActiveEmail = (email: Email) => {
      activeEmail.value = email
    }
    const fetchEmails = async () => {
      const emailsParams: Params = { page: 1, per_page: 5 }
      const res = await getEmails(emailsParams)
      emails.value = res
    }

    fetchEmails()

    watch(activeEmail, async (newActiveEmail) => {
      if (newActiveEmail) {
        const emailId = newActiveEmail.identifiers?.message_id
        if (emailId) {
          await fetchNotes()
        }
      }
    })

    const notes = ref(notesStore.notes)
    const fetchNotes = async () => {
      isLoading.value = true
      if (!activeEmail.value?.identifiers.message_id) {
        notes.value = []
        return
      }
      const messageIds: Params = { 'message_ids[]': activeEmail.value?.identifiers.message_id }

      const fetchedNotes: Note[] = await getNotes(messageIds)
      notesStore.setNotes(fetchedNotes)
      notes.value = fetchedNotes
      isLoading.value = false
    }

    const handleDeleteNote = async (note: Note) => {
      const success = await deleteNote(note)

      if (success) {
        notesStore.deleteNote(note)
        notes.value = notesStore.notes || []
      }
    }
    return {
      activeEmail,
      emails,
      changeActiveEmail,
      notes,
      handleDeleteNote,
      isLoading
    }
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
ul.emails {
  list-style: none;
  height: 200px;
  overflow-y: auto;
  padding: 10px;
  font-size: 12px;
  margin-bottom: 25px;
  li {
    box-shadow: 0 1px 1px rgba(0,0,0,0.08), 0 1px 1px rgba(118, 118, 118, 0.12);
    border-left: 2px solid rgb(255, 222, 203);
    padding: 5px 5px;
    margin: 7px auto;
    color: rgb(51, 51, 51);
    &.active, &.active:hover {
      color: rgb(0, 0, 0);
      border-left: 2px solid rgb(240, 147, 93);
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(118, 118, 118, 0.24);
    }
    &:hover {

      border-left: 2px solid rgb(241, 212, 110);
      cursor: pointer;
      color: rgb(83, 83, 83)
    }
    img {
      width: 12px;
      height: 12px;
    }
  }
}
</style>

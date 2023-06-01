<template>
  <LoadingWrapper v-if="isLoading" />
  <div v-else-if="!isOutlookContext">
    <div class="card">
      <a href="https://www.outlook.com">
        <img
          src="~/static/outlook.svg"
          alt="MailNotes"
        >
      </a>
      <h2>Ooops... Please, try loading this add-in on Microsoft Outlook.</h2>
      <a href="https://www.outlook.com">
        Open Outlook
      </a>
    </div>
  </div>
  <div v-else class="page-root">
    <template v-if="activeEmail !== null">
      <AddNoteForm :email="activeEmail" />
      <div v-if="notes?.length === 0">
        <div class="card">
          <h2>You have no notes yet. Why not add one now?</h2>
        </div>
      </div>
      <div v-for="note in notes" v-else :key="note.id" class="note">
        <EditNoteForm :note="note" />
        <img
          src="~/static/delete.svg"
          alt="Delete note"
          role="presentation"
          focusable="false"
          @click="handleDeleteNote(note)"
        >
      </div>
    </template>
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
    const isOutlookContext: Ref<boolean> = ref(false)
    const activeEmailId: Ref<string | null> = ref(null)
    const activeEmail: Ref<Email | null> = ref(null)
    const notesStore = useNotesStore()

    window.Office.onReady(() => {
      if (window?.Office?.context?.mailbox?.item !== undefined) {
        isOutlookContext.value = true
      }
      if (window?.Office?.context?.mailbox?.item?.internetMessageId !== undefined) {
        activeEmailId.value = window.Office.context.mailbox.item.internetMessageId
      }
    })

    const { getEmail } = emailsApi()
    const { getNotes, deleteNote } = notesApi()

    watch(activeEmailId, async (newActiveEmailId) => {
      if (newActiveEmailId !== null) {
        isLoading.value = true
        await fetchNotes()
        const emailResponse = await getEmail(newActiveEmailId)
        activeEmail.value = emailResponse
        isLoading.value = false
      }
    })

    const notes = ref(notesStore.notes)
    const fetchNotes = async () => {
      if (!activeEmailId.value) {
        notes.value = []
        return
      }
      const messageIds: Params = { 'message_ids[]': activeEmailId.value }
      let fetchedNotes:Note[]
      try {
        fetchedNotes = await getNotes(messageIds)
      } catch (e) {
        fetchedNotes = []
      }
      notesStore.setNotes(fetchedNotes)
      notes.value = fetchedNotes
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
      isLoading,
      isOutlookContext
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
.card {
  a {
    padding: 8px 60px;
    border-radius: 10px;
    &:hover {
      opacity: .9;
    }
    img {
      max-width: 150px;
    }
  }
}
</style>

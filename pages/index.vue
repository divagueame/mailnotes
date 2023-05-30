<template>
  <LoadingWrapper v-if="isLoading" />
  <div v-else-if="!isOutlookContext">
    <h2>Ooops... Please, try loading this add-in on Microsoft Outlook.</h2>
  </div>
  <div v-else class="page-root">
    <template v-if="activeEmail !== null">
      <AddNoteForm :email="activeEmail" />
      <div v-if="notes?.length === 0">
        <h2>You have no notes yet. Why not add one now?</h2>
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

      const fetchedNotes:Note[] = await getNotes(messageIds)
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

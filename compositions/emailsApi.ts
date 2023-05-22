import { useContext } from '@nuxtjs/composition-api'
import { Email } from '~/types/notes'
import { utils } from '~/compositions/utils'
import { Params } from '~/types/utils'

export function emailsApi () {
  const { $axios } = useContext()

  async function getEmails (params?: Params) : Promise<Email[]> {
    const { buildUrlQuery } = utils()
    const url = buildUrlQuery('/emails', params)
    try {
      return await $axios.$get(url)
    } catch (error) {
      throw new Error('Failed to fetch emails')
    }
  }

  async function getEmail (messageId:String) : Promise<Email> {
    try {
      return await $axios.$get(`/emails/${messageId}`)
    } catch (error) {
      throw new Error('Failed to fetch notes')
    }
  }

  return {
    getEmail,
    getEmails
  }
}

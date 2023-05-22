import { Params } from '~/types/utils'

export function utils () {
  function buildUrlQuery (url: string, params?: Params): string {
    if (!params || Object.keys(params).length === 0) {
      return url
    }

    const queryString = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&')

    return `${url}?${queryString}`
  }

  return {
    buildUrlQuery
  }
}

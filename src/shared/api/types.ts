export type ApiWithMetaResponse<T> = {
  data: T
  meta: {
    total: number
    page: number
    limit: number
  }
}

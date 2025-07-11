'use client'

import { ArrayParam, StringParam, NumberParam } from 'use-query-params'
import { withDefault } from 'use-query-params'
import { useQueryParams } from 'use-query-params'
import { PublicationsListQueryParams } from './types'

export const usePublicationsListQuery = () => {
  const [query, setQuery] = useQueryParams({
    tagIds: withDefault(ArrayParam, []),
    search: withDefault(StringParam, ''),
    page: withDefault(NumberParam, 1),
    limit: withDefault(NumberParam, 10),
  })

  return {
    query: {
      tagIds: Array.isArray(query.tagIds) ? query.tagIds : [query.tagIds],
      search: query.search,
      page: query.page,
      limit: query.limit,
    } as PublicationsListQueryParams,
    setQuery,
  }
}

import PublicationsPage from '@/screens/PublicationsPage'
import { dehydrate } from '@tanstack/react-query'
import { HydrationBoundary } from '@tanstack/react-query'
import { prefetchPublicationsPage } from './prefetch'
import { PublicationsListQueryParams } from '@/entities/publication'

type PageProps = {
  searchParams: Promise<PublicationsListQueryParams>
}

export default async function Page({ searchParams }: PageProps) {
  const queryClient = await prefetchPublicationsPage(await searchParams)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PublicationsPage />
    </HydrationBoundary>
  )
}

import PublicationsPage from '@/screens/PublicationsPage'
import { dehydrate } from '@tanstack/react-query'
import { HydrationBoundary } from '@tanstack/react-query'
import { prefetchPublicationsPage } from './prefetch'
import {
  PublicationsController,
  PublicationsListQueryParams,
} from '@/entities/publication'

type PageProps = {
  searchParams: Promise<PublicationsListQueryParams>
}

export const generateMetadata = async (
  params: Promise<{ page: number; limit: number; search: string }>,
) => {
  const { page, limit, search } = await params
  const publications = await PublicationsController.getPublications({
    page,
    limit,
    search,
  })

  const publicationsTitles = publications.data.map(
    (publication) => publication.title,
  )

  return {
    title: 'Публикации',
    description: 'Публикации',
    keywords: publicationsTitles.join(', '),
  }
}

export default async function Page({ searchParams }: PageProps) {
  const queryClient = await prefetchPublicationsPage(await searchParams)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PublicationsPage />
    </HydrationBoundary>
  )
}

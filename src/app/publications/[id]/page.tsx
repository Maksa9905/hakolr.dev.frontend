import PublicationPage from '@/screens/PublicationPage'
import { HydrationBoundary } from '@tanstack/react-query'
import { prefetchPublicationPage } from './prefetch'

type PublicationPageProps = {
  params: {
    id: string
  }
}

export default async function Page({ params }: PublicationPageProps) {
  const state = await prefetchPublicationPage(params.id)

  return (
    <HydrationBoundary state={state}>
      <PublicationPage />
    </HydrationBoundary>
  )
}

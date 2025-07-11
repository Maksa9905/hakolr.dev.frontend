import { ApiController, ApiWithMetaResponse } from '@/shared/api'
import {
  GetPublicationsParams,
  PublicationResponse,
  PublicationStatisticsResponse,
  PublicationTagResponse,
} from './types'

export class PublicationsController {
  static async getPublicationsTags() {
    return await ApiController.call<PublicationTagResponse[]>('tags', {
      method: 'GET',
    })
  }

  static async getPublications(params: GetPublicationsParams) {
    const response = await ApiController.call<
      ApiWithMetaResponse<PublicationResponse[]>
    >('posts', {
      method: 'GET',
      params,
    })

    return response
  }

  static async getPublicationStatistics() {
    return await ApiController.call<PublicationStatisticsResponse>(
      'posts/stats',
      {
        method: 'GET',
      },
    )
  }

  static async getPublication(id: string) {
    return await ApiController.call<PublicationResponse>(`posts/${id}`, {
      method: 'GET',
    })
  }
}

import axios, { AxiosRequestConfig } from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL
  : '/api'

export class ApiController {
  static async call<T>(url: string, config: AxiosRequestConfig): Promise<T> {
    const response = await axios.request<T>({
      url: `${BASE_URL}/${url}`,
      ...config,
    })

    if (!response.status) throw new Error('Failed to fetch data')

    return response.data
  }
}

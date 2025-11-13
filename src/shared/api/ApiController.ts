import axios, { AxiosRequestConfig } from 'axios'

export class ApiController {
  static async call<T>(url: string, config: AxiosRequestConfig): Promise<T> {
    const response = await axios.request<T>({
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/${url}`,
      ...config,
    })

    if (!response.status) throw new Error('Failed to fetch data')

    return response.data
  }
}

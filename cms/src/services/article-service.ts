import axios, { AxiosInstance } from 'axios'
import ArticleModel from '@/models/article-model'

export default class ArticleService {
  static async getAll (): Promise<ArticleModel[]> {
    return axios.get('/article/api/articles').then((response) => {
      return response.data as ArticleModel[]
    })
  }

  static async getHtml (name: string): Promise<string> {
    return axios.get(`/static/article/htmlized_mml/${encodeURIComponent(name)}.html`).then((response) => {
      return response.data as string
    })
  }

  static getHtmlUrl (name: string): string {
    return `/static/article/htmlized_mml/${encodeURIComponent(name)}.html`
  }
}

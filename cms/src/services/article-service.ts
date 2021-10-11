import axios, { AxiosInstance } from 'axios'

export default class ArticleService {
  static instance: AxiosInstance = axios.create()

  static async get (): Promise<any> {
    const response = await this.instance.get('/article/api/articles')
    return response
  }

  static async getHtml (name: string): Promise<any> {
    const response = await this.instance.get(`/static/article/htmlized_mml/${name}.html`)
    return response
  }
}

import axios, { AxiosInstance } from 'axios'
import SymbolModel from '@/models/symbol-model'

export default class SymbolService {
  static async getAll (): Promise<SymbolModel[]> {
    return axios.get('/symbol/api/symbols').then((response) => {
      return response.data as SymbolModel[]
    })
  }

  static async getHtml (filename: string): Promise<string> {
    return axios.get(`/static/symbol/symbol_html/${encodeURIComponent(filename)}`).then((response) => {
      return response.data as string
    })
  }

  static async get (pk: string): Promise<SymbolModel> {
    console.log(String.raw`/symbol/api/symbols/${encodeURIComponent(pk)}`)
    pk.replace('/', '%2F')
    return axios.get(String.raw`/symbol/api/symbols/${encodeURIComponent(pk)}/`).then((response) => {
      return response.data as SymbolModel
    })
  }

  static getHtmlUrl (filename: string): string {
    return `http://localhost:8000/static/symbol/symbol_html/${encodeURIComponent(filename)}`
  }
}

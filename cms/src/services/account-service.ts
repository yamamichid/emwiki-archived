import AccountModel from '@/models/account-model'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export default class AccountService {
  static instance: AxiosInstance = axios.create()

  static async getAccountModel (accessToken: string, refreshToken: string): Promise<AccountModel> {
    const instance: AxiosInstance = axios.create({ headers: { Authorization: `Bearer ${accessToken}` } })
    return instance.get(
      '/accounts/api/me'
    ).then((response: AxiosResponse<Record<string, string>>) => {
      const username = response.data.username as string
      const email = response.data.email as string
      return {
        username,
        email,
        accessToken,
        refreshToken
      } as AccountModel
    })
  }

  static async login (username: string, password: string) {
    const JWTtokens = await this.getJWTTokens(username, password)
    console.log(JWTtokens)
    const accountModel = await this.getAccountModel(JWTtokens.access, JWTtokens.refresh)
    return accountModel
  }

  static async logout () {
    axios.defaults.headers!.Authorization = ''
  }

  static test (csrfToken: string) {
    const instance: AxiosInstance = axios.create({ headers: { 'X-CSRFToken': csrfToken } })
    instance.post('/article/test')
  }

  static getCookie () {
    axios.get('/article/test')
  }

  static signup (username: string, email: string, password: string) {
    console.log('implement here')
  }

  static async getJWTTokens (username: string, password: string): Promise<Record<string, string>> {
    return axios.post('/api/token/', { username: username, password: password }).then((response) => {
      return response.data as Record<string, string>
    })
  }
}

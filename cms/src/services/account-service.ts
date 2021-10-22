import axios, { AxiosInstance } from 'axios'

export default class AccountService {
  static instance: AxiosInstance = axios.create()

  static async login (username: string, password: string) {
    axios.post('/api/token/', { username: username, password: password }).then((response) => {
      console.log(response.data)
      axios.defaults.headers!.Authorization = response.data as unknown as string
    })
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
}

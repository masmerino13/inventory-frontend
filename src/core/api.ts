import axios from 'axios'

import { User } from './interfaces/user.interface';

const axiosClient = axios.create({
  baseURL: 'http://localhost:9001/api/v1'
})

export const authLogin = async (username: string, password: string): Promise<User | null> => {
  try {
    const user = await axios.post('/auth/login', {
      username,
      password
    })

    return user.data;
  } catch (error) {
    return null
  }
}

export default axiosClient

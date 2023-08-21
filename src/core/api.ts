import axios from 'axios'

import { User } from './interfaces/user.interface';

const axiosClient = axios.create({
  baseURL: 'http://localhost:9001/api/v1'
})

export const authLogin = async (username: string, password: string): Promise<User | null> => {
  try {
    const user = await axiosClient.post('/auth/login', {
      username,
      password
    })

    localStorage.setItem("authToken", user.data.auth_token);
    localStorage.setItem("userName", user.data.name);
    localStorage.setItem("userRole", user.data.role);

    return user.data;
  } catch (error) {
    return null
  }
}

export const getProducts = async (haystack: string) => {
  try {
    const products = await axiosClient.get(`/products/search?haystack=${haystack}`)

    return products.data
  } catch (error) {
    return []
  }
}

export const getProductDetail = async (id: string) => {
  try {
    const products = await axiosClient.get(`/products/${id}`)

    return products.data
  } catch (error) {
    return null
  }
}

export default axiosClient

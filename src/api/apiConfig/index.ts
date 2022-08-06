import axios from 'axios'

export const apiConfig = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  responseType: 'json',
})

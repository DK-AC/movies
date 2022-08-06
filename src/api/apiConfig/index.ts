import axios from 'axios'

import { BASE_URL } from '../../constans'

export const apiConfig = axios.create({
  baseURL: BASE_URL,
})

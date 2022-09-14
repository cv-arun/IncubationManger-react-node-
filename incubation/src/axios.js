import axios from 'axios';
import { Base_url } from './constance'

  let token = JSON.parse(localStorage.getItem('token'))

const instance = axios.create({
  baseURL: Base_url,
  headers: {
    'x-access-token': token?token:''
  }
});

export default instance;
import axios from 'axios';
import { Base_url } from './constance'


function getToken(){
  let token = JSON.parse(localStorage.getItem('token'))
 
  return token ? token : ''
}
const instance = axios.create({
  baseURL: Base_url,
  headers: {
    'x-access-token': `${getToken()}` 
  }
});

export default instance;
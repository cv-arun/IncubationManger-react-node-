import axios from 'axios';
import { Base_url } from './constance'

let user
export const setHeader=()=>{

  user = JSON.parse(localStorage.getItem('user'))
}
let auth = user ? user.token : '';
console.log(auth, "auth")

const instance = axios.create({
  baseURL: Base_url,
  headers: {
    'x-access-token': auth
  }
});

export default instance;
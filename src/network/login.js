
import axios from 'axios';
//登录
export function login(username,password) {
  console.log('login()')

 return  axios.post("/api/login/",{
      username:username,
      password:password,
    }
  )
}
//祖册
export function register(username,password) {
  console.log('register()')

  return axios.post("/api/register/",{
      username:username,
      password:password,
    },
  )
}

import axios from 'axios';

export function request(config) {
    console.log('request()')
   //1.创建axios实例
   const instance =axios.create({
     baseURL:'/api/',
     timeout:5000,
   })


  //2. axios拦截器
  instance.interceptors.request.use(config=>{
    return config;
  },err=>{
    return err;
  })
   instance.interceptors.response.use(res=> {
     return res.data;
   },err=>{
     return err;
   } );

  return instance(config)



}

export function request2(config) {
  console.log('request2()')
  //1.创建axios实例
  const instance2 =axios.create({
    baseURL:'/api/',
    timeout:5000,
    method:'post',
  })

  return instance2(config)



}


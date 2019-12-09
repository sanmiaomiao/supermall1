import {request} from "./request";

export function getcategorylist(title) {
  console.log('getcategorylist()')

  return request({
    url:"/categorylist/",
    params:{
      title:title
    }

  })
}
//shangyi
export function getshangyilist(type) {
  console.log('getshangyilist()')

  return request({
    url:"/shangyilist/",
    params:{
      type:type
    }

  })
}
//kuzi
export function getkuzilist(type) {
  console.log('getkuzilist()')

  return request({
    url:"/kuzilist/",
    params:{
      type:type
    }

  })
}
//qunzi
export function getqunzilist(type) {
  console.log('getqunzilist()')

  return request({
    url:"/qunzilist/",
    params:{
      type:type
    }

  })
}
//nvxie
export function getnvxielist(type) {
  console.log('getnvxielist()')

  return request({
    url:"/nvxielist/",
    params:{
      type:type
    }

  })
}
//baobao
export function getbaobaolist(type) {
  console.log('getbaobaolist()')

  return request({
    url:"/baobaolist/",
    params:{
      type:type
    }

  })
}

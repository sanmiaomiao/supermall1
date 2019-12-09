
import {request} from "./request";

export function getgoodsdata(page,sort) {
  console.log('getgoodsdata()')

  return request({
    url:"/shoplist/",
    params:{
      page:page,
      sort:sort,
    }
  })
}











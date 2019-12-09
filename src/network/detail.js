import {request} from "./request";

export function getdetaildata(itemId) {
  console.log('getdetaildata()')

  return request({
    url:"/popdetail/",
    params:{
      itemId:itemId
    }

  })
}

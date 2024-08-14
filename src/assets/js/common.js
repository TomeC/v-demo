
import axios from "axios"

const baseUrl = '/api'
export function ajaxGet(path, param) {
  return axios({
    url: baseUrl + path,
    method: "GET",
    headers: {
      "token": "xxx",
    },
    params: param
  }).catch(e => {
    console.log(path, e);
  })
}
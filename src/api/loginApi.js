import { ajaxGet } from '../assets/js/common'

export function getLoginConfig() {
  return ajaxGet('/mock/logo/config', '').then(res => {
    console.log(res)
  })
}
export function login(name, pwd) {
  return
}
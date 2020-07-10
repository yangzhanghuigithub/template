import request from '../utils/request'

export function sendValiCode(params) {
  return request({
    url: '/base/sysUser/sendValiCode',
    method: 'POST',
    params: request.adornParams(params)
  })
}

export function regist(params) {
  return request({
    url: '/base/sysUser/regist',
    method: 'POST',
    params: request.adornParams(params)
  })
}


export function login(params) {
  return request({
    url: '/base/sysUser/login',
    method: 'POST',
    params: request.adornParams(params)
  })
}

export function getInfo() {
  return request({
    url: '/base/sysMenu/getMenus',
    method: 'GET',
  })
}

export function logout() {
  return request({
    url: 'base/sysUserRole/getLogout',
    method: 'GET'
  })
}

export function getUser(params) {
  return request({
    url: '/base/test/getUser',
    method: 'GET',
    params: request.adornData(params)
  })
}

export function getMenu(params) {
  return request({
    url: '/base/menu/getMenu',
    method: 'GET',
    params: request.adornData(params)
  })
}

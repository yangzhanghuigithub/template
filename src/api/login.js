import request from '../utils/request'

export function login(params) {
  return request({
    url: '/base/sysUser/login',
    method: 'POST',
    params: request.adornParams(params)
  })
}

export function getInfo() {
  return request({
    url: '/admin/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/admin/logout',
    method: 'post'
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

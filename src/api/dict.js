import request from '../utils/request'

export function dictList(params) {
  return request({
    url: '/base/dict/getList',
    method: 'GET',
    params: request.adornParams(params)
  })
}

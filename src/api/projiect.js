import request from '../utils/request'

export function projectList(params) {
  return request({
    url: '/base/project/getListPage',
    method: 'GET',
    params: request.adornData(params)
  })
}

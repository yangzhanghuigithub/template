import request from '../utils/request'

export function projectList(params) {
  return request({
    url: '/base/project/getListPage',
    method: 'GET',
    params: request.adornData(params)
  })
}

export function patientList(params) {
  return request({
    url: '/base/patient/getListPage',
    method: 'GET',
    params: request.adornParams(params)
  })
}

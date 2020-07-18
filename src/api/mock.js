import Mock from 'mockjs';
const Random = Mock.Random;
import request from '../utils/request'

let prefix = "http://edc.lrhealth.com/mock";

export function testMock(params) {
  return request({
    url: prefix + '/sysUser/getMock',
    method: 'POST',
    params: request.adornParams(params)
  })
}

var data = Mock.mock( prefix + '/sysUser/getMock', "POST", {
  'list|1-10': [{
    'id|+1' : 1
  }]
});


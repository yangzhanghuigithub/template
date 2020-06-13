import {getToken} from './auth'
import {setToken} from './auth'
import {removeToken} from './auth'
import {isEmail} from './validate'
import {isMobile} from './validate'
import {isPhone} from './validate'
import {isURL} from './validate'

export default {
  getToken: getToken,
  setToken: setToken,
  removeToken: removeToken,
  isEmail: isEmail,
  isMobile: isMobile,
  isPhone: isPhone,
  isURL: isURL
}

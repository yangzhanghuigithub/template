import {getToken, setToken, removeToken} from './auth'
import {isEmail, isMobile, isPhone, isURL} from './validate'

export default {
  getToken: getToken,
  setToken: setToken,
  removeToken: removeToken,
  isEmail: isEmail,
  isMobile: isMobile,
  isPhone: isPhone,
  isURL: isURL
}

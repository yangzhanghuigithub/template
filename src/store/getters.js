const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  userId: state => state.user.userId,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  addRouters: state => state.permission.addRouters,
  routers: state => state.permission.routers,
  projectDomain: state => state.global.projectDomain,
  userTokenKey: state => state.global.userTokenKey,
  defaultProjIcon: state => state.global.defaultProjIcon,
  adminUserKey: state => state.global.adminUserKey,
  questionNum: state => state.global.questionNum,
  apiEncrypt: state => state.global.apiEncrypt,
  jsPublicKey: state => state.global.jsPublicKey,
  jsPrivateKey: state => state.global.jsPrivateKey
}
export default getters

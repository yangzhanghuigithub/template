import {login, getUser, regist, getMenu, logout, getInfo, sendValiCode} from './login'
import {projectList, saveProject, patientList, deleteProject} from "./projiect";
import {dictList} from "./dict";
import {testMock} from "./mock";

export default {
  login: login,
  getUser: getUser,
  getMenu: getMenu,
  getInfo: getInfo,
  logout: logout,
  projectList: projectList,
  patientList: patientList,
  dictList: dictList,
  saveProject: saveProject,
  deleteProject: deleteProject,
  sendValiCode: sendValiCode,
  regist: regist,
  testMock: testMock
}

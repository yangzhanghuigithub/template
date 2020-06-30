import {login, getUser, getMenu, logout, getInfo} from './login'
import {projectList, saveProject, patientList, deleteProject} from "./projiect";
import {dictList} from "./dict";

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
  deleteProject: deleteProject
}

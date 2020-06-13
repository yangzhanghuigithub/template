import {Message} from 'element-ui'
import {getMenu} from "../api/login";

export const isNotNullORBlank = (...args)=> {
  for (var i = 0; i < args.length; i++) {
    var argument = args[i];
    if (argument == null || argument == '' || argument == undefined) {
      Message.warning({message: '数据不能为空!'})
      return false;
    }
  }
  return true;
}
export const initMenu = (router, store)=> {
  if (store.state.routes.length > 0) {
    return;
  }
  getMenu().then((data) => {
    var fmtRoutes = formatRoutes(data.resultData);
    router.addRoutes(fmtRoutes);
    store.commit('initMenu', fmtRoutes);
    store.dispatch('connect');
  })
}

export const formatRoutes = (routes)=> {
  let fmRoutes = [];
  routes.forEach(router=> {
    let {
      path,
      component,
      name,
      meta,
      iconCls,
      children
    } = router;
    if (children && children instanceof Array) {
      children = formatRoutes(children);
    }
    let fmRouter = {
      path: path,
      component(resolve){

      },
      name: name,
      iconCls: iconCls,
      meta: meta,
      children: children
    };
    fmRoutes.push(fmRouter);
  })
  return fmRoutes;
}

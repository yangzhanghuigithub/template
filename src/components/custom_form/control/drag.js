export default (_self, h) => {
  return [
    h('draggable', {
      style: {

      }
    })
  ]
}

import draggable from "vuedraggable";

export const dragConf = {
  // 是否可配置
  config: true,
  marginTop: 0,
  marginBottom: 24
}

export default (_self, h) => {
  return [
    h('Icon', {
      class: {
        "preIcon": true,
        "handle": true,
        "iconfont": true,
        "iconliebiao2": true
      },
      style: {
        "font-size": "30px",
        "color": "gray",
        "cursor": "move"
      }
    })
  ]
}
export const iconConf = {
  // 是否可配置
  config: false,
  marginTop: 0,
  marginBottom: 0
}


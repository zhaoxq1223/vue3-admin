// 1.导入所有svg图标
// 2.完成 SvgIcon 全局注册
import SvgIcon from '@/components/SvgIcon'

const svgRequire = require.context('./svg', false, /\.svg$/)
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))

export default (app) => {
  app.component('SvgIcon', SvgIcon)
}

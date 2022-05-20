import path from 'path-browserify'
/**
 * @description: 所有子集路由
 */
const getChildrenRoutes = (routes) => {
  const result = []
  routes.forEach((route) => {
    if (route?.children?.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}
/**
 * @description: 处理脱离层级的路由
 */
export const filterRouters = (routes) => {
  const childrenRoutes = getChildrenRoutes(routes)
  return routes.filter((route) => {
    return !childrenRoutes.find((childrenRoute) => {
      return childrenRoute.path === route.path
    })
  })
}
const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}
/**
 * @description: 根据routes返回对应的menu数据
 */
export const generateMenus = (routes, basePath = '') => {
  const result = []
  routes.forEach((item) => {
    // 不存在meta和children
    if (isNull(item.children) && isNull(item.meta)) return
    // 不存在meta但是有children
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return false
    }
    // 不存在children，存在meta
    const routePath = path.resolve(basePath, item.path)
    let route = result.find((item) => item.path === routePath)
    // 当前路由尚未加入到result
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      if (route.meta.icon && route.meta.title) {
        result.push(route)
      }
    }
    // 如果存在meta,存在children
    if (!isNull(item.children)) {
      route.children.push(...generateMenus(item.children, routePath))
    }
  })
  return result
}

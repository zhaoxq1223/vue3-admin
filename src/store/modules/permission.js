import { publicRoutes, privateRoutes } from '@/router'

export default {
  namespaced: true,
  state: () => ({
    // 路由表，初始时所拥有的路由表
    routes: publicRoutes
  }),
  mutations: {
    // 增加路由
    setRoutes(state, newRoutes) {
      state.routes = [...publicRoutes, ...newRoutes]
    }
  },
  actions: {
    /**
     * @description: 根据权限数据筛选路由
     * @param {*} menus 权限数据
     */
    filterRoutes(context, menus) {
      const routes = []
      menus.forEach((key) => {
        routes.push(...privateRoutes.filter((item) => item.name === key))
      })

      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })

      context.commit('setRoutes', routes)

      return routes
    }
  }
}

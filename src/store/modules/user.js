import md5 from 'md5'
import { login, getUserInfo } from '@/api/sys'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    /**
     * @description: 登录请求动作
     */
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username, password: md5(password) })
          .then((data) => {
            context.commit('setToken', data.token)
            router.push('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    /**
     * @description: 获取用户信息
     */
    async getUserInfo(context) {
      const res = await getUserInfo()
      context.commit('setUserInfo', res)
      return res
    }
  }
}

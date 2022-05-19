import request from '@/utils/request'

/**
 * @description: 登录
 * @param {Object} data
 * @return {Promise}
 */
export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 * @description: 获取用户信息
 * @return {Promise}
 */
export const getUserInfo = () => {
  return request({
    url: '/sys/profile'
  })
}

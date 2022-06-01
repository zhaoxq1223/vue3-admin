import request from '@/utils/request'

/**
 * @description: 获取项目功能
 */
export const feature = () => {
  return request({
    url: '/user/feature'
  })
}

/**
 * @description: 获取章节
 */
export const chapter = () => {
  return request({
    url: '/user/chapter'
  })
}

import request from '@/utils/request'

/**
 * @description: 获取用户列表数据
 */
export const getUserMangeList = (data) => {
  return request({
    url: '/user-manage/list',
    data
  })
}

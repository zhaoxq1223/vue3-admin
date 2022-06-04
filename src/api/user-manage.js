import request from '@/utils/request'

/**
 * @description: 获取用户列表数据
 */
export const getUserMangeList = (data) => {
  return request({
    url: '/user-manage/list',
    params: data
  })
}

/**
 * @description: 获取所有用户列表数据
 */
export const getUserMangeAllList = () => {
  return request({
    url: '/user-manage/all-list'
  })
}

/**
 * @description: 批量上传
 */
export const userBatchImport = (data) => {
  return request({
    url: '/user-manage/batch/import',
    method: 'POST',
    data
  })
}

/**
 * @description: 删除指定用户
 */
export const deleteUser = (id) => {
  return request({
    url: `/user-manage/detele/${id}`
  })
}

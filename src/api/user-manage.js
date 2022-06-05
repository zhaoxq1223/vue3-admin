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
 * @description: 获取用户详情
 */
export const userDetail = (id) => {
  return request({
    url: `/user-manage/detail/${id}`
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

/**
 * @description: 获取指定用户的角色
 */
export const userRoles = (id) => {
  return request({
    url: `/user-manage/role/${id}`
  })
}

/**
 * @description: 为用户分配角色
 */
export const updateRole = (id, roles) => {
  return request({
    url: `/user-manage/update-role/${id}`,
    method: 'POST',
    data: {
      roles
    }
  })
}

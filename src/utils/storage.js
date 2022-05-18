/**
 * @description: 存储数据
 */
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
/**
 * @description: 获取数据
 */
export const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}
/**
 * @description: 删除指定数据
 */
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}
/**
 * @description: 删除所有数据
 */
export const removeAllItem = () => {
  window.localStorage.clear()
}

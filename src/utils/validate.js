/**
 * @description:  判断是否为外部资源
 * @param path
 * @return {Boolean}
 */
export const isExternal = (path) => {
  return /^(https?:|mailto:|tel:)/.test(path)
}

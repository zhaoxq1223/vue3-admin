const whiteList = ['/login', '/404', '/401']

export const isTags = (path) => {
  return !whiteList.includes(path)
}

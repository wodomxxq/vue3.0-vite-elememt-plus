const tokenKey = 'K8TOKEN'

export const getToken = () => {
  return sessionStorage.getItem(tokenKey) || ''
}

export const setToken = (val:string) => {
  const token = val || ''
  sessionStorage.setItem(tokenKey, token)
}

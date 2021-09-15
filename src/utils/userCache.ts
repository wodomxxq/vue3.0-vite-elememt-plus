
// token
export const setToken = (token:string) => {
  token = token || ''
  sessionStorage.setItem('token', token)
}

export const getToken = () => {
  return sessionStorage.getItem('token') || ''
}

// 清除缓存
export const clear = () => {
  sessionStorage.clear()
  localStorage.clear()
}

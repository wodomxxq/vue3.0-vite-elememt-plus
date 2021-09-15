const fmt = (v:any) => v < 10 ? `0${v}` : v

export const getNow = () => {
  const now = new Date()
  return `
  ${now.getFullYear()}年${fmt(now.getMonth() + 1)}月${fmt(now.getDate())}日  ${fmt(now.getHours())}:${fmt(now.getMinutes())}:${fmt(now.getSeconds())}
  `
}


/**
 * @desc 生成总路由
 * @param context 
 * @param ignore 
 */
 export const getRoutes = (context: any, ignore: any) => {
  const children: any = []
  Object.keys(context).forEach(key => {
    if (!ignore.includes(key)) {
      try {
        const arr = context[key].default
        if (arr && arr.length) {
          children.push(...arr)
        }
      } catch (e) {
        console.error(e)
      }
    }
  })
  return children
}

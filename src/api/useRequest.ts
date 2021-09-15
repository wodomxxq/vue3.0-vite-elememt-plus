import {
  toRefs,
  reactive,
  isRef,
  onMounted
} from 'vue'

// 拼接查询参数
const getParams = (params: any) => {
  let query = ''
  const data = Object.keys(params)
  data.forEach((key, index) => {
    const val = params[key]
    // 如果去 ref 对象，需要取 .value 属性
    const value = isRef(val) ? val.value : val
    query += `${key}=${value}${index === data.length - 1 ? '' : '&'}`
  })
  return query
}

/**
* 将对象转成 a=1&b=2的形式
* @param obj 对象
*/
function obj2String(obj, arr = [], idx = 0) {
	for (let item in obj) {
		arr[idx++] = [item, obj[item]]
	}
	return new URLSearchParams(arr).toString()
}

export function httpGet (options: any) {
  const { url, manual = false, params = {} } = options
  const state = reactive({
    data: {},
    error: false,
    loading: false,
  })

  const run = async () => {
    state.error = false
    state.loading = true
    try {
      const result = await fetch(`${url}?${getParams(params)}`).then(res => res.json())
      state.data = result
    } catch (e) {
      state.error = true
    }
    state.loading = false
  }

  onMounted(() => {
    // 第一次是否需要手动调用
    !manual && run()
  })

  return {
    run,
    ...toRefs(state)
  }
}
export function httpPost (options: any) {
  const { url, manual = false, params = {} } = options
  const state = reactive({
    data: {},
    error: false,
    loading: false,
  })

  const run = async () => {
    state.error = false
    state.loading = true
	const searchStr = obj2String(options)
	const initObj = {
		method: 'post',
		credentials: 'include',
		headers: new Headers({
			'Accept': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded'
		}),
		body: searchStr
	}
    try {
      const result = await fetch(url, initObj).then(res => res.json())
      state.data = result
    } catch (e) {
      state.error = true
    }
    state.loading = false
  }

  onMounted(() => {
    // 第一次是否需要手动调用
    !manual && run()
  })

  return {
    run,
    ...toRefs(state)
  }
}




// export default (options: any) => {
//   const { url, manual = false, params = {} } = options
//   const state = reactive({
//     data: {},
//     error: false,
//     loading: false,
//   })

//   const run = async () => {
//     state.error = false
//     state.loading = true
//     try {
//       const result = await fetch(`${url}?${getParams(params)}`).then(res => res.json())
//       state.data = result
//     } catch (e) {
//       state.error = true
//     }
//     state.loading = false
//   }

//   onMounted(() => {
//     // 第一次是否需要手动调用
//     !manual && run()
//   })

//   return {
//     run,
//     ...toRefs(state)
//   }
// }

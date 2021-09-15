import request from '@/utils/request'

export function getArticle(params) {
  return request({
    url: 'https://hn.algolia.com/api/v1/search',
    method: 'GET',
	params: params
  })
}


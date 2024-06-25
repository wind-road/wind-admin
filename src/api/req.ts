import api from './index'
import $http from '@/utils/request.ts'

export function getClass(params = {}, getSourceData = false) {
  return $http(api.test, {
    method: 'get',
    params,
    getSourceData
  })
}
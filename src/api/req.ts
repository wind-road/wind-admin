import api from './index'
import $http from '@/utils/request'

export function getClass(params = {}) {
  return $http(api.test, { method: 'get', params })
}

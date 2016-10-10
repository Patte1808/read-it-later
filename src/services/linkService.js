import Vue from 'vue'
import authService from './authService'

const BASE_URL = 'http://localhost:3000/links'
const headers = { headers: authService.getAuthHeader() }

export default {
  fetchAll () {
    return Vue.http.get(BASE_URL, headers)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  postLink (request) {
    return Vue.http.post(BASE_URL, request, headers)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  deleteLink (request) {
    return Vue.http.delete(BASE_URL + '/' + request, request, headers)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  updateLink (request) {
    return Vue.http.put(BASE_URL + '/' + request.id, request, headers)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }
}

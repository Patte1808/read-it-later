import Vue from 'vue'

const BASE_URL = 'http://localhost:3000/links'

export default {
  fetchAll () {
    return Vue.http.get(BASE_URL)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  postLink (request) {
    return Vue.http.post(BASE_URL, request)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  deleteLink (request) {
    return Vue.http.delete(BASE_URL + '/' + request, request)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }
}

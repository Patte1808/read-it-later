import Vue from 'vue'

export default {
  fetchAll () {
    return Vue.http.get('http://localhost:3000/links')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  postLink (request) {
    return Vue.http.post('http://localhost:3000/links', request)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }
}

import Vue from 'vue'

const BASE_URL = 'http://localhost:3000/auth_user'

export default {
  user: {
    authenticated: false
  },
  login (credentials) {
    Vue.http.post(BASE_URL, credentials)
      .then(response => {
        localStorage.setItem('id_token', response.data.auth_token)

        this.user.authenticated = true
      })
  },
  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}

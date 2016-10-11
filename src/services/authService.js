import Vue from 'vue'

const BASE_URL = 'http://localhost:3000/auth_user'

export default {
  user: {
    authenticated: false
  },
  login (context, credentials) {
    Vue.http.post(BASE_URL, credentials)
      .then(response => {
        localStorage.setItem('id_token', response.data.auth_token)

        this.user.authenticated = true
        context.$router.go('/links')
      })
  },
  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  },
  isAuthenticated () {
    return (localStorage.getItem('id_token') !== null)
  }
}

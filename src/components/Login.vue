<template>
  <div>
    <input type="text" v-model="credentials.email" />
    <input type="password" v-model="credentials.password" />
    <button @click="submit">Login</button>
  </div>
</template>

<script>
import authService from '../services/authService'

export default {
  data () {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit (e) {
      e.preventDefault()

      let credentials = {
        email: this.credentials.email,
        password: this.credentials.password
      }

      authService.login(credentials)
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <form>
        <p class="control has-icon">
          <input class="input" type="email" placeholder="Email" v-model="credentials.email">
          <i class="fa fa-envelope"></i>
        </p>
        <p class="control has-icon">
          <input class="input" type="password" placeholder="Password" v-model="credentials.password">
          <i class="fa fa-lock"></i>
        </p>
        <p class="control">
          <button class="button is-success" @click="submit">
            Login
          </button>
        </p>
      </form>
    </div>
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

      authService.login(this, credentials)
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

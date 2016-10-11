<template>
  <div id="app" class="container">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import authService from './services/authService'
export default {
  created () {
    if (authService.isAuthenticated()) {
      this.$store.dispatch('fetchLinks')
    }
  }
}
</script>

<style>
</style>

<template>
  <div id="app" class="container">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('fetchLinks')
  }
}
</script>

<style>
</style>

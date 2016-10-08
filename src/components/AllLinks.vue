<template>
  <div class="columns is-multiline is-mobile">
    <div class="column is-4 is-one-quarter" v-for="(link, index) in links">
      <link-item :link="link" />
    </div>
  </div>
</template>

<script>
import Link from './Link'

export default {
  components: {
    'link-item': Link
  },
  computed: {
    links () {
      return this.$store.getters.links
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

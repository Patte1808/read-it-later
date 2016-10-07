<template>
  <div>
    <link-form />
    <all-links />
  </div>
</template>

<script>
import LinkForm from './LinkForm.vue'
import AllLinks from './AllLinks.vue'

export default {
  methods: {

  },
  computed: {

  },
  components: {
    'link-form': LinkForm,
    'all-links': AllLinks
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

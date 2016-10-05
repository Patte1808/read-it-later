<template>
  <div class="column is-half is-offset-one-quarter">
    <form>
      <label class="label">Link title</label>
      <p class="control">
        <input class="input" type="text" placeholder="Link title" :value="title" @input="updateTitle">
      </p>
      <label class="label">Additional notes</label>
      <p class="control">
        <textarea class="textarea" placeholder="Notes" :value="notes" @input="updateNotes"></textarea>
      </p>
      <p class="control">
        <button class="button is-primary" @click="saveLink">Save</button>
        <button class="button is-link">Cancel</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    updateTitle (e) {
      this.$store.dispatch('updateLinkTitle', e.target.value)
    },
    updateUrl (e) {
      this.$store.dispatch('updateLinkUrl', e.target.value)
    },
    updateNotes (e) {
      this.$store.dispatch('updateLinkNotes', e.target.value)
    },
    saveLink (e) {
      e.preventDefault()
      this.$store.dispatch('saveLink')
    }
  },
  computed: {
    title () {
      return this.$store.getters.newLink.title
    },
    url () {
      return this.$store.getters.newLink.url
    },
    notes () {
      return this.$store.getters.newLink.notes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

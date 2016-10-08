<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{link.title}}</strong>
            <br>
            <span v-html="compiledMarkdown"></span>
          </p>
        </div>
        <nav class="level">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-pencil"></i></span>
            </a>
            <a class="level-item" @click="deleteLink(id)">
              <span class="icon is-small"><i class="fa fa-trash"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  props: ['link', 'id'],
  methods: {
    deleteLink (id) {
      this.$store.dispatch('deleteLink', id)
    }
  },
  computed: {
    links () {
      return this.$store.getters.links
    },
    compiledMarkdown () {
      return marked(this.$options.propsData.link.notes, {sanitize: true})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

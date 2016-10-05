<template>
  <div id="test">
    <div class="column" v-for="(link, index) in links">
      <div class="box">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{link.title}}</strong>
                <br>
                {{link.notes}}
              </p>
            </div>
            <nav class="level">
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small"><i class="fa fa-reply"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fa fa-heart"></i></span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {

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

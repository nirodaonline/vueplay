<template>
  <div class="standardsList">
    <b-container>

      <VueFuse :keys="searchKeys" :list="standards" event-name="search" placeholder="Search Jazz Standards by title, author or performing artist."/>

      <ul>
        <li v-for="standard in results" :key="standard.id" class="standardList-item">
          <div class="item-title">{{standard.title}}</div>
          <div class="item-author">{{standard.author}}</div>
        </li>
      </ul>

    </b-container>

  </div>
</template>

<script>
import standards from '@/data/demo-data.json'
// import VueFuse from 'vue-fuse/src/components/VueFuse.vue'
import VueFuse from '@/components/VueFuse.vue'

export default {
  name: 'StandardsList',
  components: {
    VueFuse
  },
  data() {
    return {
      standards: standards,
      results: [],
      searchKeys: ["title", "author", "performances.artist"]
    }
  },
  created () {
    this.$on('search', results => {
      this.results = results
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

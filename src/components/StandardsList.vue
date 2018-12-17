<template>
  <div class="standardsList">
    <b-container>

      <VueFuse :keys="searchKeys" :list="standards" event-name="search" placeholder="Search by title, author or performing artist"/>

      <b-container class="results">
        <b-list-group>

          <b-list-group-item
            v-for="(standard,index) in results" :key="index"
            :href="'/standard/'+standard.id"
            class="standardList-item flex-column align-items-start"
            :variant="(index%2===0)? 'dark' : 'default'"
          >
            <div class="d-flex w-100 justify-content-between">
              <div>
                <h5 class="mb-0">{{standard.title}}</h5>
                <small class="d-flex">{{standard.author}}</small>
              </div>
              <div class="d-flex">
                <b-badge variant="primary" pill class="my-auto" v-b-tooltip title="Number of versions of this standard">
                  {{ standard.performances && standard.performances.length ? standard.performances.length : 0 }}
                </b-badge>
              </div>
            </div>
          </b-list-group-item>

          <!-- <li v-for="standard in results" :key="standard.id" class="standardList-item">
            <div class="item-title">{{standard.title}}</div>
            <div class="item-author">{{standard.author}}</div>
          </li> -->

        </b-list-group>
      </b-container>

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
.results{
  margin-bottom: 20px;
  max-width: 580px;

  .standardList-item{
    .badge{
      font-size: 1em;
    }
  }
}

</style>

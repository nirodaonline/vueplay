<template>
  <b-container class="searchForm">
    <b-form-input size="lg" type="search" v-model="value" :placeholder="placeholder"/>
  </b-container>
</template>

<script>
  import VueFuse from 'vue-fuse/src/components/VueFuse.vue'
  export default {
    extends: VueFuse,
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.container.searchForm{
  margin-bottom: 20px;
  max-width: 580px;
}
</style>

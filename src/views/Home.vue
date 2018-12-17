<template>
  <div class="home">
    <b-container class="mb-5">
      <b-card>
        <img alt="Logo" src="../assets/logo.svg" height="50" width="50">
        <Welcome/>
        <StandardsList/>
      </b-card>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'
import StandardsList from '@/components/StandardsList.vue'

export default {
  name: 'home',
  components: {
    Welcome,
    StandardsList,
  }
}
</script>

<style scoped lang="scss">

#home{
  // @include media-breakpoint-up(sm) {
  //
  // }
  // @include media-breakpoint-up(md) {
  // }
  // @include media-breakpoint-up(lg) {
  //
  // }
}

</style>

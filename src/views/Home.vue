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
@import '@/../node_modules/bootstrap/scss/bootstrap.scss';

.home{
  margin: 0 auto;
  @include media-breakpoint-up(sm) {
  }
  @include media-breakpoint-up(md) {
    max-width: 80%;
  }
  @include media-breakpoint-up(lg) {
    max-width: 60%;
  }
}

</style>

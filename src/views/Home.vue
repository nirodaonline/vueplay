<template>
  <div class="home">

    <Welcome/>
    <StandardsList/>

  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'
import StandardsList from '@/components/StandardsList.vue'


export default {
  name: 'Home',
  components: {
    Welcome,
    StandardsList,
  }
}
</script>

<style scoped lang="scss">
</style>

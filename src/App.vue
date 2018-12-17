<template>
  <div id="app">
    <b-container fluid class="bg-light full-height">
      <div class="nav-wrapper">
        <b-nav id="nav" :pills="true" class="text-center">
          <!-- <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> -->
          <b-nav-item to="/" exact>Home</b-nav-item>
          <b-nav-item to="/about" exact>About</b-nav-item>
        </b-nav>
      </div>
      <router-view/>
    </b-container>


  </div>
</template>

<style lang="scss">
// @import '../node_modules/bootstrap/scss/bootstrap.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.nav-wrapper{
  display: inline-block;
}
.full-height{
  min-height: 100vh;
}
</style>

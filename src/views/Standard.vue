<template>
  <div class="standard">

    <div class="info">
      <h1>{{standard.title}}</h1>
      <h6>{{standard.author}}</h6>
      <p v-html="standard.description"/>
      <small v-if="(standard.wiki)">Read more <a :href="standard.wiki" target="_blank">here</a></small>
    </div>

    <div class="performancesList" role="tablist">

      <b-card no-body class="mb-1 performancesList-item"
        v-for="(performance,index) in standard.performances" :key="index"
      >
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-btn block href="#" v-b-toggle="'accordion'+index" variant="info">
            {{performance.artist}}
          </b-btn>
        </b-card-header>
        <b-collapse :id="'accordion'+index" :visible="false" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <p class="card-text">
              <small>{{performance.description}}</small>
            </p>
            <p>
              <b-embed type="iframe"
                       aspect="16by9"
                       :src="'https://www.youtube.com/embed/'+performance.youtube_vid"
                       allowfullscreen
              />
            </p>
          </b-card-body>
        </b-collapse>
      </b-card>

    </div>

  </div>
</template>

<script>

export default {
  name: 'Standard',
  methods:{

  },
  data(){
    return {
      standard: this.$root.getStandardById( this.$route.params.id ),
    }
  },
  created () {
    // this.standard = getStandardById( this.$route.params.id );
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

<template>
  <div id="app">
    <mainHeader></mainHeader>
    <div class="container" v-if="!isIndex">
      <sideNav class="nav"></sideNav>
      <router-view class="view"></router-view>
    </div>
    <router-view class="page" v-else></router-view>
  </div>
</template>

<script>
import mainHeader from './components/header.vue'
import sideNav from './components/side-nav.vue'

export default {
  name: 'app',
  data () {
    return {
      isIndex: true
    }
  },
  watch: {
    $route () {
      this.isIndex = this.$route.name === 'index'
    }
  },
  components: {
    mainHeader,
    sideNav
  }
}
</script>

<style lang="scss" type="text/scss">
@import './assets/sass/index.scss';

.container {
  margin: 48px auto;
  width: 90%;
  min-height: calc(100vh - 262px);

  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
  .nav {
    float: left;
    width: 210px;
  }
  .view {
    float: left;
    width: calc(100% - 215px);
    padding: 32px 48px 48px;
    box-sizing: border-box;
  }
}

.container:after {
  content: '';
  clear: both;
  display: block;
}
</style>

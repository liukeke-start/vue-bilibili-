<template>
  <div id="app">
    <v-header v-show="this.$route.name != 'showplay'"></v-header>
    <div class="b-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/header'
export default {
  name: 'app',
  data(){
    return {
      isShow: this.$route.name == 'showplay'
    }
  },
  components: {
    vHeader
  }
}
</script>

<style lang="css">
@import 'assets/sass/reset.scss'
</style>

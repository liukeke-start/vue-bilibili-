<template>
  <div id="app">
    <v-header></v-header>
  </div>
</template>

<script>
import vHeader from '@/components/header'
export default {
  name: 'app',
  components: {
    vHeader
  }
}
</script>

<style lang="css">
@import 'assets/sass/reset.scss'
</style>

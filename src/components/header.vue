<template>
  <div class='headpage'>
    <div class="b-header">
      <img src="http://i0.hdslb.com/bfs/face/2c3a364cf409a85b4c651a6afbf6ffe22208c654.jpg" alt="" class="b-avatar">
        <span class="b-username">honeyvickys</span>
      <div class="right">
        <i class="fa fa-gamepad" aria-hidden="true"></i>
        <i class="fa fa-download" aria-hidden="true"></i>
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
      <div class="b-navbar">
        <ul>
          <li class="b-show"><router-link to="/show">直播</router-link></li>
          <li class="b-recommond"><router-link to="/recommond">推荐</router-link></li>
          <li class="b-drama"><router-link to="/drama">番剧</router-link></li>
          <li class="b-partition"><router-link to="/partition">分区</router-link></li>
          <li class="b-follow"><router-link to="/follow">关注</router-link></li>
          <li class="b-find"><router-link to="/find">发现</router-link></li>
        </ul>
      </div>
    </div>
    <div class="b-content">
      <router-view></router-view>
   </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@import '../assets/sass/header.scss'
</style>

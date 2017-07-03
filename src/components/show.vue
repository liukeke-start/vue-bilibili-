<template>
  <div>
    <v-swiper></v-swiper>
    <div class="banner-item">
      <div class="item follow">
        <img src="../assets/image/heart.png" alt="" class="ico">
        <p class="item-info">关注主播</p>
      </div>
      <div class="item center">
        <img src="../assets/image/world.png" alt="" class="ico">
        <p class="item-info">直播中心</p>
      </div>
      <div class="item search">
        <img src="../assets/image/search.png" alt="" class="ico">
        <p class="item-info">搜索直播</p>
      </div>
      <div class="item classification">
        <img src="../assets/image/sort.png" alt="" class="ico">
        <p class="item-info">全部分类</p>
      </div>
    </div>
    <div class="totalshow">
      <img src="../assets/image/video.png" alt="">
      <span class="recommond">推荐主播</span>
      <span class="right">当前<span class="totalNum">5849</span>个主播  ></span>
    </div>
    <div class="show-content">
      <div class="showItem col-xs-6" @click="showDetail" v-for="item in imgUrl">
        <!--<router-link to="/showPlay">-->
        <img v-lazy="item.src">
        <div class="showInfo">
          <span class="showTag">#美妆#</span>
          <span class="showTitle">怎么学会化妆</span>
          <div class="showUser">
            <span class="showAuthor">小明</span>
            <i class="fa fa-eye" aria-hidden="true"></i>
            <span class="showNum">200</span>
          </div>
        </div>
        <!--</router-link>-->
      </div>
    </div>
  </div>
  <!-- vue模板只能有一个根对象后面不能再有div -->
    <!--<div>
        <h1>直播</h1>
        <p>{{msg}}</p>
    </div>-->
</template>
<script>
import vSwiper from '@/components/swiper'
export default {
  name: 'showItem',
  data() {
    return {
      imgUrl: [
        {src: '../assets/image/a.jpg'},
        {src: '//i0.hdslb.com/bfs/archive/22528e30aca296787be1998a9231909d5ff50ef8.jpg@339w_212h.webp'},
        {src: '//i0.hdslb.com/bfs/archive/22528e30aca296787be1998a9231909d5ff50ef8.jpg@339w_212h.webp'},
        {src: '//i0.hdslb.com/bfs/archive/22528e30aca296787be1998a9231909d5ff50ef8.jpg@339w_212h.webp'},
        {src: '//i0.hdslb.com/bfs/archive/22528e30aca296787be1998a9231909d5ff50ef8.jpg@339w_212h.webp'},
        {src: '//i0.hdslb.com/bfs/archive/22528e30aca296787be1998a9231909d5ff50ef8.jpg@339w_212h.webp'},
        {src: ''}
      ]
    };
  },
  components: {
    vSwiper
  },
  methods: {
    showDetail() {
      // this.$store.state.displayHeader = false;
      console.log(123);
      this.$router.push({name:'showplay'});
      //  this.$router.go('/showPlay');
    },
  }
}
</script>
<style lang="scss">
@import '../assets/sass/show.scss'
</style>

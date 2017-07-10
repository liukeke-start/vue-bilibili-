<template>
    <div class="wrapper">
      <div class="float-bar">
        <router-link to="/show">
          <i class="fa fa-arrow-left" aria-hidden="true">
            <img src="//ooo.0o0.ooo/2017/07/04/595b4ee818246.png">
          </i>
        </router-link>
        <span>小明</span>
        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      </div>
      <div >
        <!--<video controls="controls" src="https://youtu.be/p26rzjXsYWc" class="video"></video>-->
        <!--<video controls="controls" src="http://cn-sdyt-cu-v-01.acgvideo.com/vg2/b/28/preview_3216790-1.mp4?expires=1499234100&platform=html5&ssig=PyxHSmTvMTpvQxc_EgCqaw&oi=1875535817&stime=0&etime=360&nfa=NdlCs+CQJ65YLKw7GGjUmA==&dynamic=1&hfa=2070901909"
        poster="//ooo.0o0.ooo/2017/07/05/595c55f7ce40c.jpg" class="video"></video>-->
        <iframe class="video" width="100%" src="https://www.youtube.com/embed/p26rzjXsYWc" frameborder="0" allowfullscreen></iframe>
      </div>
      <!--简介和评论-->
      <div class="description">
        <div class="bar">
            <ul>
                <li class="info active" @click="toggleInfo">
                     简介
                </li>
                <li class="comment" @click="toggleComment">
                      评论
                </li>
            </ul>
        </div>
      </div>
      <div class="content">
        <div class="showInfo" v-show="isInfoShow">
           <p class="title" >【水仙/静止系】narcissu_小明</p>
           <p class="desc" >静止系静止系静止系静止系静止系静止系静止系静止系静止系静止系静止系静止系静止系静止系
             静止系静止系静止系静止系静止系静止系静止系</p>
           <div class="author">
              <img src="http://i0.hdslb.com/bfs/face/2c3a364cf409a85b4c651a6afbf6ffe22208c654.jpg" alt="">
              <span class="name">小明</span>
              <span class="follow"  @click="follow"> + 关注</span>
           </div>
           <p class="tagAll">
              <span class="tagAbout">标签相关</span>
              <span class="tag">静止系</span>
          </p>
        </div>
        <div class="showComment" v-show="isCommentShow">
          <ul class="cmtList">
            <li>
              <img src="//i0.hdslb.com/bfs/face/2c3a364cf409a85b4c651a6afbf6ffe22208c654.jpg" class="avatar">
              <span class="name">小明</span>
              <span class="ico" >
                <i class="fa fa-thumbs-o-up" @click="star"></i>
                <i class="con">0</i>
              </span>
              <p class="comment">我是评论内容区我是评论内容区我是评论内容区我是评论内容区</p>
            </li>
          </ul>
          <div class="talk">
            <img src="../assets/image/emoji.png" class="emoji"></img>
            <input type="text" v-model="cmtContent" placeholder="说点什么">
            <img src="../assets/image/send.png" class="send" @click="submitCmt">
          </div>
        </div>

      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      isInfoShow: true,
      isCommentShow: false,
      cmtContent: ''
      // isStar: [{true: true}]
    }
  },
  methods: {
    toggleInfo() {
      this.isInfoShow = true;
      this.isCommentShow = false;
      $('.info').addClass('active').next().removeClass('active')
    },
    toggleComment() {
      this.isInfoShow = false;
      this.isCommentShow = true;
      $('.comment').addClass('active').prev().removeClass('active')
    },
    follow () {
      var $follow = $('.follow')
      if( $follow.is('.followed') ) {
        $follow.html('关注').removeClass('followed')
      } else {
        $follow.html('已关注').addClass('followed')
      }
    },
    star() {
      var fa = $('.ico').val() + 1;
      if($('.fa').is('.cfa')) {
         $('.con').text();
        $('.fa').removeClass('cfa');
        console.log(fa)
      } else {
         $('.con').text(fa);
         $('.fa').addClass('cfa');
      }
    },
    submitCmt() {
      let content = this.cmtContent;
      if(content === ' '){
         console.log(111111);
      }

    }
  }
}
</script>
<style lang="scss">
@import '../assets/sass/showPlay.scss'
</style>


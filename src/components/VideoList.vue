<template>
    <div class="videolist">
        <div class="navstyle" :style="backgroundDiv">
            <Navigation></Navigation>
        </div>
        <div class="mtor" :style="bgmtor"> 
            <div class="allvideo">
                <div class="videosingle">
                  <img :src="imgsrc" class="videoimg" @click="jump('/Videoplay','./static/Man.mp4','Man')"/>
                  <div class="videointro">
                       <p class="videotitle" @click="jump('/Videoplay','./static/Man.mp4','Man')">Man</p>
                       <p class="videoinfo">人类来到地球以后，不断残害动植物，制造垃圾...</p>
                       <p class="videoinfo">视频时长：3:36</p>
                       <p class="videoinfo2">推荐指数：</p>
                       <star :size="36" :score="5"></star>
                  </div>
               </div>
                <div class="videosingle">
                    <img :src="imgsrc2" class="videoimg" @click="jump('/Videoplay','./static/Man.mp4','黛子小姐')"/>
                    <div class="videointro">
                       <p class="videotitle" @click="jump('/Videoplay','./static/Man.mp4','黛子小姐')">黛子小姐</p>
                       <p class="videoinfo">黛子小姐华丽出生以后，体会到了人情冷暖，找到了自己的爱人，但是...</p>
                       <p class="videoinfo">视频时长：7:14</p>
                       <p class="videoinfo2">推荐指数：</p>
                       <star :size="36" :score="4.5"></star>
                    </div>
                </div>
                <div class="videosingle">
                    <img :src="imgsrc3" class="videoimg" @click="jump('/Videoplay','./static/最后一滴水.mp4','最后一滴水')"/>
                    <div class="videointro">
                        <p class="videotitle" @click="jump('/Videoplay','./static/最后一滴水.mp4','最后一滴水')">最后一滴水</p>
                        <p class="videoinfo">水是生命之源，假如世界上只剩最后一滴水...</p>
                        <p class="videoinfo">视频时长：3:36</p>
                        <p class="videoinfo2">推荐指数：</p>
                        <star :size="36" :score="3"></star>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import Videoplay from '../components/Videoplay.vue'
import star from "../components/star.vue";
import Navigation from '../components/Navigation.vue';
export default {
  components: {
	star,Navigation
  },
  name: 'Mainframe',
  // components:{
  // 	Videoplay
  // },
  data() {
    return {
      imgsrc:require("../assets/Video/Man.png"),
      imgsrc2:require("../assets/Video/DZ.png"),
      imgsrc3:require("../assets/Video/ZH.png"),
      backgroundDiv: {
        backgroundImage: 'url(' + require('../assets/nav.png') + ')'
      },
      bgmtor: {
        backgroundImage: 'url(' + require('../assets/Video/videolist.png') + ')',
        backgroundSize: '100% 100%'
      }
    }
  },
  methods: {
    jump(e,pvideo,nvideo) {
      this.$router.push({path:e, query:{videopath:pvideo,videoname:nvideo}});
    }
  }
}
</script>
<style scoped>
.navstyle {
    height: 360px;
    width: 33px;
    float: left;
}
.mtor {
    /*margin-top: 40px;*/
    /*margin-left: 40px;*/
    height: 360px;
    width: 607px;
    float: left;
    /*overflow-y: auto;*/
}
.videolist {
	height: 360px;
    width: 640px;
    overflow: hidden;
}
.allvideo {
    margin-top: 35px;
    margin-left: 25px;
    height: 320px;
    width: 640px;
    overflow-y: auto;
}
.videosingle {
	height: 150px;
	width: 100%;
}
.videoimg {
	height: 130px;
	width: 231px;
	float: left;
}
.videotitle {
	color: #fff;
    display: block;
    max-height: 4.8rem;
    overflow: hidden;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.4rem;
    width:200px;
}
.videointro {
  margin-top: 2px;
  margin-left: 30px;
	height: 148px;
	width: 200px;
	float: left;
}
.videoinfo {
	color: #fff;
    display: block;
    max-height: 4.8rem;
    overflow: hidden;
    font-size: 0.8rem;
    font-weight: 200;
    line-height: 1.4rem;
    width:300px;
}
.videoinfo2 {
	color: #fff;
    display: block;
    max-height: 4.8rem;
    overflow: hidden;
    font-size: 0.8rem;
    font-weight: 200;
    line-height: 1.4rem;
    width: 64px;
    float: left;
}
</style>
<template>
    <div class="mpage">
    	<div class="navstyle" :style="backgroundDiv">
        	<Navigation></Navigation>
      </div>
      <div class="mtor" :style="bgmtor"> 
         <div class="intro">
            <!-- <p class="inp">即刻出发</p>
            <p class="inp2">这是一款环保软件，主要关注处于危险</p> -->
         </div>
      </div>
    </div>
</template>
<script>
import Navigation from '../components/Navigation.vue';
export default {
  components: {
	Navigation
  },
  data() {
    return {
      imgsrc:require("../assets/home.png"),
      imgsrc2:require("../assets/nav.png"),
      backgroundDiv: {
        backgroundImage: 'url(' + require('../assets/nav.png') + ')',
        backgroundSize: '100% 100%'
      },
      bgmtor: {
      	backgroundImage: 'url(' + require('../assets/abus.png') + ')',
      	backgroundSize: '100% 100%'
      },
      bgbtn: {
      	backgroundImage: 'url(' + require('../assets/了解.png') + ')'
      }
    }
  },
  methods: {
    // jump(e,pvideo,nvideo) {
    //   this.$router.push({path:e, query:{videopath:pvideo,videoname:nvideo}});
    // }
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
  height: 360px;
  width: 607px;
  float: left;
}
.intro {
  height: 200px;
  width: 494px;
  margin-left: 57px;
  margin-top: 40px;
}
.inp {
  position: absolute;
  height: 37px;
  width: 147px;
  margin-left: 192px;
  margin-top: 0px;
  font-size: 24px;
  font-weight: 550;
  letter-spacing: 2px;
  color: #fff;
}
.inp2 {
  position: absolute;
  height: 37px;
  width: 147px;
  margin-left: 0px;
  margin-top: 0px;
  font-size: 24px;
  font-weight: 550;
  letter-spacing: 2px;
  color: #fff;
}
</style>
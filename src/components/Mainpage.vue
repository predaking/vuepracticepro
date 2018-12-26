<template>
    <div class="mpage">
    	<div class="navstyle" :style="backgroundDiv">
        	<Navigation></Navigation>
        </div>
        <div class="mtor" :style="bgmtor"> 
        	<!-- <img :src="imgsrc" class="mimg"/> -->
        	<!-- <div class="homep">
        		<p class="hp">WHERE IS MY</p>
        		<p class="hp" style="margin-left: 30px">HOME</p>
        	</div> -->
        	<button class="mbtn" :style="bgbtn" @click="jump('/Cartton')">了解更多</button>
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
        backgroundImage: 'url(' + require('../assets/nav.png') + ')'
      },
      bgmtor: {
      	backgroundImage: 'url(' + require('../assets/mpage2.png') + ')',
      	backgroundSize: '100% 100%'
      },
      bgbtn: {
      	backgroundImage: 'url(' + require('../assets/了解.png') + ')'
      }
    }
  },
  methods: {
    jump(e) {
      this.$router.push(e);
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
.mimg {
  position: absolute;
	height: 194px;
  width: 216px;
  margin-top: 40px;
  margin-left: 20px;
}
.mbtn {
	position: absolute;
	height: 52px;
	width: 147px;
	margin-left: 390px;
	margin-top: 285px;
	border-top:0px;
  border-left:0px;
  border-right:0px;
  border-bottom:0px;
  background: transparent;
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: 2px;
  color: #f87c04;
  display: block;
}
.homep {
	width: 100px;
	margin-top: 190px;
  margin-left: 20px;
}
.hp {
	color: #fff;
    display: block;
    max-height: 4.8rem;
    overflow: hidden;
    font-size: 20px;
    font-weight: 400;
    line-height: 2.0rem;
    width:200px;
}
</style>
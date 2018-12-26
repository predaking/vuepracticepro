<template>
<div class="gmain">
  <ul class="swipeitem" style="list-style:none;">
    <!--将列元素li也用transition组件包裹起来 -->
    <transition :enter-class="oe" :enter-active-class="oea" :leave-active-class="ola" :leave-to-class="olt">
      <!-- 将列元素li循环3次渲染为可滑动元素，并定义列指针cIndex与四个方向滑动的方法 -->
      <v-touch tag="li" class="swipeitem"  v-for="(rList,rIndex) in 3" v-if="rIndex==currentRIndex" :key="rIndex" @swipeleft="left()" @swiperight="right()">
        <!-- <h1 v-if="currentRIndex==0">000</h1>
        <h1 v-if="currentRIndex==1">123</h1>
        <h1 v-if="currentRIndex==2">12312</h1> -->
        <div v-if="currentRIndex==0">
          <div class="demo-carousel" :style="gm1" id="swiper1">
            <!-- <div class="gmainp">
               <p class="gmps">宇宙无穷无尽，但迄今为止，</p>
               <p class="gmps">地球却是人类以及其他一切生物</p>
               <p class="gmps">赖以生存的唯一星球!</p>
             </div> -->
             <button class="gbtn" :style="gbtn1" @click="jump('/Mainpage')">Skip</button>
          </div>
        </div>
        <div v-if="currentRIndex==1">
          <div class="demo-carousel" :style="gm2" id="swiper1">
            <!-- <div class="gmainp2">
               <p class="gmps2">然而地球资源正在快速</p>
               <p class="gmps2">被消耗，生物物种也急</p>
               <p class="gmps2">剧减少...</p>
             </div> -->
             <button class="gbtn2" :style="gbtn1" @click="jump('/Mainpage')">Skip</button>
          </div>
        </div>
        <div v-if="currentRIndex==2">
          <div class="demo-carousel" :style="gm3" id="swiper1">
            <!-- <div class="gmainp3">
               <p class="gmps2">关爱地球，关爱地球上</p>
               <p class="gmps2">一切生命，需要你我即</p>
               <p class="gmps2">刻出发！</p>
             </div> -->
             <button class="gbtn3" :style="gbtn1" @click="jump('/Mainpage')">Enter</button>
          </div>
        </div>
      </v-touch>
    </transition>
    <div id="ind">
      <div class="ind-div" v-for="(x,index) in 3" :class="currentRIndex==index?highlight:''"></div>
    </div>
  </ul>
</div>
</template>
<script>
import earth from '../js/earth'
export default {
  data() {
    return {
      gm1: {
        backgroundImage: 'url(' + require('../assets/Guide/guide1.png') + ')',
        backgroundSize: '100% 100%'
      },
      gm2: {
        backgroundImage: 'url(' + require('../assets/Guide/guide2.png') + ')',
        backgroundSize: '100% 100%'
      },
      gm3: {
        backgroundImage: 'url(' + require('../assets/Guide/guide3.png') + ')',
        backgroundSize: '100% 100%'
      },
      gbtn1: {
        backgroundImage: 'url(' + require('../assets/Guide/gbtn1.png') + ')'
      },
      currentRIndex: 0,
      oe: 'on-enter',
      oea: 'on-enter-active',
      ola: 'on-leave-active',
      olt: 'on-leave-to',
      highlight: 'ind-div-active',
    }
  },
  mounted() {
    // this.loadEarth();
  },
  methods: {
    // loadEarth() {
    //   console.log(this.currentRIndex);
    //   earth.earthModel();
    // },
    jump(e) {
      this.$router.push(e);
    },
    left() {
      console.log("111111111");
      this.oe = "on-enter-swipeleft";
      this.olt = "on-leave-to-swipeleft";
      if (this.currentRIndex == 2)
        this.currentRIndex = 2;
      else
        this.currentRIndex++;
      // $("#ind").show().delay(5000).fadeOut();
    },
    right() {
      this.oe = "on-enter-swiperight";
      this.olt = "on-leave-to-swiperight";
      if (!this.currentRIndex)
        this.currentRIndex = 0;
      else
          this.currentRIndex--;
      // $("#ind").show().delay(5000).fadeOut();
    }
  }
}
</script>
<style scoped>
.gmain {
  height: 360px;
  width: 640px;
}

.on-enter-active {
  transition: .5s ease;
}

.on-leave-active {
  transition: .5s ease;
}

.on-enter-swiperight {
  opacity: 1;
  transition: .5s ease;
  transform: translateX(-640px);
}

.on-leave-to-swiperight {
  opacity: 1;
  transition: .5s ease;
  transform: translateX(640px);
}

.on-enter-swipeleft {
  opacity: 1;
  transition: .5s ease;
  transform: translateX(640px);
}

.on-leave-to-swipeleft {
  opacity: 1;
  transition: .5s ease;
  transform: translateX(-640px);
}

.swipeitem {
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  font-size: 50px;
  position: absolute;
}

#ind {
  height: 7px;
  width: 30px;
  left: 305px;
  top: 340px;
  position: absolute;
  display: flex;
  justify-content: space-between;
}

.ind-div {
  background-color: white;
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.ind-div-active {
  height: 7px;
  background-color: #ea8865;
  margin-top: 0px;
}

.carousel {
  height: 360px;
}

.demo-carousel {
  height: 360px;
  /*overflow-y: auto;*/
}

.desc {
  position: absolute;
  right: 10%;
  left: 10%;
  bottom: 30px;
  color:white;
  font-size: 35px !important;
  animation: desctf 10s;
  -webkit-animation: desctf 10s;
  /* Safari and Chrome */
}
@-webkit-keyframes desctf{
  from {color: black;bottom: 0px;}

  to {color: white;bottom: 30px;}
}
@keyframes desctf{
  from {display:none;color: black;bottom: 0px;}

  to {display: block;color: white;bottom: 30px;}
}
#swiper1 {
  text-align: center;
  background-color: transparent;
}

.gmainp {
  position: absolute;
  margin-top: 118px;
  margin-left: 302px;
  width: 312px;
  height: 100px;
}
.gmps {
  color: #370b0b;
  display: block;
  max-height: 4.8rem;
  overflow: hidden;
  font-size: 18px;
  font-weight: 900;
  line-height: 2rem;
  width: 308px;
  float: left;
  text-align: left;
  letter-spacing: 3px;
}
.gmainp2 {
  position: absolute;
  margin-top: 118px;
  margin-left: 352px;
  width: 212px;
  height: 100px;
}
.gmps2 {
  color: #260e0f;
  display: block;
  max-height: 4.8rem;
  overflow: hidden;
  font-size: 18px;
  font-weight: 900;
  line-height: 2rem;
  width: 308px;
  float: left;
  text-align: left;
  letter-spacing: 3px;
}
.gmainp3 {
  position: absolute;
  margin-top: 118px;
  margin-left: 372px;
  width: 212px;
  height: 100px;
}

.gbtn {
  position: absolute;
  height: 68px;
  width: 68px;
  margin-left: 230px;
  margin-top: 283px;
  border-top:0px;
  border-left:0px;
  border-right:0px;
  border-bottom:0px;
  background: transparent;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 0.5px;
  color: #aa90d2;
}
.gbtn2 {
  position: absolute;
  height: 68px;
  width: 68px;
  margin-left: 230px;
  margin-top: 283px;
  border-top:0px;
  border-left:0px;
  border-right:0px;
  border-bottom:0px;
  background: transparent;
  font-size: 24px;
  font-weight: 550;
  letter-spacing: 0.5px;
  color: #e4d3c9;
}
.gbtn3 {
  position: absolute;
  height: 68px;
  width: 68px;
  margin-left: 230px;
  margin-top: 283px;
  border-top:0px;
  border-left:0px;
  border-right:0px;
  border-bottom:0px;
  background: transparent;
  font-size: 24px;
  font-weight: 550;
  letter-spacing: 0.5px;
  color: #ddc4ca;
}
</style>

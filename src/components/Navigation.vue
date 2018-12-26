<template>
  <div class="mainnav">
    <!-- @click="timeout5()" class='connav' -->
    <main class='container' v-show="isShow">
      <div>
      <div class='wrap' ref='navinfo'>
        <input type='checkbox' id='checking' style='display:none;' />
        <button class='blob' :style="blobb" @click="jump('/Bird')"></button>
        <button class='blob' ref='nav' style="display: none">&#x2709;</button>
        <transition name="fade">
          <button class='blob' style="display: none">&#x2699;</button>
        </transition>
        <button class='blob' :style="blobh" @click="jump('/Cartton')"></button>
        <button class='blob' :style="blobs" @click="jump('/Sheep')"></button>
        <button class='blob' :style="blobe" @click="jump('/Elephant')"></button>
        <button class='blob' style="display: none">&#x266B;</button>
        <button class='blob' :style="blobd" @click="jump('/Dolphin')"></button>
        <label class='blob' for='checking' id="label-blob">
        <!-- <label class='bloblist' id="label-blob"> -->
          <span class='bar'></span>      
          <span class='bar'></span>
          <span class='bar'></span>
        </label>
        <audio ref='muplay' id="musicplay" loop="loop" ><source src="../music/bgm.mp3" type="audio/mpeg"></audio>
        <label class='blobmusic'>
          <!-- <Icon ref='micon' @typechange="typechange" type="ios-musical-notes" class='barmusic' @click="musicctrl()"/> -->
          <img :src="imgsrc" class="barmusic" @click="musicctrl()"/>
        </label>
        <label class='blobmusic2'>
          <!-- <Icon ref='micon' @typechange="typechange" type="ios-musical-notes" class='barmusic' @click="musicctrl()"/> -->
          <img :src="imgsrc2" class="barmusic" @click="jump('/AboutUs')"/>
        </label>
        <label class='blobvideo'>
          <!-- <Icon ref='micon' @typechange="typechange" type="ios-musical-notes" class='barmusic' @click="musicctrl()"/> -->
          <img :src="imgsrc3" class="barvideo" @click="jump('/VideoList')"/>
        </label>
        <img :src="logo" class="mlogo" @click="jump('/Mainpage')"/>
      </div>  
    </div>
    </main>
    <svg class="svgs">
      <symbol>
        <defs>
          <filter id="filt">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="filt" />
            <feBlend in2="filt" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </symbol>
    </svg>
  </div>  
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      msg: "当前时间：" + new Date().toLocaleString(),
      isShow:true,
      isPlay:false,
      imgsrc:require("../assets/Navigation/musicclose.png"),
      imgsrc2:require("../assets/Navigation/abs.png"),
      imgsrc3:require("../assets/Navigation/视频2.png"),
      logo:require("../assets/logo.png"),
      blobs: {
        backgroundImage: 'url(' + require('../assets/Navigation/Sheep.png') + ')',
        backgroundSize: '100% 100%'
      },
      blobb: {
        backgroundImage: 'url(' + require('../assets/Navigation/Bird.png') + ')',
        backgroundSize: '100% 100%'
      },
      blobe: {
        backgroundImage: 'url(' + require('../assets/Navigation/Elephant.png') + ')',
        backgroundSize: '100% 100%'
      },
      blobh: {
        backgroundImage: 'url(' + require('../assets/Navigation/Cartton.png') + ')',
        backgroundSize: '100% 100%'
      },
      blobd: {
        backgroundImage: 'url(' + require('../assets/Navigation/Dolphin.png') + ')',
        backgroundSize: '100% 100%'
      }
      //imgsrc:require("../assets/earth.jpg")
    }
  },
  methods: {
    jump(e) {
      this.$router.push(e);
    },
    timeout5() {
      this.isShow=true;
      //var t=document.getElementById("nav");
      console.log(this.$refs.nav);
      console.log(this);
      //setTimeout(() =>{this.$refs.nav.style.background="blue"},1000);
      setTimeout(() =>{this.isShow=false},5000);
      //var t=setTimeout("this.hide();",1000);
      //var t=setTimeout("this.isShow=false;",1000);
    },
    musicctrl() {
      var audio = document.getElementById('musicplay');
      console.log(this.$refs.muplay.src);
      if(this.isPlay){
        this.imgsrc=require("../assets/Navigation/musicclose.png");
        audio.pause();
        audio.currentTime=0;
      }
      else
      {
        this.imgsrc=require("../assets/Navigation/musicopen.png");
        audio.play();
      }
      this.isPlay=!this.isPlay;
    }
  }
  // },
  // mounted(){
  //   let _this=this;
  //   document.addEventListener('click',function(e){
  //     if(_this.$refs.navinfo.contains(e.target)) return;
  //     _this.isShow=true;
  //     setTimeout(() =>{_this.isShow=false;},5000);
  //     //_this.isShow=false;
  //   })
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainnav {
  position: absolute;
  width: 32px;
  height: 360px;
}
.content {
  text-align: center;
  padding-top: 100px !important;
}
.connav {
  height:360px;
  width:640px;
}
.bar {

  width:12px;

  display: block;
  /*width: 40px;*/
  height: 3px;
  /*margin: 5px auto;*/
  margin:1px auto;
  margin-left: 6px;
  background-color: #fff;
  border-radius: 2px;
  transition: all 0.4s linear 0.1s;
  -webkit-transition: all 0.4s linear 0.1s;
  -moz-transition: all 0.4s linear 0.1s;
  -o-transition: all 0.4s linear 0.1s;
  -ms-transition: all 0.4s linear 0.1s;
}
.bar:first-child {
  margin-top: 7px;
  /*margin-top: 27px;*/
}

.wrap {
  position: absolute;
  top: 10px;
  left: 5px;
  margin-left: -1px;
  width: 10px;
  height: 360px;
  filter: url("#filt");
  -webkit-filter: url("#filt");
}
.wrap .blob {
  display: block;
  cursor: pointer;
  border: none;
  outline: none;
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  z-index: 10;
  background-color: #3b5556;
  /*box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;*/
  /*-webkit-box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;*/
  /*-moz-box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;*/
  /*-o-box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;*/
  /*-ms-box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;*/
}
.blob{
  font-size: 10px !important;
}
.wrap .blob[for="checking"] {
  z-index: 30;
  font-size: 60px;
  text-align: center;
  color: #fff;
  transition: transform 0.5s ease-in-out 0.2s;
  -webkit-transition: -webkit-transform 0.5s ease-in-out 0.2s;
  -moz-transition: transform 0.5s ease-in-out 0.2s;
  -o-transition: transform 0.5s ease-in-out 0.2s;
  -ms-transition: transform 0.5s ease-in-out 0.2s;
}
.wrap .blob:not([for="checking"]) {
  width: 10px;
  height: 10px;
  top:91px;
  left:4px;

/*  top: 15px;
  left: 15px;*/
  font-size: 30px;
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
}
.wrap .blob:not([for="checking"]):hover {
  color: #F44336;
  animation: harlem 0.5s linear forwards;
  -webkit-animation: harlem 0.5s linear forwards;
  -moz-animation: harlem 0.5s linear forwards;
  -o-animation: harlem 0.5s linear forwards;
  -ms-animation: harlem 0.5s linear forwards;
}
.wrap > #checking:checked ~ .blob:nth-child(2) {
  width:35px;
  height:35px;
  font-size: 28px !important;

  margin-left: 52px;
  margin-top: -17px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(3) {
  width:35px;
  height:35px;
  font-size: 28px !important;

  margin-top: 145px;
  margin-left: 66px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(4) {
  width:35px;
  height:35px;
  font-size: 28px !important;

  margin-top: 160px;
  margin-left: 10px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(5) {
  width:35px;
  height:35px;
  font-size: 28px !important;

  margin-top: 8px;
  margin-left: 22px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(6) {
  width:35px;
  height:35px;
  font-size: 28px !important;

  margin-top: 39px;
  margin-left: 50px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(7) {
  width:35px;
  height:35px;
  font-size: 28px !important;

  margin-top: 54px;
  margin-left: 88px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(8) {
  width:35px;
  height:35px;
  font-size: 28px !important;

  margin-top: 112px;
  margin-left: 112px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(9) {
  width:35px;
  height:35px;
  font-size: 28px !important;

  margin-top: -33px;
  margin-left: 89px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob[for="checking"] > .bar:nth-child(1) {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  margin-top: 11px;
  margin-left: 6px;
}
.wrap > #checking:checked ~ .blob[for="checking"] > .bar:nth-child(2) {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  margin-top: -4px;
}
.wrap > #checking:checked ~ .blob[for="checking"] > .bar:nth-child(3) {
  opacity: 0;
}
/*#label-blob{
  display: none;
}*/
#label-blob{
  height:25px;
  width:25px;
  top:88px;
}
@keyframes harlem {
  0% {
    transform: translate(0);
    -webkit-transform: translate(0);
    -moz-transform: translate(0);
    -o-transform: translate(0);
    -ms-transform: translate(0);
  }
  25% {
    transform: translate(5px, 5px);
    -webkit-transform: translate(5px, 5px);
    -moz-transform: translate(5px, 5px);
    -o-transform: translate(5px, 5px);
    -ms-transform: translate(5px, 5px);
  }
  50% {
    transform: translate(-5px, -5px);
    -webkit-transform: translate(-5px, -5px);
    -moz-transform: translate(-5px, -5px);
    -o-transform: translate(-5px, -5px);
    -ms-transform: translate(-5px, -5px);
  }
  75% {
    transform: translate(2px, 2px);
    -webkit-transform: translate(2px, 2px);
    -moz-transform: translate(2px, 2px);
    -o-transform: translate(2px, 2px);
    -ms-transform: translate(2px, 2px);
  }
  100% {
    transform: translate(0);
    -webkit-transform: translate(0);
    -moz-transform: translate(0);
    -o-transform: translate(0);
    -ms-transform: translate(0);
  }
}
@-webkit-keyframes harlem {
  0% {
    transform: translate(0);
    -webkit-transform: translate(0);
    -moz-transform: translate(0);
    -o-transform: translate(0);
    -ms-transform: translate(0);
  }
  25% {
    transform: translate(5px, 5px);
    -webkit-transform: translate(5px, 5px);
    -moz-transform: translate(5px, 5px);
    -o-transform: translate(5px, 5px);
    -ms-transform: translate(5px, 5px);
  }
  50% {
    transform: translate(-5px, -5px);
    -webkit-transform: translate(-5px, -5px);
    -moz-transform: translate(-5px, -5px);
    -o-transform: translate(-5px, -5px);
    -ms-transform: translate(-5px, -5px);
  }
  75% {
    transform: translate(2px, 2px);
    -webkit-transform: translate(2px, 2px);
    -moz-transform: translate(2px, 2px);
    -o-transform: translate(2px, 2px);
    -ms-transform: translate(2px, 2px);
  }
  100% {
    transform: translate(0);
    -webkit-transform: translate(0);
    -moz-transform: translate(0);
    -o-transform: translate(0);
    -ms-transform: translate(0);
  }
}
.writingshit {
  width: 60%;
  margin: 50px auto;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 0 10px 2px #000;
  -webkit-box-shadow: 0 0 10px 2px #000;
  -moz-box-shadow: 0 0 10px 2px #000;
  -o-box-shadow: 0 0 10px 2px #000;
  -ms-box-shadow: 0 0 10px 2px #000;
}
.writingshit .wow {
  padding: 30px;
}
.writingshit .wow p {
  padding: 0 30px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.blobmusic {
  display: block;
  cursor: pointer;
  border: none;
  outline: none;
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #3b5556;
  top:252px;
}
.blobmusic2 {
  display: block;
  cursor: pointer;
  border: none;
  outline: none;
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #3b5556;
  top:286px;
}
.blobvideo {
  display: block;
  cursor: pointer;
  border: none;
  outline: none;
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #3b5556;
  top:123px;
}

.barmusic {
  font-size:27px;
  position:absolute;
  width:17.7px;
  height:18.7px;
  left:3px;
  top:1px;
  color:#fff;
}
.barvideo {
  font-size:27px;
  position:absolute;
  width:17.7px;
  height:18.7px;
  left:4px;
  top:3px;
  color:#fff;
}

.mlogo {
  height: 34px;
  width: 40px;
  margin-left: -8px;
}

.svgs {
  width:10px;
  height:10px;
}
.baranimal {
  font-size:27px;
  position:absolute;
  width:17.7px;
  height:18.7px;
  left:3px;
  top:1px;
  color:#fff;
}
</style>

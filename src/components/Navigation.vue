<template>
  <div @click="timeout5()">
    <main class='container' v-show="isShow" ref='navinfo'>
      <div class='wrap'>
        <input type='checkbox' id='checking' style='display:none;' />
        <button class='blob' @click="jump('/')">&#x2605;</button>
        <button class='blob' ref='nav'>&#x2709;</button>
        <transition name="fade">
          <button class='blob'>&#x2699;</button>
        </transition>
        <button class='blob'>&#x2764;</button>
        <button class='blob'>&#x270C;</button>
        <button class='blob'>&#x270E;</button>
        <button class='blob'>&#x266B;</button>
        <button class='blob'>&#x2706;</button>
        <label class='blob' for='checking' id="label-blob">
          <span class='bar'></span>      
          <span class='bar'></span>
          <span class='bar'></span>
        </label>
      </div>  
    </main>
    <svg>
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
  name: 'Mainframe',
  data() {
    return {
      msg: "当前时间：" + new Date().toLocaleString(),
      isShow:false
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
    }
  },
  mounted(){
    let _this=this;
    document.addEventListener('click',function(e){
      if(!!_this.$refs.navinfo.contains(e.target)) return;
      _this.isShow=true;
      setTimeout(() =>{_this.isShow=false},5000);
      //_this.isShow=false;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  text-align: center;
  padding-top: 100px !important;
}
.bar {

  width:12px;

  display: block;
  /*width: 40px;*/
  height: 3px;
  /*margin: 5px auto;*/
  margin:1px auto;
  background-color: #fff;
  border-radius: 2px;
  transition: all 0.4s linear 0.1s;
  -webkit-transition: all 0.4s linear 0.1s;
  -moz-transition: all 0.4s linear 0.1s;
  -o-transition: all 0.4s linear 0.1s;
  -ms-transition: all 0.4s linear 0.1s;
}
.bar:first-child {
  margin-top: 10px;
  /*margin-top: 27px;*/
}

.wrap {
  position: absolute;
  top: 20px;
  left: 20px;
  margin: auto;
  width: 150px;
  height: 100px;
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
  background-color: #1a787d;
  box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;
  -webkit-box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;
  -moz-box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;
  -o-box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;
  -ms-box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;
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
  width: 20px;
  height: 20px;
  top:3px;
  left:3px;

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
  width:50px;
  height:50px;
  font-size: 30px !important;

  margin-left: 85px;
  margin-top: 10px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(3) {
  width:50px;
  height:50px;
  font-size: 30px !important;

  margin-top: 145px;
  margin-left: 65px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(4) {
  width:50px;
  height:50px;
  font-size: 30px !important;

  margin-top: 160px;
  margin-left: 10px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(5) {
  width:50px;
  height:50px;
  font-size: 30px !important;

  margin-top: 85px;
  margin-left: 10px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(6) {
  width:50px;
  height:50px;
  font-size: 30px !important;

  margin-top: 63px;
  margin-left: 63px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(7) {
  width:50px;
  height:50px;
  font-size: 30px !important;

  margin-top: 65px;
  margin-left: 145px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(8) {
  width:50px;
  height:50px;
  font-size: 30px !important;

  margin-top: 112px;
  margin-left: 112px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob:nth-child(9) {
  width:50px;
  height:50px;
  font-size: 30px !important;

  margin-top: 10px;
  margin-left: 160px;
  background-color: #fff;
}
.wrap > #checking:checked ~ .blob[for="checking"] > .bar:nth-child(1) {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  margin-top: 14px;
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
  height:30px;
  width:30px;
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
</style>

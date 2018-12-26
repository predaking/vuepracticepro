<template>
<!-- 上下左右3*3轮播 -->
<div class="mbird">
  <div class="navstyle" :style="backgroundDiv">
      <Navigation></Navigation>
  </div>
  <!-- Vue过渡组件，绑定了四个样式类 -->
  <transition :enter-class="oe" :enter-active-class="oea" :leave-active-class="ola" :leave-to-class="olt">
    <!-- 利用行元素ul进行3行循环渲染，并定义行指针rIndex -->
    <ul class="swipeitem" style="list-style:none;" v-for="(rlist,rIndex) in rowSideList" :key="rIndex" v-if="rIndex==currentRIndex">
      <!--将列元素li也用transition组件包裹起来 -->
      <transition :enter-class="oe" :enter-active-class="oea" :leave-active-class="ola" :leave-to-class="olt">
        <!-- 将列元素li循环3次渲染为可滑动元素，并定义列指针cIndex与四个方向滑动的方法 -->
        <v-touch tag="li" class="swipeitem" v-for="(clist,cIndex) in rlist.columnSideList" v-if="cIndex==currentCIndex" :key="cIndex" @swipeup="top()" @swipedown="bottom()" @swipeleft="left()" @swiperight="right()">
          <!-- 页面00 -->
          <div class="all00" :style="s00" v-if="rIndex==0&&cIndex==0">

          </div>
          
          <!-- 页面01 -->
          <div class="all01" :style="s01" v-if="rIndex==0&&cIndex==1">

          </div>

          <!-- 页面02 -->
          <div class="all02" :style="s02" v-if="rIndex==0&&cIndex==2">

          </div>

          <!-- 页面10 -->
          <div class="all10" :style="s10" v-if="rIndex==1&&cIndex==0">

          </div>

          <!-- 页面11 -->
          <div class="all11" :style="s11"  v-if="rIndex==1&&cIndex==1">

          </div>

          <!-- 页面12 -->
          <div class="all12" :style="s12" v-if="rIndex==1&&cIndex==2">

          </div>

          <!-- 页面20 -->
          <div class="all20" :style="s20" v-if="rIndex==2&&cIndex==0">

          </div>

          <!-- 页面21 -->
          <div class="all21" :style="s21" v-if="rIndex==2&&cIndex==1">

          </div>
          <!-- 页面22 -->
          <div class="all22" :style="s22" v-if="rIndex==2&&cIndex==2">

          </div>
        </v-touch>
      </transition>
    </ul>
  </transition>
    <div class="ind-rdiv"  v-show="false" style="bottom:40px;">
      <div class="ind-cdiv" v-for="(x,index) in 3" :class="currentCIndex==index&&currentRIndex==0?highlight:''"></div>
    </div>
    <div class="ind-rdiv"  v-show="false" style="bottom:30px;">
      <div class="ind-cdiv" v-for="(x,index) in 3" :class="currentCIndex==index&&currentRIndex==1?highlight:''"></div>
    </div>
    <div class="ind-rdiv"  v-show="false" style="bottom:20px;">
      <div class="ind-cdiv" v-for="(x,index) in 3" :class="currentCIndex==index&&currentRIndex==2?highlight:''"></div>
    </div>
</div>

</template>
<script>
import earth from '../js/earth';
import Navigation from '../components/Navigation.vue';
export default {
  name: "Bird",
  components: {
  Navigation
  },
  data() {
    return {
      // 定义当前行列指针位置
      s00: {
        backgroundImage: 'url(' + require('../assets/Elephant00.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      s01: {
        backgroundImage: 'url(' + require('../assets/Elephant01.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      s02: {
        backgroundImage: 'url(' + require('../assets/Elephant02.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      s10: {
        backgroundImage: 'url(' + require('../assets/Elephant10.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      s11: {
        backgroundImage: 'url(' + require('../assets/Elephant11.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      s12: {
        backgroundImage: 'url(' + require('../assets/Elephant12.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      s20: {
        backgroundImage: 'url(' + require('../assets/Elephant20.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      s21: {
        backgroundImage: 'url(' + require('../assets/Elephant21.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      s22: {
        backgroundImage: 'url(' + require('../assets/Elephant22.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      backgroundDiv: {
        backgroundImage: 'url(' + require('../assets/nav.png') + ')'
      },
      currentRIndex: 0,
      currentCIndex: 0,
      // 定义四个样式类，可在方法中进行替换
      oe: 'on-enter',
      oea: 'on-enter-active',
      ola: 'on-leave-active',
      olt: 'on-leave-to',
      highlight: 'ind-div-active',
      // 定义测试数据列表（嵌套）
      rowSideList: [{
          columnSideList: [{
              name: "1-1",
              cstyle: {
                backgroundColor: "lightblue",
              }
            },
            {
              name: "1-2",
              cstyle: {
                backgroundColor: "green",
              }
            },
            {
              name: "1-3",
              cstyle: {
                backgroundColor: "blue",
              }
            }
          ]
        },
        {
          columnSideList: [{
              name: "2-1",
              cstyle: {
                backgroundColor: "red",
              }
            },
            {
              name: "2-2",
              cstyle: {
                backgroundColor: "purple",
              }
            },
            {
              name: "2-3",
              cstyle: {
                backgroundColor: "black",
              }
            }
          ]
        },
        {
          columnSideList: [{
            name: "3-1",
            cstyle: {
              backgroundColor: "yellow",
            }
          }, {
            name: "3-2",
            cstyle: {
              backgroundColor: "orange",
            }
          }, {
            name: "3-3",
            cstyle: {
              backgroundColor: "gray",
            }
          }]
        }
      ],
    }
  },
  mounted() {
    // this.columnSideList.length;
    // this.loadEarth();
  },
  methods: {
    loadEarth() {
      earth.earthModel();
    },
    left() {
      // 向左滑动时切换样式类，下同
      this.oe = "on-enter-swipeleft";
      this.olt = "on-leave-to-swipeleft";
      // 修改行指针，下同
      if (this.currentCIndex == 2)
        this.currentCIndex = 2;
      else
        this.currentCIndex++;
        $(".ind-rdiv").show().delay(5000).fadeOut();
    },
    right() {
      this.oe = "on-enter-swiperight";
      this.olt = "on-leave-to-swiperight";
      if (!this.currentCIndex)
        this.currentCIndex = 0;
      else
        this.currentCIndex--;
        $(".ind-rdiv").show().delay(5000).fadeOut();
    },
    top() {
      this.oe = "on-enter-swipetop";
      this.olt = "on-leave-to-swipetop";
      if (this.currentRIndex == 2)
        this.currentRIndex = 2;
      else
        this.currentRIndex++;
        $(".ind-rdiv").show().delay(5000).fadeOut();
    },
    bottom() {
      this.oe = "on-enter-swipebottom";
      this.olt = "on-leave-to-swipebottom";
      if (!this.currentRIndex)
        this.currentRIndex = 0;
      else
        this.currentRIndex--;
        $(".ind-rdiv").show().delay(5000).fadeOut();
    }
  }
}
</script>
<style scoped>

/* 对Vue官方的几个类进行样式修改 */
.mbird {
  width: 640px;
  height: 360px;
}
.navstyle {
  position: absolute;
  z-index: 9999;
  height: 360px;
  width: 33px;
  float: left;
}
.ind-rdiv {
  height: 3px;
  width: 12%;
  left: 44%;
  position: absolute;
  display: flex;
  justify-content: space-between;
}

.ind-cdiv {
  background-color: white;
  width: 25%;
}

.ind-div-active {
  height: 5px;
  background-color: #ea8865;
  margin-top: -1px;
}

/* 对Vue官方的几个类进行样式修改 */
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

.on-enter-swipetop {
  opacity: 1;
  transition: .5s ease;
  transform: translateY(360px);
}

.on-leave-to-swipetop {
  opacity: 1;
  transition: .5s ease;
  transform: translateY(-360px);
}

.on-enter-swipebottom {
  opacity: 1;
  transition: .5s ease;
  transform: translateY(-360px);
}

.on-leave-to-swipebottom {
  opacity: 1;
  transition: .5s ease;
  transform: translateY(360px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .5s ease;
}

.slide-fade-leave-active {
  transition: all .5s ease;
}

.slide-fade-enter {
  transform: translateY(360px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-360px);
  opacity: 0;
}

.swipeitem {
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  font-size: 50px;
  color: white;
  position: absolute;
}

.desc {
  position: absolute;
  right: 10%;
  left: 10%;
  bottom: 30px;
  color: white;
  font-size: 35px !important;
  animation: desctf 10s;
  -webkit-animation: desctf 10s;
  /* Safari and Chrome */
}

@-webkit-keyframes desctf {
  from {
    color: black;
    bottom: 0px;
  }

  to {
    color: white;
    bottom: 30px;
  }
}

@keyframes desctf {
  from {
    display: none;
    color: black;
    bottom: 0px;
  }

  to {
    display: block;
    color: white;
    bottom: 30px;
  }
}

.back {
  height: inherit;
  width: -webkit-fill-available;
}

.world {
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  cursor: move;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  cursor: grab;
}

.world-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-size: cover;
}

.world-globe {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
}

.world-globe-pole {
  position: absolute;
  width: 530px;
  height: 530px;
  left: -265px;
  top: -265px;
  border-radius: 50% 50%;
  background-color: #fff;
}

.world-globe-doms-container {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
}

.world-globe-halo {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 730px;
  height: 715px;
  margin-left: -368px;
  margin-top: -350px;
}

.info {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 12px;
}

.info-desc {
  color: #ddd;
  font-size: 10px;
}

a {
  color: #ff5f5f;
}

@keyframes myfirst4 {
  from {
    background: red;
  }

  to {
    background: yellow;
  }
}

@-webkit-keyframes myfirst4

/* Safari and Chrome */
  {
  from {
    background: red;
  }

  to {
    background: yellow;
  }
}


/*单页面*/
.all00 {
  width: 640px;
  height: 360px;
  position: relative;
  float: right;
}
.all01 {
  width: 640px;
  height: 360px;
  position: relative;
  float: right;
}
.all02 {
  width: 640px;
  height: 360px;
  position: relative;
  float: right;
}
.all10 {
  width: 640px;
  height: 360px;
  position: relative;
  float: right;
}
.all11 {
  width: 640px;
  height: 360px;
  position: relative;
  float: right;
}
.all12 {
  width: 640px;
  height: 360px;
  position: relative;
  float: right;
}
.all20 {
  width: 640px;
  height: 360px;
  position: relative;
  float: right;
}
.all21 {
  width: 640px;
  height: 360px;
  position: relative;
  float: right;
}
.all22 {
  width: 640px;
  height: 360px;
  position: relative;
  float: right;
}
.LeftPart {
  position: relative;
  float: left;
  width: 405px;
  height: 100%;
}
.RightPart {
  position: relative;
  float:right;
  width: 235px;
  height: 100%;
}
.Pic {
  position: relative;
  top: 15%;
  left: 12%;
  width: 320px;
  height: 239.67px;
  border-radius: 10px;
}

.Pic1 {
  position: relative;
  top: 10%;
  left: 39%;
  width: 142px;
  height: 139px;
  border-radius: 10px;
}
.Pic2 {
  position: relative;
  top: 50%;
  left: -10%;
  width: 216px;
  height: 129px;
  border-radius: 5px;
}

.MainWord{
    color: #fff;
    display: block;
    overflow: hidden;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.4rem;
    width:200px;
}
.MainWord_h2{
    color: #fff;
    display: block;
    overflow: hidden;
    font-size: 2.0rem;
    font-weight: 400;
    line-height: 2.4rem;

}

</style>

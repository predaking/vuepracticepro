<template>
  <!-- 上下左右3*3轮播 -->
  <div style="display:flex" @swipedown="getDirection()">
    <ul style="list-style:none" v-for="(rlist,rIndex) in rowSideList" :key="rIndex">
      <li v-for="(clist,cIndex) in rlist.columnSideList" :key="cIndex" @click="getIndex(cIndex)">
        {{clist.name}}
      </li>
    </ul>
  </div>

<!-- 旋转地球 -->
<!-- <div>
  <div class="demo-carousel" id="swiper1">
    <div class="world">
      <div class="world-bg">
      </div>
      <div class="world-globe">
        <div class="world-globe-pole"></div>
        <div class="world-globe-doms-container">
        </div>
        <div class="world-globe-halo"></div>
      </div>
      <p class="desc">
        这地球实在太难弄小了
      </p>
    </div>
  </div>
</div> -->


<!-- iview 横向轮播实例（不支持手滑）-->
<!--<Carousel class="carousel" v-model="value1" loop trigger="hover">
  <CarouselItem>
    <div class="demo-carousel" id="swiper1">
      <div class="world">
        <div class="world-bg"></div>
        <div class="world-globe">
          <div class="world-globe-pole"></div>
          <div class="world-globe-doms-container"></div>
          <div class="world-globe-halo"></div>
        </div>
      </div>
    </div>
  </CarouselItem>
  <CarouselItem>
    <div class="demo-carousel" id="swiper2">

    </div>
  </CarouselItem>
  <CarouselItem>
    <div class="demo-carousel" id="swiper3"></div>
  </CarouselItem>
  <CarouselItem>
    <div class="demo-carousel" id="swiper4">4</div>
  </CarouselItem>
</Carousel>
-->
</template>
<script>
import earth from '../js/earth';
export default {
  name: "Swiper",
  data() {
    return {
      value1: 0,
      rowSideList:[{
        columnSideList:[{
          name:"1-1",
          cstyle:{
            backgroundColor:"red",
          }
        },{
          name:"1-2",
          cstyle:{
            backgroundColor:"green",
          }
        },{
          name:"1-3",
          cstyle:{
            backgroundColor:"blue",
          }
        }]
      },{
        columnSideList:[{
          name:"2-1",
          cstyle:{
            backgroundColor:"red",
          }
        },{
          name:"2-2",
          cstyle:{
            backgroundColor:"green",
          }
        },{
          name:"2-3",
          cstyle:{
            backgroundColor:"blue",
          }
        }]
      },{
        columnSideList:[{
          name:"3-1",
          cstyle:{
            backgroundColor:"red",
          }
        },{
          name:"3-2",
          cstyle:{
            backgroundColor:"green",
          }
        },{
          name:"3-3",
          cstyle:{
            backgroundColor:"blue",
          }
        }]
      }],

    }
  },
  mounted() {

    // this.loadEarth();
  },
  methods: {
    loadEarth() {
      earth.earthModel();
    },
    getIndex(index){
      console.log(index);
    },
    getDirection(){
      console.log("下滑了");
    }
  }
}
</script>
<style scoped>
.carousel {
  height: -webkit-fill-available;
}

.demo-carousel {
  height: -webkit-fill-available;
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
  background-color: red;
}

#swiper2 {
  background-color: green;
}

#swiper3 {
  background-color: blue;
}

#swiper4 {
  background-color: purple;
  animation: myfirst 5s;
  -webkit-animation: myfirst4 5s;
  /* Safari and Chrome */
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
</style>

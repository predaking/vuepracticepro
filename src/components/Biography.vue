<template>
  <div class="wrapper">
    <p class="learn">
      This is a demo, <a href="https://paulrhayes.com/2009-04/auto-scrolling-parallax-effect-without-javascript/">learn how it works</a>.
    </p>
    
    <p class="learn">hahh</p>

    <div id="experiment">
      <div id="background"></div>
      <div id="content">
        <h2 class="learn">Mouse over to begin animation</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
    
  </div>
</template>

<script>
$(function(){
  $(".learn").click(function(){
    alert(1)
  })
}
)
export default {
  name: 'Biography',
  data() {
    return {
      msg: "当前时间：" + new Date().toLocaleString()
    }
  },
  methods: {
    jump(e) {
      this.$router.push(e);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  text-align: center;
  padding-top: 100px !important;
}

#background {
    background: url('../assets/foreground.png') 5% 5%, url('../assets/midground.png') 50% 50%, url('../assets/background.png') 90% 110%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    -webkit-transition: left 300s linear;
    -moz-transition: left 300s linear;
    -o-transition: left 300s linear;
    -ms-transition: left 300s linear;
    transition: left 300s linear;
}

#experiment:target #background {
    left: -5000px;
}

#experiment:hover #background {
    left: -9999px;
}

#content {
    margin: 6em 10em;
    background-color: #333;
    opacity: 0.95;
    color: #ccc;
    padding: 3em;
    border: 2px solid #666;
}

#content h2 {
    margin: 1em 0;
    font-weight: bold;
    font-size:  26px;
    color: #fff;
}
</style>

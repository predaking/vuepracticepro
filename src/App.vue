<template>
<div class="layout">
    <router-view></router-view>
</div>

</template>

<script>
/* eslint-disable */
export default {
  name: 'App',
  data() {
    return {
      currentposition:"",
      breadcrumbitem:["首页","式神"]
    }
  },
  methods:{
    selectName(name){
        this.breadcrumbitem[2]=name;
    },
    getCurrentPath(){
      this.currentposition=this.$route.path.slice(1);
    }
  },
  mounted(){
    this.getCurrentPath();
  },
  watch:{
      '$route':'getCurrentPath'
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

/* a{
  color:unset !important;
} */
.layout{
  background: #192027;
  position: relative;
  overflow: hidden;
  height: auto;
  -webkit-height:-webkit-fill-available;
}

.layout-logo {
  width: 50px;
  height: 50px;
  /* background: #5b6270; */
  border-radius: 3px;
  float: right;
  position: relative;
  top: 7px;
  /* left: 20px; */
}

.system-logo {
  width: 50px;
  height: 50px;
  /* background: #5b6270; */
  border-radius: 3px;
  float: left;
  position: relative;
  top: 7px;
  /* left: 20px; */
}



</style>

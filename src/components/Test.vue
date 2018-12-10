<template>
  <div class="tt" id="tt" @click="aa()">
    练习
  </div>
</template>
<script>
import test from '../js/test';
  export default{
    name:'Test',
    data(){
      return{

      }
    },
    methods:{
      aa(){
        test.b();
        test.a();
        test.c();
      }
    }
  }
</script>
<style scoped>
.tt{
  height:100px;
  width:100px;
  background-color: red;
}
</style>

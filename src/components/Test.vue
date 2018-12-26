<template>
  <div class="tt" id="tt" @click="aa()">
    <Navigation></Navigation>
  </div>
</template>
<script>
import test from '../js/test';
import Navigation from '../components/Navigation.vue';
  export default{
    name:'Test',
    components:{
      Navigation
    },
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

</style>

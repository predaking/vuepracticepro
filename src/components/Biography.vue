<template>

</template>

<script>
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
.example{background:#FFF;width:730px;border:1px #000 solid;margin:20px auto;padding:15px;-moz-border-radius: 3px;-webkit-border-radius: 3px}

#water {
    width:500px;
    height:400px;
    display: block;
    margin:0px auto;
    cursor:pointer;
}
#switcher {
    text-align:center;
    overflow:hidden;
    margin:15px;
}
#switcher img {
    width:160px;
    height:120px;
}
</style>

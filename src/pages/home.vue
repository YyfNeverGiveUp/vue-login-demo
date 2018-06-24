<template>
  <div>
    <h3>欢迎 {{name}}</h3>
    <a href="#" @click="quit">注销登录</a>
  </div>
</template>

<script>
import {setInfo,getInfo} from '../api/storage'
export default {
  name: 'home',
  data () {
    return {
      name: ''
    }
  },
  created(){
    var userInfo=getInfo();
    var num=userInfo.length-1;
    for (var i in userInfo[num]){
      this.name=i
    }
  },
  methods:{
    quit(){
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

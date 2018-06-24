<template>
    <div>
        <h3>所有注册用户</h3>
        <ul>
            <li v-for="item in name">
                {{item}}
            </li>
        </ul>
        <a href="#" @click="quit">注销登录</a>
    </div>
</template>

<script>
import {setInfo,getInfo} from '../api/storage'
export default {
  name: 'admin',
  data () {
    return {
      name:[]
    }
  },
  created(){
    var userInfo=getInfo();
    for (var i=0;i<userInfo.length;i++){
      for(var x in userInfo[i]){
        this.name.push(x)
      }
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
<style>
    ul{padding: 0;}
    ul li{list-style: none;}
</style>
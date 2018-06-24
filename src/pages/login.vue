<template>
      <div>
        <div class="login-wrap" v-show="showLogin">
            <h3>登录</h3>
            <p v-show="showInfo">{{info}}</p>
            <input type="text" placeholder="请输入用户名" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="password">
            <button @click="login">登录</button>
            <span @click="ToRegister">没有账号？马上注册</span>
        </div>

        <div class="register-wrap" v-show="showRegister">
            <h3>注册</h3>
            <p v-show="showInfo">{{info}}</p>
            <input type="text" placeholder="请输入用户名" v-model="newUsername">
            <input type="password" placeholder="请输入密码" v-model="newPassword">
            <button @click="register">注册</button>
            <span @click="ToLogin">已有账号？马上登录</span>
        </div>
    </div>
</template>

<script>
import {setInfo,getInfo} from '../api/storage'
export default {
  name: 'login',
  data () {
    return {
      showLogin: true,
      showRegister: false,
      showInfo: false,
      info: '',
      username: '',
      password: '',
      newUsername: '',
      newPassword: '',
      data1:[],
      arr:[]
    }
  },
  methods:{
    login(){
      if(this.username=="" || this.password==""){
        alert('请输入用户名或者密码')
      }else{    
       var name=this.username;
       var code=this.password;
       var userInfo=getInfo();
       var arr=[];
       var checkOut;
       var obj={}
       console.log(userInfo)
       for(var i=0;i<userInfo.length;i++){
        for(var x in userInfo[i]){
          arr.push(x);
          if(x===name && userInfo[i][x]!==code){
            alert("密码错误");
            checkOut=false;
          }else if(x===name && userInfo[i][x]==code){
            checkOut=true
          }
        }
      }
      if(arr.indexOf(name)<0){
        alert("用户名不存在")
      }else if(checkOut){
        if(name==="yyf"){
          alert("欢迎管理员登录成功");
          this.$router.push('/admin');
        }else{
      alert("恭喜皮皮鸡登录成功")
      obj[name]=code;
      userInfo.push(obj);
      console.log(userInfo)
      setInfo(userInfo);
      this.$router.push('/home');
    }
      }
    }
  },
  ToRegister(){
    this.showLogin=false;
    this.showRegister=true
  },
  ToLogin(){
    this.showLogin=true;
    this.showRegister=false
  },
  register(){
    var name=this.newUsername;
    var code=this.newPassword;
    var obj={};
    var arr=[];
    var userInfo=getInfo(); 
    for(var i=0;i<userInfo.length;i++){
      for(var x in userInfo[i]){
        arr.push(x);
      }
    }
    console.log(arr);
    if(name=="" || code==""){
      alert("请输入用户名或者密码")
    }else if(arr.indexOf(name)>=0){
      alert("已存在用户名")
    }else{
      obj[name]=code;
      userInfo.push(obj);
      console.log(userInfo)
      setInfo(userInfo);
      alert("注册成功");
      this.$router.push('/home')
    }
  }
},

created(){
  this.$axios.get('/api/getInfo').then((res)=>{
   this.data1=res.data.data;
   // console.log(this.data1);
   var data2=this.data1
   setInfo(data2);
   // console.log(this.data1)
 })
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login-wrap{text-align:center;}
    input{
      display:block; 
      width:250px; 
      height:40px; 
      line-height:30px; 
      margin:0 auto; 
      margin-bottom: 10px; 
      outline:none; 
      border:1px solid #888; 
      border-radius: 5px;
      padding:10px; 
      box-sizing:border-box;
      -webkit-appearance: none;
    }
    p{
      color:red;
    }
    button{
      display:block; 
      width:250px; 
      height:40px; 
      line-height: 40px; 
      margin:0 auto; 
      border:none; 
      border-radius: 5px;
      background-color:#41b883; 
      color:#fff; 
      font-size:16px; 
      margin-bottom:5px;
    }
    span{
      cursor:pointer;
    }
    span:hover{
      color:#41b883;
    }
</style>

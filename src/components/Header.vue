<template>
<div class="theHeader">
  <div class="header">

    <div class="logoHeader" @mouseenter="change()" @mouseleave="change()">
      <router-link to="./home">
        <img v-show="me"  src="../assets/Header/logo.png" height="60px">
        <img v-show="!me" src="../assets/Header/logo-hover.png" height="60px">
      </router-link>
      <transition name="logoHeaderTwo">
        <div v-show="!me" class="headerTwo">
          <div><router-link to="./news">情报资讯</router-link></div>
          <div><router-link to="./character">角色信息</router-link></div>
          <div><router-link to="./design">设定概念</router-link></div>
        </div>
      </transition>
    </div>
    <div class="loginAndRegister">
      <router-link class="aText1" to="./login">登录</router-link>
      <div class="borderBox"></div>
      <router-link class="aText2" to="./register">注册</router-link>
    </div>

  </div>
</div>
</template>

<script>
  export default {
    name:'Header',
    data(){
      return{
        me:true,
        headerFlag:false,
        imageSRC: '../assets/Header/logo.png'
      }
    },
    methods:{
      change(){
        this.me = !this.me 
      },
    },
  }
</script>

<style scoped>
  .theHeader{
    opacity: 0.9;
  }
  .borderBox{
    height: 18px;
    border-left: 2px solid #fff;
    margin:auto;
  }
  .header{
    background-color: rgb(25, 25, 25);
    display: flex;
    box-shadow: 0px 6px 14px 0px rgb(0 0 0 / 80%);
    height: 60px;
  }
  .aText1{
    color:white;
    font-size: 18px;
    margin:auto;
    width:38px;
  }
  .aText2{
    color:white;
    font-size: 18px;
    margin:auto;
    width:50px;
  }
  .logoHeader{
    width: 1770px;
  }
  .logoHeader img{
    margin-left: 20px;
  }
  .loginAndRegister{
    display: flex;
    width:150px;
  }
  a:hover{
    color:white;
    text-shadow: 0 0 10px white, 0 0 20px white, 0 0 40px white;
    text-decoration: none;
  }
  .headerTwo{
      opacity: 0.65;
      color: rgb(255, 255, 255);
      font-size: 16px;
  }
  .headerTwo div{
      background-color: rgb(25, 25, 25);
      height: 60px;
      width: 200px;
      box-shadow: 0px 6px 14px 0px rgb(0 0 0 / 80%);
      display: flex;
  }
  .headerTwo div a{
      margin: auto;
  }
  .headerTwo div a:hover{
      color:white;
      text-shadow: 0 0 10px rgb(210, 210, 210), 0 0 20px rgb(210, 210, 210), 0 0 40px rgb(210, 210, 210);
      text-decoration: none;
  }

  /* .logoHeaderTwo-enter{
    height: 0px;
  }
  .logoHeaderTwo-enter-to{
    height: 180px;
  }
  .logoHeaderTwo-enter-alive{
    transition: 1.6s all linear
  }

  .logoHeaderTwo-leave{
    height: 180px;
  }
  .logoHeaderTwo-leave-to{
    height: 0px;
  }
  .logoHeaderTwo-leave-alive{
    transition: 1.6s all linear
  } */
</style>
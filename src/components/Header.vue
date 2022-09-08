<template>
<div>
  <div class="header">
    <div @mouseenter="change()" @mouseleave="change()">
      <router-link to="./home">
        <img v-show="!logoHoverFlag" src="../assets/Header/logo.png">
        <transition name="logo">
          <img v-show="logoHoverFlag" src="../assets/Header/logo-hover.png">
        </transition>
      </router-link>
      <transition name="list">
        <div v-show="logoHoverFlag" class="headerTwo">
          <div class="headerTwoDiv"><router-link to="./news">情报资讯<div class="underline"></div></router-link></div>
        </div>
      </transition>
    </div> 

      <div class="i"></div>
    <div v-if="!logined" class="loginAndRegister">
      <router-link class="routerLink"
      @click.native="choiceLogin()"
       to="./login">登录</router-link>
      <div class="borderBox"></div>
      <router-link class="routerLink"
      @click.native="choiceRegister()"
       to="./login">注册</router-link>
    </div>
    <div v-if="logined" class="loginAndRegister">
      <router-link class="routerLink"
       to="./me">我的</router-link>
      <div class="borderBox"></div>
      <a href="" @click.prevent="exit()"
      class="routerLink"
       to="./">退出</a>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name:'Header',
  data() {
    return {
      logoHoverFlag: false,
      loginFlag:false,
    }
  },
  methods: {
    change(){
      this.logoHoverFlag = !this.logoHoverFlag
    },
    choiceLogin(){
      this.$store.state.loginAndRegisterChoice = true
    },
    choiceRegister(){
      this.$store.state.loginAndRegisterChoice = false
    },
    exit(){
      this.$store.state.logined = false;
      this.$store.state.login = {};
      // console.log(this.$store.state)
    }
  },
  components:{
  },
  computed:{
    logined(){
      return this.$store.state.logined
    }
  },
  props:[
    'showLogin'
  ]
}
</script>

<style scoped>
.header{
  opacity: 0.9;
  display: flex;
  background-color: rgb(25, 25, 25);
  box-shadow: 0px 6px 14px 0px rgb(0 0 0 / 80%);
  height: 60px;
}
.header img{
  height: 60px;
  position: fixed;
  left: 20px
}
.i{
  width: 90%;
}
.borderBox{
  height: 18px;
  border-left: 2px solid #fff;
  margin:auto;
}
.loginAndRegister{
  width: 8%;
  min-width: 125px;
  display: flex;
}
.routerLink{
  margin: auto;
  color:white;
  font-size: 18px;
}
a:hover{
  color:white;
  text-shadow: 0 0 10px white, 0 0 20px white, 0 0 40px white;
  transition: text-shadow 0.3s ease;
  text-decoration: none;
}
.headerTwo{
  opacity: 0.65;
  color: rgb(255, 255, 255);
  font-size: 16px;
  position: fixed;
  top:60px;
  left:0px;
}
.headerTwoDiv{
    background-color: rgb(25, 25, 25);
    height: 60px;
    width: 200px;
    box-shadow: 0px 6px 14px 0px rgb(0 0 0 / 80%);
    display: flex;
}
.headerTwo div a{
    margin: auto;
    border-bottom: 2px solid rgb(25, 25, 25);
}
.headerTwo div a:hover{
    color:white;
    text-shadow: 0 0 10px rgb(210, 210, 210), 0 0 20px rgb(210, 210, 210), 0 0 40px rgb(210, 210, 210);
    text-decoration: none; 
    transform: translateX(10px);
    transition: all 0.3s ease;
}

.logo-enter{
  opacity: 0.6;
}
.logo-enter-to{
  opacity: 1;
}
.logo-enter-active{
  transition: 0.6s all ease;
}

.list-enter{
  transform: translateX(-200px);
}
.list-enter-to{
  transform: translateX(0px);
}
.list-enter-active{
  transition: 0.6s all ease;
}
.list-leave{
  transform: translateX(0px);
}
.list-leave-to{
  transform: translateX(-200px);
}
.list-leave-active{
  transition: 0.6s all ease;
}
</style>
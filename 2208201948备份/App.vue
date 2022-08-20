<template>
  <div class="app">
    
    <transition name="black">
    <StartPage v-if="!startFlag" :start="start"/>
    </transition>
    
    <transition name="black">
    <div class="thePage" v-if="startFlag">

      <div class="header">
      <Header/>
      <HeaderTwo v-show="headerFlag"/>
      </div>

      <div class="routerView">
        <router-view></router-view>
      </div>

      <div v-show="this.$route.path == '/home'" class="footer">
        <Footer/>
      </div>

    </div>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import StartPage from './components/StartIndex.vue'
import HeaderTwo from './components/HeaderTwo.vue'

  export default {
    name:'app',
    data() {
      return {
        startFlag:false,
      }
    },
    components:{
      Header,
      Footer,
      StartPage,
      HeaderTwo
    },
    methods: {
      start(){
        this.startFlag = !this.startFlag
      },
    },
    mounted() {
    },
  }
</script>

<style scoped>
.app{
  position: relative;
}
.header{
  position: absolute;
  z-index: 1;
}
.routerView{
  position: absolute;
  z-index: -1;
}
.footer{
  position: absolute;
  margin-top: 400px;
  margin-left: 30px;
}
.thePage{
  background-color: rgb(25, 25, 25);
}
</style>
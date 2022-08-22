<template>
  <div class="app">
    
    <transition name="black">
    <StartPage 
      v-if="!startFlag" 
      :start="start"
      :startIndexHeight="startIndexHeight"
      :startIndexWidth="startIndexWidth"
    />
    </transition>
    
    <transition name="black">
    <div class="thePage" v-if="startFlag">

      <div class="header">
      <Header :logoWidth="logoWidth"/>
      </div>

      <div class="routerView">
      <Home 
        v-show="this.$route.path == '/'"
        :smallImgWidth="smallImgWidth" 
        :smallImgHeight="smallImgHeight"
        :imgHeight="imgHeight"
        :imgWidth="imgWidth"
      />
      <router-view></router-view>
      </div>

      <div v-show="footerFlag && this.$route.path == '/'" class="footer" :style="{'margin-top':footerHeight}">
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
import Home from './components/Home.vue'
import News from './pages/News.vue'

  export default {
    name:'app',
    data() {
      return {
        startFlag:false,
        footerFlag:true,

        logoWidth:'',
        smallImgWidth:'',
        smallImgHeight:'',
        footerHeight:'',
        startIndexHeight:'',
        startIndexWidth:'',
        imgWidth:'',
        imgHeight:'',
        news0Width:'',
      }
    },
    components:{
      Header,
      Footer,
      StartPage,
      Home,
      News,
    },
    methods: {
      start(){
        this.startFlag = !this.startFlag
      },
      getLogoWidth(){
        const i = window.innerWidth - 150
        const j = i+'px'
        this.logoWidth = j
      },
      getSmallImgWidth(){
         const i = window.innerWidth - 110
         const j = i + 'px'
         this.smallImgWidth = j
      },
      getSmallImgHeight(){
        const i = window.innerHeight/2
        const j = i + 'px'
        this.smallImgHeight = j
      },
      getFooterHeight(){
        if(window.innerHeight <= 535){
          this.footerFlag = false
        }else if(this.$route.path == '/'){
            this.footerFlag = true
            const i = window.innerHeight - 130
            const j = i + 'px'
            this.footerHeight = j
          }
      },
      getStartIndex(){
        this.startIndexHeight = window.innerHeight+'px'
        this.startIndexWidth = window.innerWidth+'px'
      },
      getImg(){
        this.imgWidth = window.innerHeight*2+'px'
        this.imgHeight = window.innerHeight+10 +'px'
        if(window.innerHeight*2<window.innerWidth){
          this.imgWidth = window.innerWidth + 'px'
          this.imgHeight = window.innerWidth/2 + 'px'
        }
      },
      getNews0Width(){
        const i = window.innerWidth-100
        const j = i + 'px'
        this.news0Width = j
        this.$route.params.news0Width = this.news0Width
        console.log("$router.params.new0Width："+ this.$route.params.news0Width)
      }
    },
    mounted() {
      this.getLogoWidth()
      this.getSmallImgWidth()
      this.getSmallImgHeight()
      this.getFooterHeight()
      this.getStartIndex()
      this.getImg()
      this.getNews0Width()
      window.onresize = () =>{
          let that = this
          that.getLogoWidth()
          that.getSmallImgWidth()
          that.getSmallImgHeight()
          that.getFooterHeight()
          that.getStartIndex()
          that.getImg()
          that.getNews0Width()
      }
    },
    computed:{
    }
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
  /* margin-top: 400px; */
  margin-left: 30px;
}
.thePage{
  background-color: rgb(25, 25, 25);
}
</style>
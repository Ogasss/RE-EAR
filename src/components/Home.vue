<template>
  <div class="home">
    <div class="bigImg">
      <transition name="black">
        <img class="blackBackground" v-show="blackShow" src="../assets/Home/0.png">
      </transition>
      <img :style="{'height': imgHeight,'width': imgWidth}" v-show="imgId==1" src="../assets/Home/1.png">
      <img :style="{'height': imgHeight,'width': imgWidth}" v-show="imgId==2" src="../assets/Home/2.png">
      <img :style="{'height': imgHeight,'width': imgWidth}" v-show="imgId==3" src="../assets/Home/3.png">
      <img :style="{'height': imgHeight,'width': imgWidth}" v-show="imgId==4" src="../assets/Home/4.png">
    </div>
    <div class="smallImg">

      <img class="smallImgL" :style="{'margin-right': smallImgWidth,'margin-top': smallImgHeight}" v-show="smallImgFlagL" @mouseenter="changeL()" @mouseleave="changeL()" src="../assets/Home/箭头-左.png">
      
      <a @click.prevent="changeImgL()" href="">
        <img class="smallImgL" :style="{'margin-right': smallImgWidth,'margin-top': smallImgHeight}" v-show="!smallImgFlagL" @mouseenter="changeL()" @mouseleave="changeL()" src="../assets/Home/箭头-左-悬浮.png">
      </a>
      
      <img class="smallImgR" :style="{'margin-top': smallImgHeight}" v-show="smallImgFlagR" @mouseenter="changeR()" @mouseleave="changeR()" src="../assets/Home/箭头-右.png">
      
      <a @click.prevent="changeImgR()" href="">
        <img class="smallImgR" :style="{'margin-top': smallImgHeight}" v-show="!smallImgFlagR" @mouseenter="changeR()" @mouseleave="changeR()" src="../assets/Home/箭头-右-悬浮.png">
      </a>

    </div>
  </div>
</template>

<script>
  
  export default {
    name:'Home',
    data() {
      return {
        smallImgFlagL:true,
        smallImgFlagR:true,
        imgId:1,
        blackShow:true,
      }
    },
    props:[
      'smallImgWidth',
      'smallImgHeight',
      'bigImgHeight',
      'bigImgWidth',
      'imgHeight',
      'imgWidth'
    ],
    methods: {
      changeL(){
        this.smallImgFlagL = !this.smallImgFlagL
      },
      changeR(){
        this.smallImgFlagR = !this.smallImgFlagR
      },
      changeImgL(){
        if(this.imgId == 1){
          this.imgId = 4
        }else{
          this.imgId--
        }
      },
      changeImgR(){
        if(this.imgId == 4){
          this.imgId = 1
        }else{
          this.imgId++
        }
      },

    },
    watch:{
      imgId:{
        handler(){
           setTimeout(()=>{
            this.blackShow = !this.blackShow
          },100);
            this.blackShow = !this.blackShow
        }
      },
    },
    mounted() {
      setTimeout(()=>{
        this.blackShow = !this.blackShow
      },1000);
      setInterval(() => {
        this.changeImgR()
      }, 15000);

    },
  }
</script>

<style scoped>
  .home{
    transform:translateY(-10px);
    /* 实现上移动导航栏覆盖 */
    position: relative;
    /* 实现箭头 */

  }
  .bigImg{
    display: flex;
    /* 实现轮播图 */
    position: absolute;
    /* 实现箭头与轮播图覆盖问题 */
    overflow: hidden;
  }
  .bigImg img{
    height: 947px;
    width: 1920px;
  }
  .smallImg{
    position: absolute;
    /* 实现箭头与轮播图覆盖问题 */
    display:flex;
    /* 实现箭头同行 */
  }
  .smallImg img{
    height: 100px;
    width: 45px;

    /* margin-top: 450px; */
    opacity: 0.8;
    /* 实现箭头下移至屏幕中心 */
  }
  .smallImgL{
    margin-left: 10px;

    /* margin-right: 1810px; */
    /* 实现箭头移动至屏幕两侧 */
  }
  .samllImgR{
    margin-right: 10px;
  }
  .blackBackground{
    position: absolute;
    z-index: 10;
  }



  .black-leave{
    opacity: 0.6;
  }
  .black-leave-to{
    opacity: 0;
  } 
  .black-leave-active{
    transition: 0.8s all linear;
  }
</style>
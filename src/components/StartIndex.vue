<template>
  <div class="StartPage">
      <transition name="logo">
      <div v-show="keyShow" class="key">
        <a @click.prevent="startBtn()" href="">
          <img v-show="me" @mouseenter="change()" @mouseleave="change()" src="../assets/Header/logo.png">
          <img v-show="!me" @mouseenter="change()" @mouseleave="change()" src="../assets/Header/logo-hover2.png">          
        </a>
      </div>
      </transition>
  </div>
</template>

<script>
export default {
name:'StartPage',
data() {
    return {
      me:true,
      keyShow:true
    }
},
methods: {
  startBtn(){
    this.start()
  },
  change(){
    this.me = !this.me
  }
},
props:[
    'start'
]
}
</script>

<style scoped>
.StartPage{
  background-color: rgb(25,25,25);
  height: 945px;
  width: 1920px;
  display: flex;
}
.StartPage div{
  opacity: 0.7;
  margin: auto;
}
.StartPage div img{
  margin-left: 30%;
  width: 50%;
  height: 50%;
}

</style>
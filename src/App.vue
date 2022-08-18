<template>
  <div class="app">
    这是app
    <Demo1/>
  </div>
</template>

<script>
  //引入App外壳组件
  import Demo1 from './components/demo1.vue'
  
  export default {
    name:'App',
    components:{Demo1}
  }
</script>

<style>
</style>
<template>
  <div class="headerTwo">
        <div><router-link to="./news">情报资讯</router-link></div>
        <div><router-link to="./character">角色信息</router-link></div>
        <div><router-link to="./design">设定概念</router-link></div>
  </div>
</template>

<script>
export default {
name:"HeaderTwo",
data() {
    return {
        
    }
},
}
</script>

<style>
    .headerTwo{
        background-color: rgb(25, 25, 25);
        opacity: 0.65;
        color: rgb(255, 255, 255);
        font-size: 16px;
        height: 60px;
        display: flex;
        box-shadow: 0px 6px 14px 0px rgb(0 0 0 / 80%);
    }
    .headerTwo div{
        height: 60px;
        width: 638px;
        margin:auto;
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
</style>
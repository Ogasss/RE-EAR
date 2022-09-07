<template> 
  <div class="theLogin">
    <BlackBackground/>
    <div class="loginAndRegister">
      <transition name="loginImg">
        <a class="theLoginA" v-show="imgFlag && theWidthFlag" @click.prevent="imgChange()" href=""> 
            <img class="theImg" src="../assets/TheLogin/1.png">
        </a>
      </transition>
      <transition name="registerImg">
        <a class="theLoginA2" v-show="!imgFlag && theWidthFlag" @click.prevent="imgChange()" href="">
            <img class="theImg" src="../assets/TheLogin/2.png">
        </a>
      </transition>
      <transition name="loginAndRegister">
        <div class="login" v-show="imgFlag" :style="{'transform':loginChange}">
          <form action="GET" novalidate>
              <img  @mouseleave="logoChange()" class="logo" src="../assets/Header/logo-hover2.png">
            <div id="tel" class="wrapper">
              <div class="input-data">
                  <input v-model="loginTelValue" 
                    type="text"
                    required>
                  <div class="underline"></div>
                  <label>{{loginTel}}</label>
              </div>
            </div>

            <div id="password" class="wrapper">
              <div class="input-data">
                  <input v-model="loginPasswordValue"
                    :type="passwordInput" 
                    @mouseenter="passwordInput = 'text'" @mouseleave="passwordInput = 'password'" 
                   required>
                  <div class="underline"></div>
                  <label>{{loginPassword}}</label>
              </div>
            </div>

            <div class="btn">
              <button @click.prevent="loginCheck()">登&nbsp&nbsp录</button>
            </div>

            <div class="change">
              <a @click.prevent="imgChange()" href="">没有账号？</a>
            </div>
          </form>
        </div>
      </transition>
      <transition name="loginAndRegister">
        <div class="register" v-show="!imgFlag">
          <form action="GET" novalidate>
            <div id="tel2" class="wrapper">
              <div class="input-data">
                  <input type="text" v-model="registerTelValue" required>
                  <div class="underline"></div>
                  <label>{{registerTel}}</label>
              </div>
            </div>
            
            <div id="password2" class="wrapper">
              <div class="input-data" id="passwordInput">
                  <input v-model="registerPasswordValue"
                    :type="passwordInput" @mouseenter="passwordInput = 'text'" @mouseleave="passwordInput = 'password'" required>
                  <div class="underline"></div>
                  <label>{{registerPassword}}</label>
              </div>
            </div>

            <div id="password3" class="wrapper">
              <div class="input-data" id="passwordInput">
                  <input v-model="registerPasswordReValue"
                    :type="passwordInput" @mouseenter="passwordInput = 'text'" @mouseleave="passwordInput = 'password'" required>
                  <div class="underline"></div>
                  <label>{{registerPasswordRe}}</label>
              </div>
            </div>

            <div id="checkWord2" class="wrapper">
              <div class="input-data">
                  <input v-model="registerCheckWordValue" type="text" required>
                  <div class="underline"></div>
                  <label>{{registerCheckWord}}</label>
                  <div class="btn2">
                    <button @click.prevent="createCheckWord()" id="send2">发&nbsp&nbsp&nbsp&nbsp送</button>
                  </div>
              </div>
            </div>

            <div id="btn2" class="btn">
              <button>注&nbsp&nbsp册</button>
            </div>

            <div class="change">
              <a @click.prevent="imgChange()" href="">已有账号？</a>
            </div>
          </form>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import BlackBackground from '../components/BlackBackground.vue'
export default {
name:"Login",
data() {
    return {
        imgFlag: true,
        logoFlag: true,
        theWidthFlag: true,
        passwordInput:'password',
        loginChange: '',
        old: 0,

        loginTelValue:'',
        loginPasswordValue:'',

        registerTelValue:'',
        registerPasswordValue:'',
        registerPasswordReValue:'',
        registerCheckWordValue:'',
        TheCheckWord:'',


        loginTel:'手机号',
        loginPassword:'密码',
        registerTel:'手机号',
        registerPassword:'密码',
        registerPasswordRe:'确认密码',
        registerCheckWord:'验证码',
    }
},
methods: {
  logoChange(){
    this.logoFlag = !this.logoFlag
  },
  imgChange(){
    this.imgFlag = !this.imgFlag
  },
  lARchange(){
    this.lARflag = !this.lARflag
    this.imgChange()
  },
  widthFlag(){
    if(window.innerWidth < 650){
      this.loginChange = 'translateX(15%)'
      this.theWidthFlag = false
      return this.logoChange
    }
    if(window.innerWidth > 650){
      this.loginChange = 'translateX(100%)'
      this.theWidthFlag = true
      return this.logoChange
    }
  },

  createCheckWord(){
    var num = '';
    for(let i=0;i<6;i++){
      num += Math.floor(Math.random()*10);
    }
    this.TheCheckWord = num
    alert(this.TheCheckWord)
  },

  TelCheck(value){
    if(value.length != 11){
      return '请输入十一位手机号！'
    }else{
      if(isNaN(value)){
        return '手机号含有非数字！'
      }else{
        if(value[0] != 1){
          return '手机号格式不正确！'
        }else{
          return '手机号 √'
        }
      }
    }
  },

  PasswordCheck(value){
    const ruler = /^[A-Z0-9a-z()~_./+-@&]*$/;
    if(value.length < 8){
      return '密码至少需要八位！'
    }else{
      if(value.length >16){
        return '密码应小于十六位！'
      }else{
        if(!ruler.test(value)){
          return '密码含有非法字符！'
        }else{
          return '密码√'
        }
      }
    }
  },

  PasswordReCheck(){
    if(this.registerPasswordValue != this.registerPasswordReValue){
      return '两次输入密码不一致！'
    }else{
      return '确认密码 √'
    }
  },

  CheckWordCheck(value){
    const that = this
    if(value.length != 6){
      return '请输入六位验证码！'
    }else{
      if(value !== that.TheCheckWord){
        return '验证码不正确！'
      }else{
        return '验证码 √'
      }
    }
  }
},
components:{
  BlackBackground
},
watch:{
  loginTelValue:{
    immediate:true,
    handler(){
      if(this.loginTelValue == ''){
        this.loginTel = '手机号'
      }else{
        this.loginTel = this.TelCheck(this.loginTelValue)
      }
    }
  },
  registerTelValue:{
    immediate:true,
    handler(){
      if(this.registerTelValue == ''){
        this.registerTel = '手机号'
      }else{
        this.registerTel = this.TelCheck(this.registerTelValue)
      }
    }
  },
  registerPasswordValue:{
    immediate:true,
    handler(){
      if(this.registerPasswordValue == ''){
        this.registerPassword = '密码'
      }else{
        this.registerPasswordRe = this.PasswordReCheck()
        this.registerPassword = this.PasswordCheck(this.registerPasswordValue)
      }
    }
  },
  registerPasswordReValue:{
    immediate:true,
    handler(){
      if(this.registerPasswordReValue == ''){
        this.registerPasswordRe = '确认密码'
      }else{
        this.registerPasswordRe = this.PasswordReCheck()
      }
    }
  },
  registerCheckWordValue:{
    immediate: true,
    handler(){
      if(this.registerCheckWordValue == ''){
        this.registerCheckWord = '验证码'
      }else{
        this.registerCheckWord = this.CheckWordCheck(this.registerCheckWordValue)
      }
    }
  }

},
mounted() {
  this.widthFlag()
  window.addEventListener('resize',()=>{
    var now = new Date().getTime()
    if(now - this.old > 300 || this.old == 0){
      // console.log('内容执行')
      this.widthFlag()
      this.old=now
    }
  })
},
}
</script>

<style scoped>

.theLogin{
  width: 100vw;
  height: 100vh;
  min-height: 600px;
  display: flex;
  background-image: url("../assets/TheLogin/bg.jpg");
}
.theLoginA{
  position: absolute;
  z-index: 5;
  transform: translate(20%,-6%);
}
.theLoginA2{
  position: absolute;
  z-index: 5;
  transform: translate(150%,-6%);
}
.theLoginA2:hover{
  box-shadow: 0px 6px 14px 0px rgb(240 240 240 / 100%);
}
.theLoginA:hover{
  box-shadow: 0px 6px 14px 0px rgb(240 240 240 / 100%);
}
.theImg{
  height: 620px;
  border-radius: 5px;
  box-shadow: 0px 6px 14px 0px rgb(0 0 0 / 100%);
}
.loginAndRegister{
  margin: auto;
  width: 845px;
  min-width: 845px;
  height: 520px;
  background-color: rgb(65, 65, 65);
  border-radius: 15px;
  box-shadow: 0px 12px 28px 0px rgb(0 0 0 / 200%);
  opacity: 0.9;
}
.login{
  width: 50%;
  height: 100%;
  transform: translateX(100%);
}
.register{
  width: 50%;
  height: 100%;
  transform: translateX(15%);
}
.login div{
  position: absolute;
  z-index: 1;
}
.register div{
  position: absolute;
  z-index: 1;
}


.wrapper{
    margin-top:10px;
    width: 80%;
    box-shadow:0px 0px 10px rgba(0, 0, 0, 0.1);
}
.wrapper .input-data{
    height: 40px;
    position: relative;
    color: white;
}
.input-data input:focus ~ label,
.input-data input:valid ~ label{
    /*
        focus输入框被激活
        valid输入框有内容
    */
    transform: translateY(-40px);
    font-size: 15px;
    color: rgb(200, 200, 200);
    text-shadow: 0 0 10px rgb(210, 210, 210), 0 0 20px rgb(210, 210, 210), 0 0 40px rgb(210, 210, 210);
}
.wrapper .input-data input{
    width: 100%;
    height: 100%;
    border:none;
    font-size: 17px;
    border-bottom: 2px solid black;
    background-color:rgb(25, 25, 25);
    color:rgb(200, 200, 200);
}
.wrapper .input-data label{
    position: absolute;
    left: 0px;
    bottom: 10px;
    color: gray;
    pointer-events: none;
    transition: all 0.3s ease;
}
.wrapper .input-data .underline{
    position: absolute;
    bottom: 0px;
    height: 2px;
    width: 100%;
}
.input-data .underline:before{
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-color: gray;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}
.input-data input:focus ~ .underline::before,
.input-data input:valid ~ .underline::before{
    transform: scaleX(1);
}
#tel{
  top:220px
}
#password{
  top:300px
}
#tel2{
  top:70px
}
#password2{
  top:150px
}
#password3{
  top:230px
}
#checkWord2{
  top: 310px;
  width: 50%;
}
.btn2{
  position: absolute;
  top: 0%;
  left: 110%;
}
.btn2 button{
  border-radius: 5px;
  font-size: 16px;
  width: 105px;
  height: 40px;
  background-color: rgb(25, 25, 25);
  color: gray;
}
.btn2 button:hover{
  color: rgb(200, 200, 200);
  box-shadow: 0px 6px 14px 0px rgb(25 25 25 / 160%);
  text-shadow: 0 0 10px rgb(240, 240, 240), 0 0 20px rgb(240, 240, 240), 0 0 40px rgb(240, 240, 240);
  transition: 0.3s all ease;
}
.btn{
  font-size:22px;
  top: 400px;
  margin-left: 22%;
}
.btn button{
  border-radius: 5px;
  width: 140px;
  height: 40px;
  background-color: rgb(25, 25, 25);
  color: gray;
}
.btn button:hover{
  color: rgb(200, 200, 200);
  box-shadow: 0px 6px 14px 0px rgb(25 25 25 / 160%);
  text-shadow: 0 0 10px rgb(240, 240, 240), 0 0 20px rgb(240, 240, 240), 0 0 40px rgb(240, 240, 240);
  transition: 0.3s all ease;
}
.logo{
  width: 300px;
  margin-left: 2%;
  margin-top: 60px;
  opacity: 0.8;
}
.change{
  position: absolute;
  right: 10%;
  bottom: 10%;
}
.change a{
  color: rgb(200, 200, 200);
  text-decoration: none;
}
.change a:hover{
  color: white;
  text-shadow: 0 0 10px rgb(240, 240, 240), 0 0 20px rgb(240, 240, 240), 0 0 40px rgb(240, 240, 240);
  transition: 0.3s all ease;
}
.logoTran-enter{
  opacity: 0.4;
}
.logoTran-enter-to{
  opacity: 0.8;
}
.logoTran-enter-active{
  transition: 0.6s all ease;
}
.registerImg-enter{
  transform: translate(20%,-6%);
}
.registerImg-enter-to{
  transform: translate(150%,-6%);
}
.registerImg-enter-active{
  transition: 0.6s all ease;
}
.loginImg-enter{
  transform: translate(150%,-6%);
}
.loginImg-enter-to{
  transform: translate(20%,-6%);
}
.loginImg-enter-active{
  transition: 0.6s all ease;
}
.loginAndRegister-enter{
  opacity: 0;
}
.loginAndRegister-enter-to{
  opacity: 1;
}
.loginAndRegister-enter-active{
  transition: 1.8s all ease;
}
</style>


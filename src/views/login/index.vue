
<template>
  <div class="login">
   <el-card class="login-card">
      <div  class='title'>
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <el-form :model="loginForm" :rules="loginRules" ref="myForm" style="margin-top:20px">
         <!-- 下面是输入框 -->
        <el-form-item prop='mobile'>
            <el-input placeholder='请输入手机号' v-model="loginForm.mobile"></el-input>
        </el-form-item>

      <!-- 以上的结构称为一个input的组件形成的基本结构 -->
      <el-form-item prop='code'>
        <el-input v-model="loginForm.code" style="width:65%" placeholder='请输入验证码'></el-input>
         <el-button style="float:right">发送验证码</el-button>
      </el-form-item>
      <!-- 以上是验证码的案例 -->
      <el-form-item prop='agree'>
        <el-checkbox v-model="loginForm.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <!-- 下面是按钮 -->
      <el-form-item>
        <el-button type="primary" style="width:100%" @click="login">主要按钮</el-button>
      </el-form-item>
      <!-- 这里分开 -->
    </el-form>
  </el-card>

  </div>
</template>

<script>

export default {
  data () {
    let validator = function (rule, value, callBack) {
      value ? callBack() : callBack(new Error('不点同意不让进'))
    }
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        agree: false // 是否同意协议
      },
      loginRules: {
        //   决定着校验规则  key(字段名):value(对象数组) => 一个对象就是一个校验规则
        // required 为true 就表示该字段必填 如果不填 就会提示消息
        mobile: [{ required: true, message: '请输入您的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入合法的手机号' } ],
        code: [{ required: true, message: '请输入您的验证码' },
          { pattern: /^\d{6}$/, message: '验证码为6位数字' }],
        agree: [{ validator }]
      }
    }
  },
  methods: {
    login () {
      this.$refs.myForm.validate((isOk) => {
        if (isOk) {
          this.$axios({
            method: 'post',
            url: '/authorizations',
            data: this.loginForm
          }).then(result => {
            window.localStorage.setItem('user-token', result.data.data.token)
            this.$router.push('/home')
          }).catch(() => {
            this.$message({
              type: 'warning',
              message: '您好你的手机号或验证码错误'
            })
          })
        }
      })
    }
  }
}

</script>

<style lang="less" scoped>
 .login{
   background-image: url('../../assets/img/login_bg.jpg');
   height: 100vh;
   background-size: cover;
   display: flex;
   align-items: center;
  //  垂直居中
   justify-content: center;
 }
 .login-card{
   width: 440px;
   height: 340px;
 }
 .title{
   text-align: center;
   .img{
     height: 45px;
   }
 }

</style>

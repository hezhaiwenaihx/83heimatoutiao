
<template>
  <div class="login">
   <el-card class="login-card">
      <div  class='title'>
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <el-form  ref="myForm" style="margin-top:20px">
         <!-- 下面是输入框 -->
        <el-form-item >
            <el-input placeholder='请输入手机号'></el-input>
        </el-form-item>

      <!-- 以上的结构称为一个input的组件形成的基本结构 -->
      <el-form-item>
        <el-input style="width:65%" placeholder='请输入验证码'></el-input>
         <el-button style="float:right">发送验证码</el-button>
      </el-form-item>
      <!-- 以上是验证码的案例 -->
      <el-form-item>
        <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <!-- 下面是按钮 -->
      <el-form-item>
        <el-button type="primary" style="width:100%">主要按钮</el-button>
      </el-form-item>
      <!-- 这里分开 -->
    </el-form>
  </el-card>

  </div>
</template>

<script>
export default {

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

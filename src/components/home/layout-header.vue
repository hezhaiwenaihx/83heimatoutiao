<template>

  <el-row type='flex' justify='space-between' class="layout-header" align='middle'>
   <!-- 左侧 -->
    <el-col :span='6'>
      <i class="el-icon-s-unfold"></i>
     <span class="title">江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <!-- 右侧 -->
    <el-col :span='4'>
      <!-- 头像 -->

      <img class='head-img' :src="userInfo.photo ? userInfo.photo : defaultImg" alt="">
      <!-- 下拉 -->
 <el-dropdown trigger="click" @command='commonClick'>
   <span class="el-dropdown-link">{{userInfo.name}}
     <i class="el-icon-arrow-down el-icon--right"></i>
   </span>
  <el-dropdown-menu slot="dropdown">
        <el-dropdown-item  command='account' >个人信息</el-dropdown-item>
        <el-dropdown-item  command='git'>git地址</el-dropdown-item>
        <el-dropdown-item  command='lgout'>退出</el-dropdown-item>
      </el-dropdown-menu>
 </el-dropdown>
 </el-col>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  methods: {
    getUserInfo () {
      let token = window.localStorage.getItem('user-token')
      this.$axios({
        url: '/user/profile',
        headers: { 'Authorization': `Bearer ${token}` }
      }).then(result => {
        this.userInfo = result.data.data
      })
    },

    commonClick (key) {
      if (key === 'account') {
        this.$router.push('/home/account')
      } else if (key === 'git') {
        window.location.href = 'https://github.com/hezhaiwenaihx/83heimatoutiao'
      } else {
        window.localStorage.clear()
        this.$router.push('/login')
      }
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang='less' scoped>
 .layout-header{
   height: 50px;
   .el-icon-s-unfold{
     font-size: 22px;
   }
   .title{
     vertical-align: top;
     margin-left: 4px;
   }
   .head-img{
         width: 40px;
         height: 40px;
         border-radius: 50%;
         vertical-align: middle;
         margin-right: 4px;
   }
 }
</style>

<template>
<!-- 这是一个↓大容器 -->
 <el-container>
 <!-- 左侧导航栏组件 -->
 <el-aside style="width:200px ; overflow:hidden ;background-color:#323745">
   <layout-aside></layout-aside>
 </el-aside>
 <!-- 下面右侧的大容器 -->
 <el-container>
    <el-header>
      <layout-header> </layout-header>
    </el-header>
    <el-main>
    <router-view></router-view>
    </el-main>
 </el-container>
 </el-container>
</template>

<script>
// 左侧导航栏页面引入

export default {
  components: {

  }
}
</script>

<style>

</style>

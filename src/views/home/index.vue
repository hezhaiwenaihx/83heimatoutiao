<template>
<!-- 这是一个↓大容器 -->
 <el-container>
 <!-- 左侧导航栏组件 -->
 <el-aside>
   <layout-aside></layout-aside>
 </el-aside>
 <!-- 下面右侧的大容器 -->
 <el-container>
    <el-header>我是右侧头部</el-header>
    <el-main>
     我是内容区
    </el-main>
 </el-container>
 </el-container>
</template>

<script>
// 左侧导航栏页面引入
import layoutAside from '../../components/home/layout-aside'

export default {
  components: {
    'layout-aside': layoutAside
  }
}
</script>

<style>

</style>

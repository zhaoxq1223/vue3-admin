<template>
  <div class="app-wrapper">
    <!-- 左侧 menu -->
    <Sidebar
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    />
    <div class="main-container">
      <!-- 顶部 navbar -->
      <div class="fixed-header">
        <Navbar />
      </div>
      <!-- 内容区 -->
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain.vue'
import variables from '@/styles/variables.module.scss'
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>

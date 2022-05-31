<template>
  <div id="guide-full" @click="onToggle">
    <SvgIcon :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import screenfull from 'screenfull'

// 是否全屏
const isFullscreen = ref(false)

const onToggle = () => {
  screenfull.toggle()
}

// 监听 screenfull变化
const change = () => {
  isFullscreen.value = screenfull.isFullscreen
}
onMounted(() => {
  screenfull.on('change', change)
})

// 取消监听
onUnmounted(() => {
  screenfull.off('change', change)
})
</script>

<style lang="scss" scoped>
</style>

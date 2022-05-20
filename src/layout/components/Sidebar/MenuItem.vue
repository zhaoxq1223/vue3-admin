<template>
  <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>
  <SvgIcon v-else :icon="icon" />
  <span>{{ title }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    requited: true
  },
  icon: {
    type: String,
    requited: true
  }
})
</script>

<style lang="scss" scoped>
</style>

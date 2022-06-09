<template>
  <SvgIcon :icon="icon" />
  <span>{{ generateTitle(title) }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
import { generateTitle } from '@/utils/i18n'

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

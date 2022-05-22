<template>
  <div class="hamburger-container" :class="className" @click="toggleClick">
    <SvgIcon className="hamburger" :icon="icon" />
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useStore } from 'vuex'

defineProps({
  className: {
    type: String,
    default: ''
  }
})

const store = useStore()
const toggleClick = () => {
  store.commit('app/triggerSiderbarOpened')
}
const icon = computed(() => {
  return store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed'
})
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>

<template>
  <el-dropdown
    class="international"
    :class="className"
    trigger="click"
    @command="handleSetLanguage"
  >
    <div id="guide-lang">
      <el-tooltip :effect="effect" content="国际化">
        <SvgIcon icon="language" />
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-item :disabled="language === 'zh'" command="zh">
        中文
      </el-dropdown-item>
      <el-dropdown-item :disabled="language === 'en'" command="en">
        Englist
      </el-dropdown-item>
    </template>
  </el-dropdown>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

defineProps({
  effect: {
    type: String,
    default: 'dark',
    validator: (value) => {
      return ['dark', 'light'].indexOf(value) !== -1
    }
  },
  className: {
    type: String,
    default: ''
  }
})

const store = useStore()
const language = computed(() => store.getters.language)

// 切换语言的方法
const i18n = useI18n()
const handleSetLanguage = (lang) => {
  i18n.locale.value = lang
  store.commit('app/setLanguage', lang)
  ElMessage.success(i18n.t('msg.toast.switchLangSuccess'))
}
</script>

<style lang="scss" scoped>
</style>

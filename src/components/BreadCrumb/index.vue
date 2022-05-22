<template>
  <el-breadcrumb class="breadcrumb" :class="className" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :key="item.path"
      >
        <!-- 不可点击项 -->
        <span class="no-redirect" v-if="index === breadcrumbData.length - 1">
          {{ item.meta.title }}
        </span>
        <!-- 可点击 -->
        <span class="redirect" v-else @click="onLinkClick(item)">
          {{ item.meta.title }}
        </span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { defineProps, watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

defineProps({
  className: {
    type: String,
    default: ''
  }
})

// 生成数组数据
const breadcrumbData = ref([])
const getBreadCrumbData = () => {
  breadcrumbData.value = route.matched.filter((item) => item?.meta?.title)
}

// 监听路由变化
const route = useRoute()
watch(
  route,
  () => {
    getBreadCrumbData()
  },
  { immediate: true }
)

// 跳转点击事件
const router = useRouter()
const onLinkClick = (item) => {
  router.push(item.path)
}

// hover的颜色设为主题色
const store = useStore()
const linkHoverColor = ref(store.getters.cssVar.menuBg)
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .redirect {
    color: #666;
    font-weight: 600;
    cursor: pointer;
  }
  .redirect:hover {
    color: v-bind(linkHoverColor);
  }

  :deep(.no-redirect) {
    color: #97a8be;
    cursor: text;
  }
}
</style>

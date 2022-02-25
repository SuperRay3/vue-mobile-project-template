<template>
  <div id="app">
    <!-- 这里使用了 vant 自带的过渡动画效果 see detail: https://youzan.github.io/vant/v2/#/zh-CN/style -->
    <transition :name="transitionName">
      <keep-alive>
        <!-- 这里是会被缓存的视图组件，比如列表A页面 -->
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName">
      <!-- 这里是不被缓存的视图组件，比如详情B页面-->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
import { defineComponent, watch, ref } from '@vue/composition-api'
import { useRouter } from '@/router/index'

export default defineComponent({
  setup() {
    const { $route } = useRouter()

    const transitionName = ref('')

    watch($route, (to, from) => {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      transitionName.value = toDepth < fromDepth ? 'van-slide-right' : 'van-slide-left'
    })

    return {
      transitionName
    }
  }
})
</script>

<style lang="scss">
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

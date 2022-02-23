<template>
  <div class="about-page" style="height: 100%">
    <h1 style="margin-top: 0">about page</h1>
    <van-button type="primary" @click="goThirdPage">go third page</van-button>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, unref } from '@vue/composition-api'
import { useRouter } from '@/router/index'

// components
import { Button } from 'vant'

export default defineComponent({
  name: 'AboutView',
  components: {
    [Button.name]: Button
  },
  setup() {
    const { $router } = useRouter()

    function goThirdPage() {
      unref($router).push({
        name: 'third'
      })
    }

    return {
      goThirdPage
    }
  }
})
</script>

<style lang="scss" scoped></style>

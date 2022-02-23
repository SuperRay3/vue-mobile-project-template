<template>
  <div style="height: 100%">
    <h1>Third page</h1>
    <van-button type="primary" @click="goHomePage">go home page</van-button>
  </div>
</template>

<script>
import { defineComponent, unref } from '@vue/composition-api'
import { useRouter } from '@/router/index'

// components
import { Button } from 'vant'

export default defineComponent({
  components: {
    [Button.name]: Button
  },
  setup() {
    const { $router } = useRouter()

    function goHomePage() {
      unref($router).push({
        name: 'home'
      })
    }

    return {
      goHomePage
    }
  }
})
</script>

<style lang="scss" scoped></style>

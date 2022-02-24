<template>
  <div style="height: 100%">
    <h1>Home page</h1>
    <van-button type="primary" @click="goConfig">go config</van-button>
  </div>
</template>

<script>
import { defineComponent, unref } from '@vue/composition-api'
import { useRouter } from '@/router/index'

// components
import { Button } from 'vant'

export default defineComponent({
  name: 'HomeView',
  components: {
    [Button.name]: Button
  },
  setup() {
    const { $router } = useRouter()

    function goConfig() {
      unref($router).push({
        name: 'config'
      })
    }

    return {
      goConfig
    }
  }
})
</script>

<style lang="scss" scoped></style>

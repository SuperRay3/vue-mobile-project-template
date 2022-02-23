<template>
  <div class="about-page">
    <h1>about page</h1>
    <van-button type="primary" @click="goHomePage">go home page</van-button>
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

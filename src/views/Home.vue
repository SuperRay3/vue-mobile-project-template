<template>
  <div class="h-full">
    <h1>Welcome!</h1>
    <van-button type="primary" @click="$router.push({ name: 'keep-alive' })">go keep-alive page</van-button>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

// components
import { Button } from 'vant'

export default defineComponent({
  name: 'HomeView',
  components: {
    [Button.name]: Button
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>

<template>
  <div>Home page</div>
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

    function toAboutView() {
      unref($router).push({
        name: 'about'
      })
    }

    return {
      toAboutView
    }
  }
})
</script>

<style lang="scss" scoped></style>

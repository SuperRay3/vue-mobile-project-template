<template>
  <div class="home">
    <h1>vue-mobile-project-template</h1>
    <section>
      <h3>现有功能</h3>
      <ul class="feature-list">
        <li>commitizen</li>
        <li>vant</li>
      </ul>
      <van-button type="primary" @click="toAboutView">go about page</van-button>
    </section>
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

<style lang="scss" scoped>
.feature-list {
  margin-left: 10px;
}
</style>

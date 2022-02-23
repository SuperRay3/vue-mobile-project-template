<template>
  <div class="home">
    <h1>vue-mobile-project-template</h1>
    <section>
      <van-button type="primary">主要按钮</van-button>
      <h3>现有功能</h3>
      <ul class="feature-list">
        <li>commitizen</li>
        <li>vant</li>
      </ul>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

// components
import { Button, Form } from 'vant'

export default defineComponent({
  name: 'HomeView',
  components: {
    [Button.name]: Button,
    [Form.name]: Form
  },
  setup() {
    console.warn(process.env.VUE_APP_ENV)
    return {}
  }
})
</script>

<style lang="scss" scoped>
.feature-list {
  margin-left: 10px;
}
</style>

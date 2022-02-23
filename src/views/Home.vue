<template>
  <div class="home">
    <h1>vue-mobile-project-template</h1>
    <section>
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

export default defineComponent({
  name: 'HomeView',
  components: {},
  setup() {
    return {
      
    }
  }
})
</script>

<style lang="scss" scoped>
.feature-list {
  margin-left: 10px;
}
</style>

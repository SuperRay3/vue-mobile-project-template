<template>
  <div style="height: 100%; background-color: #f7f8fa">
    <van-nav-bar title="设置" left-text="返回" left-arrow @click-left="$router.back()"> </van-nav-bar>
    <van-form input-align="right">
      <section>
        <h2 style="margin: 0; padding: 10px 16px; color: rgba(69, 90, 100, 0.6); font-size: 14px; font-weight: normal">
          开发者
        </h2>
        <van-field name="vconsole" label="vconsole">
          <template #input>
            <van-switch :size="20" v-model="formModel.vconsole" />
          </template>
        </van-field>
      </section>
    </van-form>
  </div>
</template>

<script>
import { defineComponent, watch, watchEffect } from '@vue/composition-api'
import VConsole from 'vconsole'

// components
import { Form, Field, Switch, NavBar } from 'vant'

// hooks
import { useStore } from '@/store/index'

export default defineComponent({
  name: 'DebugView',
  components: {
    [Switch.name]: Switch,
    [Form.name]: Form,
    [Field.name]: Field,
    [NavBar.name]: NavBar
  },
  setup() {
    const $store = useStore()
    const cachedConfig = $store.state.config.config

    let vconsole = null

    const formModel = cachedConfig

    watch(formModel, (newVal) => {
      $store.commit('config/SET_CONFIG', newVal)
    })

    watchEffect(() => {
      if (formModel.vconsole) {
        vconsole = new VConsole()
      } else {
        vconsole && vconsole.destroy() && (vconsole = null)
      }
    })

    return {
      formModel
    }
  }
})
</script>

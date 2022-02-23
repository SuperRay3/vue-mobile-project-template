<template>
  <van-form>
    <van-field name="vconsole" label="vconsole">
      <template #input>
        <van-switch v-model="formModel.vconsole" />
      </template>
    </van-field>
  </van-form>
</template>

<script>
import { defineComponent, reactive, watch } from '@vue/composition-api'
import VConsole from 'vconsole'

// components
import { Form, Field, Switch } from 'vant'

// hooks
import { useStore } from '@/store/index'

export default defineComponent({
  name: 'DebugView',
  components: {
    [Switch.name]: Switch,
    [Form.name]: Form,
    [Field.name]: Field
  },
  setup() {
    const $store = useStore()

    let vConsole = null

    const formModel = reactive({
      vconsole: false
    })

    watch(formModel, (newVal) => {
      $store.commit('config/SET_CONFIG', newVal)
    })

    watch(
      () => formModel.vconsole,
      (newVal) => {
        if (newVal) {
          vConsole = new VConsole()
        } else {
          vConsole.destroy()
          vConsole = null
        }
      }
    )

    return {
      formModel
    }
  }
})
</script>

import { defineComponent } from 'vue'

// import HelloWorld from '@/components/HelloWorld'

// import Test from '@/components/test.vue'
import LogoPic from '@/assets/logo.png'
import { RouterView } from 'vue-router'

export default defineComponent({
  setup() {
    return () => (
      <>
        <img alt="Vue logo" src={LogoPic} />
        <RouterView />
        {/* <Test /> */}
        {/* <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> */}
      </>
    )
  },
})

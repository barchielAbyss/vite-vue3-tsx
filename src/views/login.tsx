import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const $route = useRouter()
    const handleLogin = () => {
      localStorage.setItem('user', 'admin')
      $route.push('/')
    }

    return () => (
      <>
        <h1 onClick={handleLogin}>点我登录</h1>
      </>
    )
  },
})

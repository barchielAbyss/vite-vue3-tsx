import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const count = ref(0)

    const handleChangeCount = () => {
      count.value++
    }

    console.log(count)

    return () => (
      <>
        <h1 class="test">{props.msg}</h1>
        <p>
          Recommended IDE setup:
          <a href="https://code.visualstudio.com/" target="_blank">
            VSCode
          </a>
          +
          <a href="https://github.com/johnsoncodehk/volar" target="_blank">
            Volar
          </a>
        </p>

        <p>
          See <code>README.md</code> for more information.
        </p>

        <p>
          <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
          </a>
          |
          <a href="https://v3.vuejs.org/" target="_blank">
            Vue 3 Docs
          </a>
        </p>

        <button type="button" onClick={handleChangeCount}>
          count is: {count.value}
        </button>
        <p>
          Edit
          <code>components/HelloWorld.vue</code> to test hot module replacement.
        </p>
      </>
    )
  },
})

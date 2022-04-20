import { defineComponent, Suspense, ref } from 'vue'

// import HelloWorld from '@/components/HelloWorld'

// import Test from '@/components/test.vue'

import Logo from '@/components/Logo'

import Video from './components/Video'

import { RouterView } from 'vue-router'

export default defineComponent({
  setup() {
    // window.addEventListener('scroll', () => {})

    const $video = ref(null)

    return () => (
      <>
        <Suspense>
          {{
            default: (
              <>
                <Logo />
                <Video ref={$video} />
                {/* <Test /> */}
                {/* <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> */}
              </>
            ),
            fallback: <>loading...</>,
          }}
        </Suspense>

        <RouterView />
      </>
    )
  },
})

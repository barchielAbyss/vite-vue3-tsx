import { defineComponent, ref } from 'vue'

import { InputNumbers } from '@/components/Input'

export default defineComponent({
  setup() {
    const a = ref(1)
    const changeElement = (value: number) => {
      console.log(value)
      a.value = value
    }

    return {
      a,
      changeElement,
    }
  },
  render() {
    const { a, changeElement } = this

    return (
      <>
        <h1>欢迎光临</h1>
        <InputNumbers value={a} onChange={changeElement} />
      </>
    )
  },
})

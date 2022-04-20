import { defineComponent, ref } from 'vue'

export const getInputValue = (payload: Event) => {
  const target = payload.target as HTMLInputElement
  return target.value
}

export const InputNumbers = defineComponent({
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  emits: {
    change: (value: number) => {
      return value
    },
  },
  setup(prop, context) {
    const inputValue = ref(prop.value)
    const onChange = (e: Event) => {
      const val = getInputValue(e)
      inputValue.value = Number(val)
      context.emit('change', inputValue.value)
    }
    return {
      inputValue,
      onChange,
    }
  },
  render() {
    const { inputValue, onChange } = this
    return <input value={inputValue} type="number" onChange={onChange} />
  },
})

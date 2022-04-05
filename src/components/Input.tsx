import { defineComponent, ref } from 'vue'

export const getInputValue = (payload: Event) => {
  const target = payload.target as HTMLInputElement
  return target.value
}

export const InputNumbers = defineComponent({
  props: {
    value: {
      type: Number,
    },
  },
  emits: {
    change: (value: number) => {
      return value
    },
  },
  setup(prop, context) {
    const value = ref(prop.value)
    const onChange = (e: Event) => {
      const val = getInputValue(e)
      value.value = Number(val)
      context.emit('change', value.value)
    }
    return {
      value,
      onChange,
    }
  },
  render() {
    const { value, onChange } = this
    return <input value={value} type="number" onChange={onChange} />
  },
})

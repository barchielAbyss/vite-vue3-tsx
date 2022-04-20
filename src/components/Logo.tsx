import { defineComponent } from 'vue'
import LogoPic from '@/assets/logo.png'

const asyncGetLogo = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LogoPic)
    }, 3 * 1000)
  })
}

export default defineComponent({
  async setup() {
    const pic = await asyncGetLogo()
    return {
      pic,
    }
  },
  render() {
    return <img src={this.pic}></img>
  },
})

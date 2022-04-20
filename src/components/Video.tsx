import { defineComponent } from 'vue'

const videoSrc = () => {
  return 'https://videos.36krcdn.com/20211219/v2_1639922688046_video_mov_v9'
}

export default defineComponent({
  setup() {
    return {}
  },
  render() {
    return <video src={videoSrc()} width="500" controls></video>
  },
})

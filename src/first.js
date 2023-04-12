import { createApp, h } from 'vue'
import name from '@src/name'
console.log(name)
const app = createApp({
  data() {
    return {
      name: 'Vue',
    }
  },
  render() {
    return h('div', ['Hello World!'])
  },
})
app.mount('#app')

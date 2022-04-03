import { createApp } from 'vue'

import routers from './routers'

import App from './App'

createApp(App).use(routers).mount('#app')

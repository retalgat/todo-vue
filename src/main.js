import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import IconPlus from '@/components/icons/IconPlus.vue'
import IconTrash from '@/components/icons/IconTrash.vue'

const app = createApp(App)

app.component('IconPlus', IconPlus).component('IconTrash', IconTrash)

app.use(router)

app.mount('#app')

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import IconPlus from '@/components/icons/IconPlus.vue'

const app = createApp(App)

app.component('IconPlus', IconPlus)

app.use(router)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import commponents from '@/components/UI';
const app = createApp(App)

commponents.forEach((component) => {
app.component(component.name, component)
})

app.use(router)

app.mount('#app')

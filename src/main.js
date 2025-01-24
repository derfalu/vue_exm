import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import commponents from '@/components/UI';
import VIntersection from './directives/VIntersection';
const app = createApp(App)

commponents.forEach((component) => {
app.component(component.name, component)
})

app.directive('intersection', VIntersection)

app.use(router)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import commponents from '@/components/UI';
import directives from './directives/index';
import store from './store';
const app = createApp(App)

commponents.forEach((component) => {
app.component(component.name, component)
})

directives.forEach((directive) => {
app.directive(directive.name, directive)
})

app
    .use(store)
    .use(router)
    .mount('#app')

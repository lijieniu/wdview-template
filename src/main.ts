import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import WdView from '@inagora/wd-view';
import '@inagora/wd-view/dist/index.css';

createApp(App).use(WdView).use(router).mount('#app')

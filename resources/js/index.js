import { createApp } from 'vue';
import router from './router/index';
import WdView from '@inagora/wd-view';
import '@inagora/wd-view/dist/index.css';
import Index from './components/index.vue';
const app = createApp(Index);
app.use(WdView);
app.use(router);
app.mount('#app');

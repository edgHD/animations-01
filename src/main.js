import { createApp } from 'vue';
import router from './router.js';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import ListData from './components/ListData.vue';

const app = createApp(App);

app.component('base-modal', BaseModal);
app.component('list-data', ListData); // kebab-case
app.component('ListData', ListData); // PascalCase

app.use(router);

router.isReady().then(() => {
    app.mount('#app');
})

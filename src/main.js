import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

library.add({ faTrophy });


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')

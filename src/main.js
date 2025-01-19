import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrophy, faHeart as fasHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

library.add({ faTrophy, fasHeart, farHeart, faXmark });


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app');

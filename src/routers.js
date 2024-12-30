import HomePage from './HomePage.vue';
import SignUp from './SignUp.vue';
import AllCats from './AllCats.vue';
import PreviewCat from './PreviewCat.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'HomePage',
    component: HomePage,
    path: '/'
  },
  {
    name: 'SignUp',
    component: SignUp,
    path: '/signup'
  },
  {
    name: 'AllCats',
    component: AllCats,
    path: '/all-cats'
  },
  {
    name: 'PreviewCat',
    component: PreviewCat,
    path: '/preview-cat'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
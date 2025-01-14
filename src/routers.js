import HomePage from './HomePage.vue';
import SignUp from './SignUp.vue';
import AllCats from './AllCats.vue';
import AddCat from './AddCat.vue';
import FeedsPage from './FeedsPage.vue';
// import PreviewCat from './PreviewCat.vue';
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
    name: 'AddCat',
    component: AddCat,
    path: '/add-new'
  },
  {
    name: 'FeedsPage',
    component: FeedsPage,
    path: '/feeds'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
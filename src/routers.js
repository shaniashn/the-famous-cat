import WelcomePage from './WelcomePage.vue';
import SignUp from './SignUp.vue';
import AllCats from './AllCats.vue';
import AddCatPage from './AddCatPage.vue';
import FeedsPage from './FeedsPage.vue';
// import PreviewCat from './PreviewCat.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'WelcomePage',
    component: WelcomePage,
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
    name: 'AddCatPage',
    component: AddCatPage,
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
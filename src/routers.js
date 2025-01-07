import HomePage from './HomePage.vue';
import SignUp from './SignUp.vue';
import AllCats from './AllCats.vue';
import CatForm from './CatForm.vue';
import FeedsPost from './FeedsPost.vue';
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
    name: 'CatForm',
    component: CatForm,
    path: '/add-new'
  },
  {
    name: 'FeedsPost',
    component: FeedsPost,
    path: '/add-new'
  },
  // {
  //   name: 'PreviewCat',
  //   component: PreviewCat,
  //   path: '/preview-cat'
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
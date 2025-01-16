<template>
  <div class="feeds-wrapper">
    <MenuComponent />
    <PostsView />
  </div>
</template>

<script>
import MenuComponent from './MenuComponent.vue';
import PostsView from './PostsView.vue';

export default {
  name: 'FeedsPage',
  components: {
    PostsView,
    MenuComponent
  }
}
</script>

<style scoped>
.feeds-wrapper {
  display: flex;
}

</style>
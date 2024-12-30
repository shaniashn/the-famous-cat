<template>
  <h2>the famous cat</h2>
  <h6>this week's most famous cat:</h6>
  <div class="home-cat image">
    <img src="./assets/cats/tree-cat.png" alt="">
  </div>
  <p>can your cat placed 1st on weekly famous cat? find out here!</p>
  <div class="cta">
    <router-link to="/all-cats">see all cats!</router-link>
  </div>
  <div class="cta">
    <router-link to="/preview-cat">preview cat</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
</style>
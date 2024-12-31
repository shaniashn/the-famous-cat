<template>
  <div class="dashboard">
  <div class="welcome">
    <h1>welcome, username!</h1>
  <h2>your cats</h2>
  <div class="cats-gallery">
    <div class="card">
      <img src="./assets/cats/peace-cat.png" alt="">
      <h3>tabby</h3>
      <p><span>0</span> likes</p>
    </div>
    <div class="card">
      <img src="./assets/cats/rawr-cat.png" alt="">
      <h3>roare</h3>
      <p><span>0</span> likes</p>
    </div>
    <div class="card">
      <img src="./assets/blankcat.svg" alt="">
      <h3>+ add more</h3>
    </div>
  </div>
  </div>
  <PreviewPage />
  </div>
</template>

<script>
import PreviewPage from './PreviewCat.vue';

export default {
  name: 'AllCats',
  components: {
    PreviewPage
  }
}
</script>

<style scoped>
h1, h2 {
  text-align: start;
  margin: 50px;
}

h3, .card p{
  margin: 0;
}

.cats-gallery {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 50px;
}

.card img {
  max-width: 60%;
}

.dashboard {
  display: flex;
}
</style>
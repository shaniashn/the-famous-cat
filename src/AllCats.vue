<template>
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
      <p>add cat</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllCats'
}
</script>

<style scoped>
h1, h2 {
  text-align: start;
}

.cats-gallery {
  display: flex;
}

.cats-gallery .card:last-child img {
  width: 444px;
}
</style>
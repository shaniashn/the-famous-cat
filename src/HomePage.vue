<template>
  <h1>the famous cat</h1>
  
  <div class="home-cat">
    <h6>this week's most famous cat:</h6>
    <img src="./assets/cats/tree-cat.png" alt="">
  </div>
  <p>can your cat placed 1st on weekly famous cat? add your cat and find out <router-link to="/add-new">here</router-link>!</p>
  <div class="cta">
    <router-link to="/all-cats">see all cats!</router-link>
  </div>
  <!-- <div class="cta">
    <router-link to="/preview-cat">preview cat</router-link>
  </div> -->
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
h6 {
  font-size: 1rem;
  margin: 0;
  margin-bottom: 10px;
}

p {
  margin: 3% 0;
}

.home-cat {
  margin: 5% 0;
}

.home-cat img {
  max-width: 25%;
}
</style>
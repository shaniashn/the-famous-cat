<template>
  <h1>the famous cat</h1>
  <div class="home-cat">
    <h6>this week's most famous cat:</h6>
    <img src="./assets/images/cats/tree-cat.png" alt="">
    <div class="cat-username">
      <p>cat name</p>
      <p>username</p>
    </div>
  </div>
  <p>can your cat placed 1st on weekly famous cat? add your cat and find out <router-link to="/add-new">here</router-link>!</p>
  <div class="cta">
    <router-link to="/all-cats">see all cats!</router-link>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage'
}
</script>

<style scoped>
h1 {
  margin-top: 3%;
}

h6 {
  font-size: 1rem;
  margin-bottom: 10px;
}

.cat-username p {
  margin: 0;
}

.home-cat {
  margin: 3% 0;
}

.home-cat img {
  max-width: 25%;
}

.cta {
  margin: 50px;
}
</style>
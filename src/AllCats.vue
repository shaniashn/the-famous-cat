<template>
  <div class="all-cats">
    <div class="welcome">
      <h1>welcome, username!</h1>
      <h2>my cats</h2>
      <hr>
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
        <div class="blank">
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
h1 {
  text-align: start;
  margin: 50px;
}

h2 {
  text-align: start;
  margin: 0 50px 10px;
}

h3, .card p{
  margin: 0;
}

hr {
  border-bottom: 0px solid #898989;
  margin: 0 50px;
}

.cats-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 50px;
  column-gap: 10%;
  margin: 50px;
}

.card {
  width: auto;
  justify-self: baseline;
}

.card img, .blank{
  max-width: 100%;
}

.card.blank {
  width: 150px;
}

.all-cats {
  display: flex;
}
</style>
<template>
  <div class="feeds">
    <h1>feeds</h1>
    <div class="feeds-page">
      <div class="feeds-type">
        <span>popular</span>
        <span>my posts</span>
      </div>
      <!-- <div class="container">
        <input type="text" placeholder="title">
        <textarea name="" id="" rows="10">text</textarea>
        <button>post</button>
      </div> -->
      <div class="post-preview">
        <span>what are your cats doing now?</span>
      </div>
      <div class="post">
        <div class="post-profile">
          <a href="">username</a>
        </div>
        <div class="post-title">
          <p>hello, this is jiggy</p>
        </div>
        <div class="post-desc">
          <p>my cat's name is jiggy. you may see her as fat but actually what caused it was because when she was 1 month, her old owner thrown her out of moving car (that's cruel i know) but we saved her and because of it there's trauma in her brain makes she can't grow properly and suffer from dwarfism.</p>
        </div>
        <div class="post-image"></div>
        <div class="post-reaction">
          <p><font-awesome-icon icon="fa-solid fa-heart" /> 6</p>
          <!-- <p><font-awesome-icon icon="fa-regular fa-heart" /></p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PostsView',
}
</script>

<style scoped>
.feeds h1 {
  /* margin: 50px; */
  text-align: start;
}

.feeds{
  width: 100%;
  display: grid;
  margin: 25px 50px 0 50px;
}

.feeds-type {
  margin-bottom: 25px;
}

.feeds-type span{
  margin: 20px;
  font-weight: 600;
}

/* .container {
  height: auto;
  max-width: 100%;
  width: 90%;
  display: grid;
  justify-self: center;
  border: 2px solid black;
  padding: 15px;
  gap: 10px;
} */

 .post-preview {
  padding: 25px;
  border: 0.5px solid #898989;
  border-radius: 5px;
  display: flex;
 }

 .post {
  padding: 25px;
  border: 0.5px solid #898989;
  border-radius: 5px;
  display: grid;
  text-align: start;
  gap: 10px;
  margin: 20px 0;
 }

 .post a {
  text-decoration: none;
 }

 .post-reaction {
  padding: 4px 8px;
  border: 0.5px solid #898989;
  width: fit-content;
  border-radius: 75pt;
  display: flex;
  justify-content: center;
  align-items: center;
 }
</style>
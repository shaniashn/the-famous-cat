<template>
  <div class="feeds">
    <h1>feeds</h1>
    <div class="feeds-page">
      <div class="feeds-type">
        <span>popular</span>
        <span>my posts</span>
      </div>
      <div class="newpost-container hidden">
        <div class="new-post">
          <input type="text" placeholder="title">
          <textarea name="" id="" rows="10"></textarea>
          <button>post</button>
        </div>
      </div>
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
// import { watch } from 'vue';


export default {
  name: 'PostsView',
  data() {
    return {
      // isAnimating: false
    }
  },
  methods: {
    // setBlinkAnim(){
    //   this.isAnimating = true;
    //   setTimeout(() => {
    //     this.isAnimating = false;
    //   }, 100)
    // },
  },
  // watch: {
  //   clicked(newValue){
  //     if (newValue) {
        
  //     }
  //   }
  // }
}
</script>

<style scoped>
.feeds h1 {
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

.new-post {
  height: auto;
  max-width: 90%;
  width: 50%;
  display: grid;
  justify-self: center;
  border: 0.5px solid #898989;
  padding: 25px;
  gap: 10px;
  position: fixed;
  background-color: #ffffff;
  border-radius: 5px;
}

.new-post input {
  padding: 10px;
  margin-top: 15px;
  border: 0.5px solid #898989;
  border-radius: 5px;
}

.new-post textarea {
  padding: 10px;
  margin: 15px 0;
  border: 0.5px solid #898989;
  border-radius: 5px;
  resize: none;
}

.new-post button {
  height: 40px;
  margin-bottom: 15px;
  border: 0.5px solid #898989;
  border-radius: 5px;
}

.newpost-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(231, 231, 231, 0.4);
}

.newpost-container.hidden {
  display: none;
}

 .post-preview {
  padding: 25px;
  border: 0.5px solid #898989;
  border-radius: 5px;
  display: flex;
 }

.post-preview:active {
  background-color: #e4e4e4;
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
  font-weight: 600;
 }

 .post-reaction {
  padding: 4px 8px;
  border: 0.5px solid #a2a2a2;
  width: fit-content;
  border-radius: 75pt;
  display: flex;
  justify-content: center;
  align-items: center;
 }


</style>
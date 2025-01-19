<template>
  <div class="feeds">
    <h1>feeds</h1>
    <div class="feeds-page">
      <div class="feeds-type">
        <span>popular</span>
        <span>my posts</span>
      </div>
       <div class="newpost-container" v-show="hideNewPost">
        <div class="new-post">
          <div class="close-mark">
            <!-- <span>create post</span> -->
            <span @click="hideContainer"><font-awesome-icon icon="fa-solid fa-xmark" /></span>
          </div>
          <input type="text" placeholder="title">
          <textarea name="" id="" rows="10"></textarea>
          <button>post</button>
        </div>
      </div>
      <div class="post-preview" @click="showContainer">
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
  data() {
    return {
      hideNewPost: true,
    }
  },
  methods: {
    hideContainer(){
      this.hideNewPost = false
    },
    showContainer(){
      this.hideNewPost = true
    }

  },
  // watch: {
    // func(newValue){
    //   if (newValue) {
        
    //   }
    // }
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
  border: none;
  border-radius: 5px;
}

.new-post button:active {
  background-color: #e4e3e3;
}

.newpost-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(242, 242, 242, 0.8);
  display: grid;
  align-items: center;
  /* margin: auto; */
}

.newpost-container.hidden {
  display: none;
}

.close-mark {
  margin: 10px;
  /* display: grid; */
  /* justify-content: center; */
  display: flex;
  justify-content: end;
  grid-auto-rows: 1fr;
}

.close-mark span {
  padding: 10px;
  background-color: #e4e4e4;
  border-radius: 75pt;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-mark span:active {
  background-color: #d9d9d9;
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
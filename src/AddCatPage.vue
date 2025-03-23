<template>
  <div class="catform">
    <h1>new cat</h1>
  <div class="container-form-cat">
    <div class="form">
      <form @submit.prevent="postForm()">
        <label for="name">name</label>
        <input v-model="catName" type="text" id="name" placeholder="jello">
        <label for="age">age</label>
        <input v-model="catAge" type="text" id="age" placeholder="5">
        <label for="breed">breed</label>
        <input v-model="catBreed" type="text" id="breed" placeholder="persian">
        <label for="hobby">hobby of your cat</label>
        <input v-model="catHobby" type="text" id="hobby" placeholder="plays with grandma's knit kit">
        <label for="gender">hates</label>
        <input v-model="catHates" type="text" id="gender" placeholder="female">
        <button type="submit">save</button>
      </form>
      <div class="image-form">
        <img @click="logFile()" src="./assets/images/blankcat.svg">
        <label for="input-file">upload picture</label>
        <input id="input-file" type="file" accept=".png, .jpeg, .jpg, .svg">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'CatForm',
  data() {
    return {
      catName: '',
      catAge: '',
      catBreed: '',
      catHates: '',
      catHobby: '',
      cats: [],
    }
  },
  methods: {
    logFile(){
      const files = document.getElementById('input-file').files;
      console.log("files ", files);
      const img = document.getElementsByTagName('img')[0];
      img.src = URL.createObjectURL(files[0]);
      
    },
    postForm(){
      let cat = {
        name: this.catName,
        age: this.catAge,
        breed: this.catBreed,
        hates: this.catHates,
        hobby: this.catHobby,
      }
      this.cats.push(cat)
      console.log(this.cats);
      this.catName = ''
      this.catAge = ''
      this.catBreed = ''
      this.catHates = ''
      this.catHobby = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/variables';

.catform {
  padding: 3% 10%;

  h1 {
    text-align: start;
    margin: 0;
  }

  .container-form-cat {
    border: $borderline;
    border-radius: 5pt;
    padding: 3%;

    button {
      justify-self: center;
    }
    
    .form {
      gap: 100px;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
}

.form {
  label,
  input {
    display: block;
    text-align: start;
  }

  label {
    margin: 10px 0;
  }

  input {
    margin-bottom: 15px;
    min-height: 40px;
    min-width: 100%;
    border: $borderline;
    padding: 0 3%;
  }
}

.image-form {
  max-width: 50%;
  justify-self: center;
  
  & img {
    margin-bottom: 25x;
  }
}

.form-cat button {
  width: 150px;
  height: 40px;
  margin: 15px;
  border: none;
  border-radius: 5px;

  &:active {
    background-color: #e4e3e3;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
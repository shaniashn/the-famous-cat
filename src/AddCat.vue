<template>
  <div class="add-catform">
    <h1>add new cat</h1>
  <div class="form-cat">
    <div class="form">
      <form @submit.prevent="postForm()">
        <label for="name">name of your cat</label>
        <input v-model="catName" type="text" id="name" placeholder="jello">
        <label for="age">age of your cat</label>
        <input v-model="catAge" type="text" id="age" placeholder="5">
        <label for="breed">breed of your cat</label>
        <input v-model="catBreed" type="text" id="breed" placeholder="persian">
        <label for="gender">gender of your cat</label>
        <input v-model="catGender" type="text" id="gender" placeholder="female">
        <label for="hobby">hobby of your cat</label>
        <input v-model="catHobby" type="text" id="hobby" placeholder="plays with grandma's knit kit">
        <button type="submit">save</button>
      </form>
      <div class="image">
        <img @click="logFile()" src="./assets/blankcat.svg">
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
      catGender: '',
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
        gender: this.catGender,
        hobby: this.catHobby,
      }
      this.cats.push(cat)
      console.log(this.cats);
      this.catName = ''
      this.catAge = ''
      this.catBreed = ''
      this.catGender = ''
      this.catHobby = ''

      //fetch data
      async function fetchData() {
        const URL = "http://localhost:3000/catProfile"
        const fetchedData = await fetch(URL);
        console.log(fetchedData);

        if (fetchedData.status != 200) {
          throw new Error("Data fetching error.");
          
        }

      }

      fetchData()
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: start;
}

.add-catform {
  padding: 5%;
}

.form-cat button {
  justify-self: center;
}

.form {
  gap: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@container form (width > 100px) {
  input::placeholder {
    color: blue;
  }
}

h1 {
  margin-bottom: 5%;
}

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
  
}

.image {
  max-width: 50%;
  justify-self: center;
}

.image img {
  margin-bottom: 25x;
}

.form-cat button {
  width: 150px;
  height: 40px;
  margin: 15px;
  border: none;
  border-radius: 5px;
}

.form-cat button:active {
  background-color: #e4e3e3;
}

.form-cat button:hover {
  cursor: pointer;
}
</style>
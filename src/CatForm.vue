<template>
  <h1>add new cat</h1>
  <div class="form-cat">
    <div class="form">
      <form action="">
      <label for="name">name</label>
      <input type="text" id="name">
      <label for="age">age</label>
      <input type="text" id="age">
      <label for="breed">breed</label>
      <input type="text" id="breed">
      <label for="gender">gender</label>
      <input type="text" id="gender">
      <label for="hobby">hobby</label>
      <input type="text" id="hobby">
    </form>
  </div>
    <div class="image">
      <img @click="logFile()" src="./assets/blankcat.svg">
      <label for="input-file">upload picture</label>
      <input id="input-file" type="file" accept=".png, .jpeg, .jpg, .svg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatForm',
  data() {
    return {

    }
  },
  methods: {
    logFile(){
      
      const files = document.getElementById('input-file').files;
      console.log("files ", files);
      const img = document.getElementsByTagName('img')[0];
      img.src = URL.createObjectURL(files[0]);
      
    }
  }
}
</script>

<style scoped>
.form-cat {
  display: flex;
  justify-content: space-around;
}

h1 {
  margin-bottom: 10%;
}

label,
input {
  display: block;
  text-align: start;
}

.image {
  max-width: 20%;
}
</style>
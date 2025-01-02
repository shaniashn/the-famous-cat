<template>
  <h1>add new cat</h1>
  <div class="form-cat">
    <form action="">
      <label for="name">name</label>
      <input type="text" id="name">
      <label for="age">age</label>
      <input type="text" id="age">
      <label for="breed">breed</label>
      <input type="text" id="breed">
      <label for="hobby">hobby</label>
      <input type="text" id="hobby">
      <label for="hates">hates</label>
      <input type="text" id="hates">
    </form>
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
      
    }
  }
}
</script>

<style>
form {
  flex-direction: column;
}
</style>
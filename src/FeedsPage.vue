<template>
  <div class="feeds">
    <h1>feeds</h1>
    <div class="container">
      <input type="text" placeholder="title">
      <textarea name="" id="" rows="10">text</textarea>
      <button>post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedsPost',
  data(){
    return {

    }
  }
}
</script>

<style scoped>
.feeds{
  display: grid;
}

.container {
  height: auto;
  max-width: 100%;
  width: 90%;
  display: grid;
  justify-self: center;
  border: 2px solid black;
  padding: 15px;
  gap: 10px;
}
</style>
<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* colors
898989 gray line
*/

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

body {
  margin: 0;
  vertical-align: baseline;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

p {
  margin: 0;
}
</style>

<template>
  <div class="menu-wrapper">
    <img src="./assets/cats/rawr-cat.png" alt="profile-image">
    <h3>shane</h3>
    <span>@shanshine</span>
    <!-- <span><router-link>my cats</router-link></span>
  <span><router-link>ranks</router-link></span>
  <span><router-link>media</router-link></span> -->
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
  data() {
    return {
      hideMenu: true,
    }
  },
  methods: {
    hideContainer(){
      this.hideMenu = false
    },
    showContainer(){
      this.hideMenu = true
    },
  }
}
</script>

<style scoped>
.menu-wrapper {
  width: 50%;
  margin: 4% 0;
  border-right: 0.5px solid #898989;
  height: 100%;
}

.menu-wrapper img {
  max-width: 30%;
}
</style>
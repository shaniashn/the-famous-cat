<template>
  <div class="menu-wrapper">
    <img src="./assets/images/cats/rawr-cat.png" alt="profile-image">
    <h3>shane</h3>
    <span>@shanshine</span>
    <div class="menu-opt">
      <a><router-link to="/all-cats">my cats</router-link></a>
      <a href="">ranks</a>
      <a href="">media</a>
    </div>
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

<style lang="scss" scoped>
h3 {
  margin: 5px 0;
}

.menu-wrapper {
  width: 80%;
  margin: 4% 0;
  border-right: 0.5px solid #898989;
  height: 100%;

  &.hide {
    transform: translateX(-150%);
    display: none;
  }

  img {
    max-width: 50%;
  }
}

.menu-opt {
  display: grid;
  margin: 25% 15%;
  gap: 40%;
  justify-items: start;
}

.menu-opt a {
  font-weight: 500;
  color: #2c3e50;
  text-decoration: none
}
</style>
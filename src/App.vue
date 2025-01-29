<template>
  <nav-bar></nav-bar>
  <div class="main">
    <h1>$store.state.post.limit</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: { NavBar }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  margin: 10px;
  /* padding: 0 16px; */
}
</style>

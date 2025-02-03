<template>
  <div class="navbar">
    <h4 @click="$router.push('/')" style="margin-left: 20px; color: white; cursor: zoom-in">App</h4>
    <div class="navbar__btn">
      <my-button @click="$router.push('/post_page')"> Посты </my-button>
      <my-button @click="$router.push('/post_page_with_store')">Посты с Store</my-button>
      <my-button @click="$router.push('/post_page_with_composition_api')">Посты с Composition Api</my-button>
      <my-button @click="$router.push('/about')"> О сайте </my-button>
    </div>
  </div>
</template>

<script>
import router from '@/router/router';

export default {}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  background-color: teal;
  box-shadow: 2px 2px 4px grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.navbar__btn {
  margin-right: 10px;
  display: flex;
  gap: 10px;
}
</style>

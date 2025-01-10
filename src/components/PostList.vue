<template>
  <div>
    <div v-if="posts.length > 0">
      <h1>Посты</h1>
      <transition-group name="post-list">
        <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)"/>
      </transition-group>
    </div>
    <h1 v-else style="color: rebeccapurple;">Список постов пуст!</h1>
  </div>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.post-list-move {
  transition: transform 0.8s ease;
}
</style>

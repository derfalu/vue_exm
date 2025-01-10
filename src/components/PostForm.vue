<template>
  <div>
    <h1 style="margin: 10px 0">Создание поста</h1>
    <form class="createPost" @submit.prevent>
      <input v-model="post.title" type="text" placeholder="Название" />
      <input v-model="post.body" type="text" placeholder="Описание" />
      <my-button @click="createPost"> Создать </my-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('cretaePost', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style lang="css">
.createPost {
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  padding: 10px 10px;
}

input {
  margin-right: 10px;
  flex: 1;
  font-size: 16px;
}
</style>

<template>
  <div>
    <h1 style="margin: 10px 0">Создание поста</h1>
    <form class="createPost" @submit.prevent>
      <textarea v-model="post.title" type="text" placeholder="Название" v-focus/>
      <textarea v-model="post.body" type="text" placeholder="Описание" />
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
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  padding: 10px 10px;
}

textarea {
  margin-bottom: 10px;
  padding: 10px 0;
  font-size: 16px;
  font-family: "Arial";
  resize: none;
}
</style>

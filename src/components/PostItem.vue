<template>
  <div class="post">
    <div style="width: 80%;">
      <div><b>Название:&nbsp;&nbsp;</b>{{ post.title }}</div>
      <div><b>Описание: </b>{{ post.body }}</div>
    </div>
    <div>
      <my-button>Открыть</my-button>
      <my-button @click="$emit('remove', post)">Удалить</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
.post {
  display: flex;
  margin: 10px 0;
  padding: 5px 10px;
  border: solid 2px seagreen;
  font-size: 18px;
  align-items: center;
  justify-content: space-between;
}
.block {
  display: flex;
}
</style>

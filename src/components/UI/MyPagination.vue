<template>
    <div class="page__wrapper">
      <div class="page" :class="{'current-page': pageNumber === page}" v-for="pageNumber in pages" :key="pageNumber" @click="changePageHandler(pageNumber)">{{ pageNumber }}</div>
    </div>
</template>

<script>
    export default {
        name: "my-pagination",
        props: {
            pages: {
                type: Number,
                defaule: [],
            }
        },
        methods: {
            changePageHandler(pageNumber) {
                this.$emit('changePage', pageNumber)
                console.log(pageNumber)
            }
        }
    }
</script>

<style lang="scss" scoped>
.page__wrapper {
  display: flex;
  margin-top: 15px;
  justify-content: center;
  font-size: 18px;
}

.page {
  margin: 0 7px;
  cursor: pointer;
} 

.current-page {
  font-weight: 700;
  /* text-decoration: underline; */
  border-bottom: 1px solid black;
}
</style>
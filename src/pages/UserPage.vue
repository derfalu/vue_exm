<template>
  <div class="main">
    <h1>Страница с постами</h1>
    <div style="display: flex; justify-content: space-between; margin: 10px 0">
      <my-button @click="showDialog" style="font-size: 16px"> Создать пост </my-button>

      <my-select v-model="selectedSort" :options="sortOptions" style="font-size: 16px"> </my-select>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @cretaePost="createPost" />
    </my-dialog>

    <input
      v-model="searchQuery"
      style="width: 100%; text-align: right; margin: 15px 0; padding: 10px"
      type="text"
      placeholder="Поиск "
    />

    <div>
      <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading" />
      <div v-else>Идет загрузка...</div>
    </div>

    <!-- <div class="page__wrapper">
      <div class="page" :class="{'current-page': pageNumber === page}" v-for="pageNumber in totalPages" :key="pageNumber" @click="changePage(pageNumber)">{{ pageNumber }}</div>
    </div> -->
    <!-- <my-pagination :pages="totalPages" @changePage="changePage"></my-pagination> -->
    <div v-intersection="{handler: loadMorePost, page: this.page, limit: this.limit}" class="observer"></div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import axios from 'axios'
import PostForm from '@/components/PostForm.vue'

export default {
  components: {
    PostForm,
    PostList
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' }
      ],
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id != post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    changePage(pageNumber) {
      this.page = pageNumber
      this.fetchPosts()
    },

    async fetchPosts() {
      try {
        this.isPostLoading = true
        setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          })
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
          this.posts = response.data
          this.isPostLoading = false
        }, 1000)
      } catch (e) {
        alert('Ошибка!')
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          })
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
          this.posts = [...this.posts, ...response.data]
        }, 1000)
      } catch (e) {
        alert('Ошибка!')
      }
    }
  },
  mounted() {
    this.fetchPosts()
    // const observerItem = this.$refs.observer
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }

    // const callback = (entries, observer) => {
    //   console.log(observer)
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts()
    //   }
    // };

    // const observer = new IntersectionObserver(callback, options)
    // observer.observe(observerItem)
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) => {
        a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      })
    },

    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) => post.title.toLowerCase().includes(this.searchQuery))
    }
  },

  watch: {
    // selectedSort(newValue) {
    //   console.log(newValue)
    //   this.posts.sort( (a, b) => { return a[newValue]?.localeCompare(b[newValue])})
    // }
  }
}
</script>

<style lang="css" scoped>
.observer {
  padding: 15px 0;
  background-color: red;
}
</style>

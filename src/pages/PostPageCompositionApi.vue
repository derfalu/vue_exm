<template>
  <div class="main">
    <h1>Страница с постами</h1>
    <div style="display: flex; justify-content: space-between; margin: 10px 0">
      <my-button @click="showDialog" style="font-size: 16px"> Создать пост </my-button>

      <my-select v-model="selectedSort" :options="sortOptions" style="font-size: 16px"> </my-select>
    </div>

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
    <div
      v-if="!isPostLoading"
      v-intersection="{ handler: loadMorePosts, page: page, limit: limit }"
      class="observer"
    ></div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import axios from 'axios'
import { usePosts } from '@/components/hooks/usePosts'
import { useSortedPosts } from '@/components/hooks/useSortedPosts'
import { useSortedAndSearchPosts } from '@/components/hooks/useSortedAndSearchPosts'

export default {
  components: {
    PostList
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' }
      ],
      page: 1,
      limit: 10
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

    async loadMorePosts() {
      try {
        this.page += 1
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
  setup() {
    const { posts, isPostLoading, totalPages } = usePosts(10)
    const { selectedSort, sortedPosts } = useSortedPosts(posts)
    const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchPosts(sortedPosts)

    return {
      posts,
      isPostLoading,
      totalPages,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts
    }
  },
  mounted() {
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

  computed: {},

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

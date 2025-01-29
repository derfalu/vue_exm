import axios from 'axios'
import { ref, onMounted } from 'vue'

export function usePosts(limit) {
  const posts = ref([])
  const totalPages = ref(0)
  const isPostLoading = ref(true)
  const fetchingPosts = async () => {
    try {
      this.isPostLoading = true
      setTimeout(async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: limit
          }
        })
        totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
        posts.value = response.data
        isPostLoading.value = false
      }, 1000)
    } catch (e) {
      alert('Ошибка!')
    }
  }

  onMounted(fetchingPosts)
  
  return {
    posts,
    totalPages,
    isPostLoading
  }
}

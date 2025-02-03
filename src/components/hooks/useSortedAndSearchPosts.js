import { ref, computed } from 'vue'

export function useSortedAndSearchPosts(sortedPosts) {
  const searchQuery = ref('')

  const sortedAndSearchedPosts = computed(() => {
    return sortedPosts.value.filter((post) => post.title.toLowerCase().includes(searchQuery.value))
  })

  return {
    searchQuery,
    sortedAndSearchedPosts
  }
}
import { ref, computed } from 'vue'

export function useSortedPosts(posts) {
  const selectedSort = ref('')
  const sortedPosts = computed(() => {
    return [...posts.value].sort((a, b) => {
      return a[selectedSort.value]?.localeCompare(b[selectedSort.value])
    })
  })
  console.log(posts.value)
  console.log(selectedSort)
  console.log(sortedPosts)
  return {
    selectedSort,
    sortedPosts
  }
}

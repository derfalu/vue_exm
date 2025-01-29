import axios from 'axios'

export const postModule = {
  state: () => ({
    posts: [],
    isPostLoading: false,
    page: 1,
    limit: 10,
    totalPages: ''
  }),
  getters: {
    getPosts(state) {
      return state.posts
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setLoading(state, bool) {
      state.isPostLoading = bool
    },
    setPage(state, page) {
      state.page = page
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages
    },
    incrementPage(state) {
      state.page++
    }
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit('setLoading', true)
        setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: state.page,
              _limit: state.limit
            }
          })
          commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / this.limit))
          commit('setPosts', response.data)
          commit('setLoading', false)
        }, 1000)
      } catch (e) {
        alert('Ошибка!')
      }
    }
  },
  namespaced: true,
}

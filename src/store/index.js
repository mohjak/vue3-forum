import { createStore } from 'vuex'
import sourceData from '@/data'

export default createStore({
  state: {
    ...sourceData,
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3',
  },
  getters: {
    authUser: (state) => {
      const user = state.users.find((user) => user.id === state.authId)
      if (!user) return null
      return {
        ...user,
        // authUser.posts
        get posts() {
          return state.posts.filter((post) => post.userId === user.id)
        },
        // authUser.postsCount
        get postsCount() {
          return this.posts.length
        },
        get threads() {
          return state.threads.filter((thread) => thread.userId === user.id)
        },
        get threadsCount() {
          return this.threads.length
        },
      }
    }
  },
  actions: {
    createPost(context, post) {
      post.id = 'qqqq' + Math.random()
      context.commit('setPost', { post }) // set the post
      context.commit('appendPostToThread', { postId: post.id, threadId: post.threadId }) // append post to thread
    },
  },
  mutations: {
    setPost(state, { post }) {
      state.posts.push(post)
    },
    appendPostToThread(state, { postId, threadId }) {
      const threads = state.threads.find((thread) => thread.id === threadId)
      threads.posts.push(postId)
    },
  },
})

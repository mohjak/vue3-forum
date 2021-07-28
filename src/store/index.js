import { createStore } from 'vuex'
import getters from '@/store/getters'
import actions from '@/store/actions'
import mutations from '@/store/mutations'

export default createStore({
  state: {
    categories: [],
    forums: [],
    threads: [],
    posts: [],
    users: [],
    // authId: '5cePT6gD78gzmM7ckGKSGb2DCSI2',
    authId: null,
    unsubscribes: [],
    authUserUnsubscribe: null,
  },
  getters,
  actions,
  mutations,
})

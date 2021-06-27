<template>
  <h1>{{ category.name }}</h1>
  <ForumList :title="category.name" :forums="getForumsForCategory()" />
</template>

<script>
import ForumList from '@/components/ForumList'
import { findById } from '@/helpers'
export default {
  components: { ForumList },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    category() {
      return findById(this.$store.state.categories, this.id) || {}
    },
  },
  methods: {
    getForumsForCategory() {
      return this.$store.state.forums.filter((forum) => forum.categoryId === this.id)
    },
  },
  async created() {
    const category = await this.$store.dispatch('fetchCategory', { id: this.id })
    this.$store.dispatch('fetchForums', { ids: category.forums })
  },
}
</script>

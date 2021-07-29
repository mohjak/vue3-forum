<template>
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :title="category.name"
    :category-id="category.id"
    :forums="getForumsForCategory(category)"
  />
</template>

<script>
import ForumList from '@/components/ForumList'
export default {
  components: { ForumList },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  computed: {
    forums() {
      return this.$store.state.forums
    },
  },
  methods: {
    getForumsForCategory(category) {
      return this.forums.items.filter((forum) => forum.categoryId === category.id)
    },
  },
}
</script>

<style></style>

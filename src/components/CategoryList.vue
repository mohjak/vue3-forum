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
import sourceData from '@/data'
import ForumList from '@/components/ForumList'
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  components: { ForumList },
  data() {
    return {
      forums: sourceData.forums,
    }
  },
  methods: {
    getForumsForCategory(category) {
      return this.forums.filter((forum) => forum.categoryId === category.id)
    },
  },
}
</script>

<style></style>

<template>
  <h1>{{ category.name }}</h1>
  <ForumList :title="category.name" :forums="getForumsForCategory()" />
</template>

<script>
import sourceData from '@/data'
import ForumList from '@/components/ForumList'
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
      return sourceData.categories.find((category) => category.id === this.id)
    },
  },
  methods: {
    getForumsForCategory() {
      return sourceData.forums.filter((forum) => forum.categoryId === this.id)
    },
  },
}
</script>

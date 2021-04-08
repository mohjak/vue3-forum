<template>
  <h1>Welcome to the Forum</h1>
  <ForumList :forums="forums" />
</template>

<script>
import sourceData from '@/data.json'
import ForumList from '@/components/ForumList'
export default {
  data() {
    return {
      forums: sourceData.forums,
    }
  },
  components: { ForumList },
}
</script>

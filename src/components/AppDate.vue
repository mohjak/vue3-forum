<template>
  <span :title="humanFriendlyDate">
    {{ diffForHuman }}
  </span>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
export default {
  props: {
    timestamp: {
      type: [Number, Object],
      required: true,
    },
  },
  computed: {
    normalizeTimestamp() {
      return this.timestamp?.seconds || this.timestamp
    },
    diffForHuman() {
      return dayjs.unix(this.normalizeTimestamp).fromNow()
    },
    humanFriendlyDate() {
      return dayjs.unix(this.normalizeTimestamp).format('llll')
    },
  },
}
</script>

<style></style>

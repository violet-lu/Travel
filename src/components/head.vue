<template>
  <div>
    <head-line></head-line>
    <head-pic></head-pic>
    <head-dist></head-dist>
    <head-sell></head-sell>
  </div>
</template>

<script>
import HeadLine from './component/headline.vue'
import HeadPic from './component/headpic.vue'
import HeadDist from './component/headdist.vue'
import HeadSell from './component/headsell.vue'
export default {
  name: 'Head',
  components: {
    HeadLine,
    HeadPic,
    HeadDist,
    HeadSell
  }
}
</script>

<style scoped>
</style>

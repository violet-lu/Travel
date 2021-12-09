<template>
  <div>
    <head-line></head-line>
    <head-pic></head-pic>
    <head-dist></head-dist>
  </div>
</template>

<script>
import HeadLine from './component/headline.vue'
import HeadPic from './component/headpic.vue'
import HeadDist from './component/headdist.vue'
export default {
  name: 'Head',
  components: {
    HeadLine,
    HeadPic,
    HeadDist
  }
}
</script>

<style scoped>
</style>

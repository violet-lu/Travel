<template>
  <div>
    <head-line></head-line>
    <head-pic></head-pic>
  </div>
</template>

<script>
import HeadLine from './component/headline.vue'
import HeadPic from './component/headpic.vue'
export default {
  name: 'Head',
  components: {
    HeadLine,
    HeadPic
  }
}
</script>

<style>
</style>

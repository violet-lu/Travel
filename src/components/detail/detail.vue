<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list></detail-list>
  </div>
</template>

<script>
import DetailList from './component/detaillist.vue'
import DetailHeader from './component/detailheader.vue'
import DetailBanner from './component/detailbanner.vue'
export default {
  name: 'Detail',
  components: {
    DetailList,
    DetailHeader,
    DetailBanner
  }
}
</script>

<style scoped>

</style>

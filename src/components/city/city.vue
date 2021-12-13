<template>
  <div class="city">
    <city-header></city-header>
    <city-recent></city-recent>
    <city-alphbet></city-alphbet>
  </div>
</template>

<script>
import CityHeader from './component/cityheader.vue'
import CityRecent from './component/cityrecent.vue'
import CityAlphbet from './component/cityalphbet.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityRecent,
    CityAlphbet
  }
}
</script>

<style scoped>
.city {
  background-color: lightgray;
}
</style>

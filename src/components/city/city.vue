<template>
  <div class="city">
    <city-header></city-header>
    <city-recent></city-recent>
  </div>
</template>

<script>
import CityHeader from './component/cityheader.vue'
import CityRecent from './component/cityrecent.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityRecent
  }
}
</script>

<style scoped>
.city {
  background-color: lightgray;
}
</style>

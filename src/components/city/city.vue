<template>
  <div class="city">
    <city-header></city-header>
    <city-recent></city-recent>
    <city-hot></city-hot>
    <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from './component/cityheader.vue'
import CityRecent from './component/cityrecent.vue'
import CityHot from './component/cityhot.vue'
import CityList from './component/citylist.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityRecent,
    CityHot,
    CityList
  }
}
</script>

<style scoped>
.city {
  background-color: lightgray;
}
</style>

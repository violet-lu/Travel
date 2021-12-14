<template>
  <div class="city">
    <city-header></city-header>
    <city-recent :cities="cities" :hotcities="hotCities"></city-recent>
    <city-alphbet :cities="cities"></city-alphbet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './component/cityheader.vue'
import CityRecent from './component/cityrecent.vue'
import CityAlphbet from './component/cityalphbet.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityRecent,
    CityAlphbet
  },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('../../../static/mock/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style scoped>
.city {
  background-color: lightgray;
}
</style>

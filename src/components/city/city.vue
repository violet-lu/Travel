<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-recent :cities="cities" :hotcities="hotCities"
    :letter="letter"
    ></city-recent>
    <city-alphbet :cities="cities" @change="handleLetterChange"></city-alphbet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './component/cityheader.vue'
import CityRecent from './component/cityrecent.vue'
import CitySearch from './component/citysearch.vue'
import CityAlphbet from './component/cityalphbet.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityRecent,
    CitySearch,
    CityAlphbet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
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
    },
    handleLetterChange (letter) {
      this.letter = letter
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

<template>
  <div>
    <head-line :city="city"></head-line>
    <head-pic></head-pic>
    <head-dist></head-dist>
    <head-sell></head-sell>
    <head-week></head-week>
  </div>
</template>

<script>
import HeadLine from './component/headline.vue'
import HeadPic from './component/headpic.vue'
import HeadDist from './component/headdist.vue'
import HeadSell from './component/headsell.vue'
import HeadWeek from './component/headweek.vue'
import axios from 'axios'
export default {
  name: 'Head',
  components: {
    HeadLine,
    HeadPic,
    HeadDist,
    HeadSell,
    HeadWeek
  },
  data () {
    return {
      city: ''
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>
</style>

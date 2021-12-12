<template>
  <div>
    <head-line :city="city"></head-line>
    <head-pic :list="swiperList"></head-pic>
    <head-dist :iconlist="iconList"></head-dist>
    <head-sell :selllist="sellList"></head-sell>
    <head-week :weeklist="weekList"></head-week>
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
      city: '',
      swiperList: [],
      iconList: [],
      sellList: [],
      weekList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('../../../static/mock/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.sellList = data.recommendList
        this.weekList = data.weekendList
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

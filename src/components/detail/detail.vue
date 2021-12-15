<template>
  <div>
    <detail-banner :sightname="sightName" :bannerimg="bannerImg" :gallerimgs="glleryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list></detail-list>
  </div>
</template>

<script>
import DetailList from './component/detaillist.vue'
import DetailHeader from './component/detailheader.vue'
import DetailBanner from './component/detailbanner.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: {}

    }
  },
  components: {
    DetailList,
    DetailHeader,
    DetailBanner
  },
  methods: {
    getDetailInfo () {
      axios.get('../../../static/mock/detail.json')
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <detail-banner :sightname="sightName" :bannerimg="bannerImg" :galleryimgs="galleryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :categorylist="categoryList"></detail-list>
    </div>
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
      galleryImgs: [],
      categoryList: []
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
        this.galleryImgs = data.galleryImgs
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
.content {
  height: 50rem;
}
</style>

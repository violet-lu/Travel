<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="img" :src="bannerimg">
      <div class="banner-content">
        <div class="banner-title">{{sightname}}</div>
      <div class="banner-number"><span class="banner-icon">&#xe624;</span>39</div>
      </div>
    </div>
    <common-gallery v-show="showGallery" @close="handleGalleryClose"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallery: false
    }
  },
  components: {
    CommonGallery
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  },
  props: {
    sightname: String,
    bannerimg: String,
    gallaryimgs: Array
  }
}
</script>

<style scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;
}
.img {
  width: 100%
}
.banner-content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: .6rem;
  color: #fff;
  background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}
.banner-title {
  flex: 1;
  font-size: .32rem;
  padding: 0 .2rem
}
.banner-number {
  margin-top: .14rem;
  padding: 0 .4rem;
  line-height: .32rem;
  height: .32rem;
  border-radius: .2rem;
  background: rgba(0, 0, 0, .8);
  font-size: .24rem;
}
.banner-icon {
  font-size: .24rem;
}
</style>

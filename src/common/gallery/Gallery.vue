<template>
  <div class="container" @click="handleGalleyClick">
    <div class="wrapper">
      <swiper class="img" :options="swiperOptions">
      <swiper-slide>
        <img class="swiperimg" src="//img1.qunarzz.com/sight/p0/2110/65/65a2f3a8a47977aea3.water.jpg_r_800x800_1fe7ab24.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiperimg" src="//img1.qunarzz.com/sight/p0/2110/65/65a2f3a8a47977aea3.water.jpg_r_800x800_1fe7ab24.jpg" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imges: {
      type: Array
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGalleyClick () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.container >>> .swiper-container {
  overflow: inherit;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 120;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
}
.wrapper {
  height: 0;
  padding-bottom: 100%;
  width: 100%;
}
.swiperimg {
  width: 100%;
}
.swiper-pagination {
  color: #fff;
  bottom: -1rem;
}
</style>

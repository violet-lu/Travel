<template>
  <div class="wraper">
    <swiper class="img" :options="swiperOptions">
      <swiper-slide v-for="item of swiperlist" :key="item.id">
        <img class="swiperimg" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HeadPic',
  props: {
    swiperlist: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style scoped>
.wraper >>> .swiper-pagination-bullet-active {
  background-color: beige;
}
.wraper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background-color: #eee;
}
.swiperimg {
  width:100%;
  height: 117px;
}
</style>

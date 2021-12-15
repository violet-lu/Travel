<template>
  <div class="banner">
    <img class="img" src="//img1.qunarzz.com/sight/p0/2109/20/204e37770f73cd73a3.water.jpg_600x330_8d8df0f9.jpg" alt="">
    <div class="banner-content">
      <div class="banner-title">北京环球度假区</div>
      <div class="banner-number"><span class="banner-icon">&#xe624;</span>39</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
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

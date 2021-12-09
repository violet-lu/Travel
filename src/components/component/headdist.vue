<template>
  <div class="headerView">
      <swiper :options="swiperOptions">
        <swiper-slider v-for="(page, index) of pages" :key="index">
          <div class="flexDist" v-for="item of page" :key="item.id">
            <img  class="flexImg" :src="item.imgUrl">
            <p class="text">{{item.desc}}</p>
          </div>
        </swiper-slider>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HeadDist',
  data () {
    return {
      swiperOptions: { },
      iconList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc: '景点门票'
      },{
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc: '景点门票'
      },{
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc: '景点门票'
      },{
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc: '景点门票'
      },{
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc: '景点门票'
      },{
        id: '0006',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc: '景点门票'
      },{
        id: '0007',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc: '景点门票'
      },{
        id: '0008',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc: '景点门票'
      }]
    }
  },
  computed: {
      pages () {
        const pages = []
        this.iconList.forEach((item, index) => {
            const page = Math.floor(index / 8)
              if (!pages[page]) {
                pages[page] = []
              }
              pages[page].push(item)
          })
        return pages
    }
  }
}
</script>

<style scoped>
.headerView {
  width: 375px;
  height: 150px;
}
.flexDist {
  border: 0 solid #ccc;
  float: left;
  width: 25%;
  height: 75px;
  text-align: center;
  margin: 0;
}
.text {
  padding: 5px;
  text-align: center;
  font-size: 10px;
}
.flexImg {
  width: 50px;
  height: 50px;
  text-align: center;
}
</style>

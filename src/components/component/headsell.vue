<template>
  <div class="sellBest">
    <div class="title">
      <p class="content">热销推荐</p>
    </div>
    <div class="sell" v-for="item of sellList" :key="item.id">
      <div class="sellImg">
        <img  class="img" :src="item.imgUrl">
      </div>
      <div class="sellInfo">
        <p class="sellTitle">{{item.selltitle}}</p>
        <p class="sellDesc">{{item.selldesc}}</p>
        <p class="desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadSell',
  data () {
    return {
      sellList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1901/1d/1daac7a000f52d24a3.img.jpg_200x200_2719dead.jpg',
        selltitle: '武汉园博园',
        selldesc: '自然博物馆，周末休闲好去处',
        desc: '查看详情'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1901/1d/1daac7a000f52d24a3.img.jpg_200x200_2719dead.jpg',
        selltitle: '武汉园博园',
        selldesc: '自然博物馆，周末休闲好去处',
        desc: '查看详情'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1901/1d/1daac7a000f52d24a3.img.jpg_200x200_2719dead.jpg',
        selltitle: '武汉园博园',
        selldesc: '自然博物馆，周末休闲好去处',
        desc: '查看详情'
      }]
    }
  }
}
</script>

<style scoped>
.title {
  width: 100%;
  height: 30px;
  background-color: lightgray;
}
.content {
  padding: 7px;
}
.sell {
  height: 100px;
  padding: 7px;
}
.sellImg {
  width:25%;
  height: auto;
  float: left;
  display: block;
}
.img {
  width: 90px;
  height: 90px;
}
.sellInfo {
  width: 75%;
  float: left;
  padding-top: 7px;
}
.sellTitle {
  font-size: 15px;
  line-height: 10px;
  padding: 7px;
}
.sellDesc {
  font-size: 10px;
  color: lightslategray;
  padding: 7px;
}
.desc {
  padding: 7px;
  border: 1px solid white;
  width: 50px;
  height: 10px;
  background-color: orange;
  margin-left: 7px;
  font-size: 8px;
  text-align: center;
  border-radius: 5px;
  color: beige;
}
</style>

<template>
  <div class="sellBest">
    <div class="title">
      <p class="content">热销推荐</p>
    </div>
    <div class="sell" v-for="item of selllist" :key="item.id">
      <div class="sellImg">
        <img  class="img" :src="item.imgUrl">
      </div>
      <router-link :to="'/detail/' + item.id" tag="div" class="sellInfo">
        <p class="sellTitle">{{item.title}}</p>
        <p class="sellDesc">{{item.desc}}</p>
        <p class="desc">查看详情</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadSell',
  props: {
    selllist: Array
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

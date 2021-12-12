<template>
  <div class="headweek">
    <div class="week">
      <p class="content">周末去哪儿</p>
    </div>
    <div class="weekInfo" v-for="item of weeklist" :key="item.id">
      <div class="weekPic">
        <img class="img" src="item.imgUrl">
      </div>
      <div class="weekcontent">
        <div class="weekTitle">
          <p>{{item.title}}</p>
        </div>
        <div class="weekDesc">
          <p>{{item.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadWeek',
  props: {
    weeklist: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.headweek {
  width: 100%;
  height: 30px;
  background-color: lightgray;
}
.content {
  padding: 7px;
}
.weekPic {
  width: 375px;
  height: 137.41px;
}
.img {
  width: 370px;
  height: 137px;
  float: left;
}
.weekTitle {
  padding: 8px;
}
.weekDesc {
  padding : 8px;
  font-size: 10px;
  color: lightslategray;
  min-width: 0;
  width: 80%;
  height: 10px;
}
.weekcontent {
  padding: 10px;
}
</style>

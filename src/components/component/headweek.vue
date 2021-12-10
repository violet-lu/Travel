<template>
  <div class="headweek">
    <div class="week">
      <p class="content">周末去哪儿</p>
    </div>
    <div class="weekInfo" v-for="item of weekList" :key="item.id">
      <div class="weekPic">
        <img class="img" src="item.imgUrl">
      </div>
      <div class="weekcontent">
        <div class="weekTitle">
          <p>{{item.weektitle}}</p>
        </div>
        <div class="weekDesc">
          <p>{{item.weekdesc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadWeek',
  data () {
    return {
      weekList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg',
        weektitle: '武汉必打卡',
        weekdesc: '到武汉感受神奇的热干面之都'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1711/4f/59f533696344fe.jpg_r_640x214_f8aa8c8f.jpg',
        weektitle: '湖北泡汤圣地',
        weekdesc: '一边赏美景一边泡温泉过冬日'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/6d/5afbf529076ef6.jpg_r_640x214_7414b151.jpg',
        weektitle: '三峡人家',
        weekdesc: '感受长江的水三峡的情怀'
      }]
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
  width: 100%;
  height: 137.41px;
}
.img {
  width: 375px;
  height: 137.41px;
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

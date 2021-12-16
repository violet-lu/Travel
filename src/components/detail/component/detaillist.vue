<template>
  <div>
    <div class="item" v-for="(item, index) of categorylist" :key="index">
      <div class="item-title">
        <span class="item-title-icon"></span>
        <p class="list-text">{{item.title}}</p>
      </div>
      <div v-if="item.children" class="item-chilren">
        <detail-list :categorylist="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    categorylist: Array
  }
}
</script>

<style scoped>
.item {
  background-color: white;
  width: 375px;
}
.item-title {
  border-radius: 3px;
  border: .02rem solid #ccc;
  height: 25px;
  border-top-style: hidden;
  border-left-style: hidden;
  border-right-style: hidden;
}
.item-title-icon {
  position: relative;
  left: .06rem;
  top: .06rem;
  display: inline-block;
  width: .36rem;
  height: .36rem;
  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
  margin-right: .1rem;
  background-size: .4rem 3rem;
  float: left;
}
.list-text {
  padding: 6px;
  font-size: 12px;
  padding-left: 15px;
}
.item-chilren {
  padding: 0 .2rem;
}
</style>

<template>
  <div class="headerView">
    <div class="headerReturn">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="headerSearch">
      <span class="search">&#xe624;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="headerCity">
        <p class="city">{{this.city}}</p>
        <span class="cityiconfont">&#xe624;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HeadLine',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style scoped>
  .headerView {
    width: 375px;
    height: 50px;
    background-color: #00bcd4;
  }
  .headerReturn {
    width: 10%;
    float: left;
    height: 100%;
    text-align: center;
  }
  .iconfont {
    width: 35px;
    height: 46px;
    font-size: 20px;
    vertical-align: middle;
    color: white;
    line-height: 2.4;
  }
  .headerCity {
    float: right;
    width: 20%;
    height: 100%;
  }
  .headerSearch {
    float: left;
    margin: 6px;
    background-color: white;
    height: 36px;
    width: 250px;
    vertical-align: middle;
    border-radius: 3px;
    line-height: 38px;
    font-size: 17px;
    color: lightsteelblue;
  }
  .city {
    width: 80%;
    float: left;
    text-align: center;
    font-size: 17px;
    vertical-align: bottom;
    height: 100%;
    color: white;
    line-height: 2.7;
  }
  .search {
    width: 40px;
    height: 46px;
    font-size: 36px;
    vertical-align: middle;
    line-height: 2.4px;
    color: black;
  }
  .cityiconfont {
    width: 35px;
    height: 46px;
    font-size: 20px;
    vertical-align: middle;
    color: white;
    line-height: 2.4;
  }
</style>

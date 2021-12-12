<template>
  <div class="header">
      <div class="upper">
        <div class="return">
          <span class="iconfont">&#xe624;</span>
        </div>
        <div class="content">
          <p class="text">城市选择</p>
        </div>
      </div>
      <div class="search">
        <p>输入城市名或拼音</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped>
.header {
  width: 375px;
  height: 46px;
  background-color: #00bcd4;
}
.upper {
  width: 375px;
  height: 50%;
  padding: 2px;
}
.return {
  float: left;
}
.content {
  text-align: center;
  color: white;
  padding-top: 3px;
}
</style>

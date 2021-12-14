<template>
  <div class="header">
      <div class="upper">
        <router-link to='/#'>
          <div class="return">
            <span class="iconfont">&#xe624;</span>
          </div>
        </router-link>
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
  width: 365px;
  height: 60px;
  background-color: #00bcd4;
  margin-left: 5px;
  margin-right: 5px;
}
.upper {
  width: 375px;
  height: 43%;
  padding: 2px;
}
.return {
  float: left;
  padding-top: 7px;
  color:beige
}
.content {
  text-align: center;
  color: white;
  padding-top: 7px;
  padding-right: 25px;
}
.search {
  border-radius: 3px;
  background-color: white;
  padding: 5px;
  margin-right: 7px;
  margin-left: 7px;
  margin-bottom: 9px;
  width: 340px;
  text-align: center;
  color: lightsteelblue;
}

</style>

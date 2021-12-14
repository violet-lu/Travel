<template>
  <div class="header">
      <div class="upper">
        <router-link to='/'>
          <div class="return">
            <span class="iconfont">&#xe624;</span>
          </div>
        </router-link>
        <div class="content">
          <p class="text">城市选择</p>
        </div>
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
  height: 30px;
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
</style>

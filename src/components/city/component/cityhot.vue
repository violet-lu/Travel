<template>
  <div class="hot">
    <div class="recentHot">
      <p class="content">热门城市</p>
    </div>
    <div class="city">
      <div class="cityborder">
        <p class="text">北京</p>
      </div>
      <div class="cityborder">
        <p class="text">北京</p>
      </div>
      <div class="cityborder">
        <p class="text">北京</p>
      </div>
      <div class="cityborder">
        <p class="text">北京</p>
      </div>
      <div class="cityborder">
        <p class="text">北京</p>
      </div>
      <div class="cityborder">
        <p class="text">北京</p>
      </div>
      <div class="cityborder">
        <p class="text">北京</p>
      </div>
      <div class="cityborder">
        <p class="text">北京</p>
      </div>
      <div class="cityborder">
        <p class="text">北京</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHot'
}
</script>

<style scoped>
.hot {
  width: 375px;
  height: 100px;
}
.content {
  padding-left: 12px;
  font-size: 5px;
  vertical-align: middle;
  padding-top: 1px;
  padding-bottom: 2px;
}
.recentHot {
  height: 13x;
}
.city {
  background-color: white;
  margin-left: 5px;
  margin-right: 5px;
  position: absolute;
  width: 363px;
  height: 80px;
  margin-bottom: 5px;
}
.cityborder {
  border-radius: 3px;
  width: 80px;
  border: .02rem solid #ccc;
  height: 15px;
  margin-left: 5px;
  margin-top: 7px;
  position: relative;
  float: left;
}
.text {
  text-align: center;
  font-size: 7px;
  padding: 1px;
}
</style>

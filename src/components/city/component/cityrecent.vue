<template>
  <div class="recent">
    <div class="recentCity">
      <p class="content">当前城市</p>
    </div>
    <div class="city">
      <div class="cityborder">
        <p class="text">北京</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityRecent'
}
</script>

<style scoped>
.recent {
  width: 375px;
  height: 50px;
}
.content {
  padding-left: 12px;
  font-size: 5px;
  vertical-align: middle;
  padding-top: 3px;
}
.recentCity {
  height: 30%;
}
.city {
  background-color: white;
  margin-left: 5px;
  margin-right: 5px;
  position: absolute;
  width: 363px;
  height: 30px;
}
.cityborder {
  border-radius: 3px;
  width: 80px;
  border: .02rem solid #ccc;
  height: 15px;
  margin-left: 5px;
  margin-top: 7px;
  position: relative;
}
.text {
  text-align: center;
  font-size: 7px;
  padding: 1px;
}
</style>

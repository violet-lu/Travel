<template>
  <div class="list">
    <div class="alpha">
      <div class="listCity">
        <p class="content">A</p>
      </div>
      <div class="city">
        <div class="cityborder">
          <p class="text">阿拉尔</p>
        </div>
      </div>
      <div class="city">
        <div class="cityborder">
          <p class="text">阿拉尔</p>
        </div>
      </div>
      <div class="city">
        <div class="cityborder">
          <p class="text">阿拉尔</p>
        </div>
      </div>
      <div class="city">
        <div class="cityborder">
          <p class="text">阿拉尔</p>
        </div>
      </div>
      <div class="city">
        <div class="cityborder">
          <p class="text">阿拉尔</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList'
}
</script>

<style scoped>
.list {
  width: 350px;
  height: auto;
}
.content {
  padding-left: 12px;
  font-size: 5px;
  vertical-align: middle;
  padding-top: 3px;
}
.recentCity {
  height: 17px;
}
.city {
  background-color: white;
  margin-left: 5px;
  margin-right: 5px;
  width: 365px;
}
.cityborder {
  border-radius: 3px;
  border: .02rem solid #ccc;
  height: 15px;
  height: 25px;
  border-top-style: hidden;
}
.text {
  padding: 6px;
  font-size: 8px;
}
</style>

<template>
  <div ref="wrapper">
    <div>
        <div class="recent">
        <div class="recentCity">
            <p class="content">当前城市</p>
        </div>
        <div class="recent-city">
            <div class="cityborder">
            <p class="text">北京</p>
            </div>
        </div>
        </div>
        <div class="hot">
        <div class="recentCity">
            <p class="content">热门城市</p>
        </div>
        <div class="hot-city">
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
        <div class="list">
        <div class="alpha">
            <div class="recentCity">
                <p class="content">A</p>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            </div>
        </div>
        <div class="alpha">
            <div class="recentCity">
                <p class="content">B</p>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            <div class="list-city">
                <div class="list-cityborder">
                <p class="list-text">阿拉尔</p>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'CityRecent',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
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
  height: 17px;
}
.recent-city {
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
  float: left;
}
.text {
  text-align: center;
  font-size: 7px;
  padding: 1px;
}
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
.list-city {
  background-color: white;
  margin-left: 5px;
  margin-right: 5px;
  width: 365px;
}
.list-cityborder {
  border-radius: 3px;
  border: .02rem solid #ccc;
  height: 15px;
  height: 25px;
  border-top-style: hidden;
}
.list-text {
  padding: 6px;
  font-size: 8px;
}
.hot {
  width: 375px;
  height: 100px;
}
.hot-city {
  background-color: white;
  margin-left: 5px;
  margin-right: 5px;
  width: 363px;
  height: 80px;
  margin-bottom: 5px;
}
</style>

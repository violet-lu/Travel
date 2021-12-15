<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to='/'>
          <div class="return">
            <span class="iconfont">&#xe624;</span>
          </div>
        </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.header-abs {
  position: absolute;
  left: .2rem;
  top: .2rem;
  width: .8rem;
  line-height: .8rem;
  height: .8rem;
  border-radius: .4rem;
  background: rgba(0, 0, 0, .8);
  text-align: center;
}
.return {
  float: left;
  padding-top: 2px;
  padding-left: 3px;
  color:beige;
}
.iconfont {
  color: #fff;
  font-size: .3rem;
}
.header-fixed {
  position: fixed;
  width: 375px;
  height: 23px;
  background-color: #00bcd4;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding-top: 7px;
  color: #fff;
}
</style>

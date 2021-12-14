<template>
  <div class="citysearch">
      <input class="search" type="text" v-model="keyword"
      placeholder="输入城市名或拼音" />
      <div class="search-content" ref="search" v-show="keyword">
        <ul>
          <li class="search-item" v-for="item of list" :key="item.id">
            {{item.name}}
          </li>
          <li class="search-item" v-show="!list.length">
            没有找到匹配的数据
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style scoped>
.citysearch {
  width: 365px;
  height: 30px;
  background-color: #00bcd4;
  margin-left: 5px;
  margin-right: 5px;
}
.search {
  border-radius: 3px;
  background-color: white;
  padding: 5px;
  margin-right: 7px;
  margin-left: 7px;
  margin-bottom: 10px;
  width: 340px;
  text-align: center;
  color: lightsteelblue;
  height: 15px;
}
.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
}
.search-item {
  border-radius: 3px;
  border: .02rem solid #eee;
  height: 12px;
  border-top-style: hidden;
  padding: 6px;
  font-size: 8px;
}
</style>

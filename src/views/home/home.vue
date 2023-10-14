<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search />
    <home-categories />
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar></search-bar>
    </div>
    <home-content />
  </div>
</template>
<script>
  export default { name: "home" }
</script>
<script setup>
import { computed, watch } from 'vue';
import homeNavBar from './cpn/home-nav-bar.vue';
import homeSearch from './cpn/home-search.vue';
import homeCategories from './cpn/home-categories.vue'
import homeContent from './cpn/home-content.vue';
import searchBar from '@/components/search-bar/search-bar.vue'
import useHomeStore from '@/stores/modules/home'
import useScroll from '@/hooks/useScroll'

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestsData()
homeStore.fetchHomeCategories()
homeStore.fetchHomeHouseList()

// 监听滚到底部
const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, (newValue) => {
  if(newValue) {
    homeStore.fetchHomeHouseList().then(() => {
      isReachBottom.value = false
    })
  }
})

// 搜索框显示的控制
const isShowSearchBar = computed(() => {
  return scrollTop.value > 360
})
</script>

<style lang="less" scoped>
  .home {
    padding-bottom: 60px;
    .banner {
    img {
      width: 100%;
    }
   }

  }
</style>


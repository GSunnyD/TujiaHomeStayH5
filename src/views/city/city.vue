<template>
  <div class="city top-page">
    <div class="top">
       <!-- 搜索框功能 -->
      <van-search 
        v-model="searchValue" 
        placeholder="城市/区域/位置" 
        show-action 
        shape="round"
        @cancel="cancelClick"
      />
      <!-- tab的切换 -->
      <van-tabs v-model:active="tabActive" color="#ff9645" >
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
    <template v-for="(value, key, index) in allCities" >
      <city-group :groupData="value" v-show="key === tabActive"/>
    </template>
    

      <!-- <template v-for="item in currentCity?.cities">
      <div>{{ item }}</div>
    </template> -->
    </div>
    
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { storeToRefs } from 'pinia';
  // import { getCityAll } from '@/services'
  import useCityStore from '@/stores/modules/city'
  import cityGroup from '@/views/city/cpn/city-group.vue'
  

  const router = useRouter()

  // 搜索框功能
  const searchValue = ref("")
  const cancelClick = () => {
    router.back()
  }

  // tab切换
  const tabActive = ref()

  // 网络请求：请求城市的数据
  // 从Store中获取数据
  const cityStore = useCityStore()
  cityStore.fetchAllCitesData()
  const { allCities } = storeToRefs(cityStore)

  const currentCity = computed(() => allCities.value[tabActive.value])
  
</script>

<style lang="less" scoped>
.city {
  --van-tabs-line-height: 50px !important;
  // .top {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  // }
  // .content {
  //   margin-top: 104px;
  // }
  // 局部滚动
  .top {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 104px);
    overflow-y: auto;
  }
}
</style>
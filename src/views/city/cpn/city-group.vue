<template>
  <div class="city-group">
    <van-index-bar :sticky="false" highlight-color='var(--primary-color)' :index-list="groupList"> 
      <van-index-anchor index="热门" />
        <div class="list">
           <template v-for="(city, index) in groupData.hotCities">
            <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
           </template>
        </div>
       
     
      <template v-for="group in groupData?.cities" :key="group">
        <van-index-anchor :index="group.group" />
        <template v-for="city in group.cities">
          <van-cell :title="city.cityName" @click="cityClick(city)"/>
        </template>
      </template>
    </van-index-bar>
  </div>
    
</template>

<script setup>
import { computed} from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'


// 定义props
const props = defineProps({
  groupData: {
    type: Object,
    default() {
      return {}
    }
  }
})
// 动态索引
const groupList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift("#")
  return list
})

// 监听城市点击
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
  // 选中当前城市
 cityStore.currentCity = city
  //  返回上一级
  router.back()
}
</script>

<style scoped>
.city-group {
  --van-index-anchor-font-weight: 500;
  --van-index-anchor-font-weight: 500;
  --van-font-bold: 500;
  .list{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px;
    padding-right: 20px;
    .city{
      width: 70px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      font-size: 12px;
      color: #000;
      background-color: #fff4ec;
      margin: 6px;
      border-radius: 14px;
    }
  }

}
</style>
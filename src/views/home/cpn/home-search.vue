<template>
  <div class="home-search">
    <!-- 位置信息 -->
    <div class="section location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="section date-range" @click="showCalendar = true">
      <div class="date start">
        <div class="tip">入住</div>
        <div class="time" >{{ startDateStr }}</div>
      </div>
      <div class="stay">共{{ stayDate }}晚</div>
      <div class="date end">
        <div class="tip">离店</div>
        <div class="time">{{ endDateStr }}</div>
      </div>
    </div>
    <van-calendar 
      v-model:show="showCalendar" 
      type="range"
      :round="false" 
      color="#ff9645"
      :show-confirm="false"
      @confirm="onConfirm" />

    <!-- 价格/人数选择 -->
    <div class="section priceCounter">
      <div class="priceRange">价格不限</div>
      <div class="counterRange">人数不限</div>
    </div>

    <!--关键字 -->
    <div class="section keyword">
      关键字/位置/民宿名
    </div>

    <!-- 热门建议 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div class="tag"> {{ item.tagText.text }} </div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="section search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>

   
  </div>
</template>

<script setup>

  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import useCityStore from '@/stores/modules/city';
  import UseHomeStore from '@/stores/modules/home';
  import useMainStore from '@/stores/modules/main';
  import { storeToRefs } from 'pinia';
  import { formatMonthDay, getDiffDays } from '@/utils/formatDate';

  const router = useRouter()
  const cityStore = useCityStore()
  const { currentCity } = storeToRefs(cityStore)


  // 位置/城市
  const cityClick = () => {
    router.push("/city")
  }

  const positionClick = () => {
    navigator.geolocation.getCurrentPosition(res => {
      console.log("成功获取当前位置", res)
    }, err => {
      console.log("未能成功获取当前位置", err)
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    } )
  }

  // 日期范围的处理
  const mainStore = useMainStore()
  const { startDate, endDate } = storeToRefs(mainStore) 
  const startDateStr = computed(() => formatMonthDay(startDate.value))
  const endDateStr = computed(() => formatMonthDay(endDate.value))
  const stayDate = computed(() => getDiffDays(startDate.value, endDate.value))

  const showCalendar = ref(false)

  const onConfirm = (value) => {
    // 1.设置日期
    const selectStartDate = value[0]
    const selectEndDate = value[1]
    mainStore.startDate = selectStartDate
    mainStore.endDate = selectEndDate
    // 2.隐藏日历
    showCalendar.value = false
  }

  // 热门推荐
  const homeStore = UseHomeStore()
  const { hotSuggests } = storeToRefs(homeStore)

  // 搜索按钮
  const searchBtnClick = function() {
    router.push({
      path:'/search',
      query: {
        startDate: startDate.value,
        endDate: endDate.value,
        currentCity: currentCity.value.cityName
      }
    })
  }
</script>

<style lang="less" scoped>
  .home-search {
    --van-calendar-popup-height: 100%
  }
  .location {
  
    .city {
      flex: 1;
      font-size: 15px;
      color: #333;
    }
    .position {
      display: flex;
      align-content: center;
      .text{
        position: relative;
        top: 2px;
        margin-right: 8px;
        font-size: 12px;
        color: #666;
      }
      
      img {
        width: 18px;
        height: 18px;
      }
    }
   }


  .section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 20px;
    color: #999;
    height: 44px;
    .date {
      display: flex;
      flex-direction: column;
      .tip {
        font-size: 12px;
      }
      .time {
        font-size: 15px;
        font-weight: 500;
        margin-top: 3px;
        color: #333;
      }
    }
    .stay {
      flex: 1;
      font-size: 12px;
      text-align: center;
      color: #666;
    }
    .end {
      min-width: 30%;
      padding-left: 20px;
    }
  }

  .priceCounter {
    .priceRange {
      flex: 1;
      font-size: 14px;
    }
    .counterRange {
      min-width: 30%;
      padding-left: 20px;
    }
  }

 
  .hot-suggests {
    margin: 10px 0px;
    height: auto;
    .tag {
      margin: 3px;
      padding: 4px 8px;
      font-size: 12px;
      color: #3f4954;
      border-radius: 14px;
      background-color: #f1f3f5;
      
    }
  }
 
  .search-btn {
    .btn {
      width: 342px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      font-size: 18px;
      color: #fff;
      border-radius: 20px;
      background-image: var(--theme-linear-gradient);
    }
  }


</style>
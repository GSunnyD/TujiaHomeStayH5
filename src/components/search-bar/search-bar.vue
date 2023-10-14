<template>
  <div class="search">
    <div class="search-time">
      <div class="select-time">
        <div class="item start">
          <div class="name">住</div>
          <div class="time">{{ startDateStr }}</div>
        </div>
        <div class="item end">
          <div class="name">离</div>
          <div class="time">{{ endDateStr }}</div>
        </div>
      </div>
      <div class="content">
        <div class="keyword">关键字/位置/民宿</div>
      </div>
      <div class="right">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main';
import { formatMonthDay } from '@/utils/formatDate.js'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value, "MM.DD"))
const endDateStr = computed(() => formatMonthDay(endDate.value, "MM.DD"))
</script>

<style lang="less" scoped>
.search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  padding: 16px 16px 10px;
  background: #fff;
  .search-time {
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 45px;
    border-radius: 6px;
    background-color: #f2f4f6 ;
    .select-time {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      .item {
        display: flex;
        align-items: center;
        .name {
          color: #999;
        }
        .time {
          padding: 0 10px 0 3px;
          color: #333;
        }
      }
      .end {
        .time{
          position: relative;
          &::after {
            content: "";
            width: 0;
            height: 0;
            position: absolute;
            bottom: 0;
            right: -2px;
            border: 4px solid #666;
            border-color: transparent transparent transparent #333;
            transform: rotate(45deg);
            
          }
        }
        
      }
    }
    .content {
      flex: 1;
      padding: 0 6px;
      border-left: 1px solid #fff;
      .keyword {
        font-size: 12px;
        color: #999;

      }
    }
    .right {
      img {
        width: 38px;
        height: 38px;
        // display: inline-block;

        // background-image: url(../../assets/img/home/home-sprite.png);
        // background-position: -29px -151px;
        // background-size: 207px 192px;
        background: url('../../assets/img/home/home-sprite.png') no-repeat -62px -307px;
        transform: scale(0.6)
      }
      
    }
  }
}
</style>
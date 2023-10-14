<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="info">
        <div class="summaryText">
          {{ itemData.summaryText }}
        </div>
        <div class="houseName wrap_ellipsis">{{ itemData.houseName }}</div>
        <div class="price">
          <van-rate :model-value="commentScore " size="12px" color="#fff" readonly allow-half />
          <span class="new">¥{{ itemData.finalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
const commentScore = computed(() => {
  return Number(props.itemData.commentScore)
})
</script>

<style  lang="less" scoped>
  .house-item {
    width: 50%;
    .item-inner {
      position: relative;
      margin: 5px;
      border-radius: 6px;
      background-color: #fff;
      overflow: hidden;
      img {
        width: 100%;
      }
      .info{
        position: absolute;
        bottom: 0;
        padding: 8px 10px;
        color: #fff;
        .summaryText {
          font-size: 12px;
        }
        .houseName {
          margin: 5px 0px;
          font-size: 14px;
        }
        .price {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
        }
      }
    }
  }
</style>
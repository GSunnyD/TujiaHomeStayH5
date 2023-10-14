<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <span class="text">{{ itemData.location }}</span>
        </div>
        <div class="houseName wrap_ellipsis">{{ itemData.houseName }}</div>
        <div class="summaryText">
          {{ itemData.summaryText }}
        </div>
        <div class="price">
          <span class="new">¥{{ itemData.finalPrice }}</span>
          <span class="old">¥{{ itemData.productPrice }}</span>
          <span class="tip">{{ itemData?.priceTipBadge?.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style  lang="less" scoped>
 .house-item {
    width: 50%;
    .item-inner {
      margin: 5px;
      border-radius: 6px;
      background-color: #fff;
      overflow: hidden;
      img {
        width: 100%;
      }
      .info{
        padding: 8px 10px;
        color: #fff;
        .location {
          display: flex;
          align-items: center;
          img {
            width: 12px;
            height: 12px;
          }
          .text {
            font-size: 12px;
            color: #666;
            margin-right: 2px;
          }
        }
        .houseName {
          margin: 5px 0px;
          font-size: 14px;
          color: #333;
        }
        .summaryText {
          font-size: 12px;
          color: #666;
        }
    
        .price {
          display: flex;
          align-items: flex-start;
          margin: 8px 0;
          .new {
            font-size: 14px;
            color: #ff9645;
          }
          .old {
            margin: 0 3px;
            font-size: 12px;
            color: #999;
            text-decoration: line-through;
          }
          .tip {
            padding: 0 6px;
            font-size: 12px;
            color: #fff;
            border-radius: 8px;
            background-image: linear-gradient(#ff6666,#ff9f9f);
          }
        }
      }
    }
  }
</style>
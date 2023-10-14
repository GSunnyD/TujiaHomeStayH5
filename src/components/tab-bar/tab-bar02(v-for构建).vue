<template>
  
  <div class="tab-bar">
    <template v-for="(item, index) in tabBarData" :key="item">
      <div class="tab-bar-item" :class="{ active: currentIndex === index}" @click="itemClick(index, item)">
        <img v-if="currentIndex === index" :src="getAssetsURL(item.imageActiveURL)" alt="">
        <img v-else :src="getAssetsURL(item.imageURL)" alt="">
        <span class="text">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
  import { ref } from "vue"; 
  import { useRouter } from "vue-router";
  import { tabBarData } from "@/assets/data/tabBarData"
  import { getAssetsURL } from "@/utils/getAssetsURL" 
  const currentIndex = ref(0)
  const router = useRouter()
  const itemClick = (index, item) => {
    currentIndex.value = index
    router.push(item.path)
  }
</script>

<style  lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 50px;
  border-top: 1px solid #f5f5f5;
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.active {
      color: var(--primary-color);
    }
    .text {
      font-size: 12px;
    }
    img {
      width: 32px;
    }
  }
}
</style>
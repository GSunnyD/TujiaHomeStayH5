<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <span class="text">{{ item.title }}</span>
      </div>

    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 8px 15px;
  margin-top: 20px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 48px;
    padding: 0 12px;
    img {
      width: 32px;
      height: 32px;
    }
    .text {
      font-size: 12px;
      margin-top: 3px;
    }
  }
}

</style>
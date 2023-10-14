<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template  v-for="(item, index) in houselist" :key="item.data.houseId">
        <house-item-v9 v-if="item.discoveryContentType === 9" :item-data = "item.data" @click="itemClick(item.data)" />
        <house-item-v3 v-if="item.discoveryContentType === 3" :item-data = "item.data" @click="itemClick(item.data)" />
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import HouseItemV3 from '@/components/house-item-v3/house-item-v3.vue'
import HouseItemV9 from '@/components/house-item-v9/house-item-v9.vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const homeStore = useHomeStore()
const { houselist } = storeToRefs(homeStore)

const router = useRouter()
const itemClick = (item) => {
  router.push("/detail/" + item.houseId)
}

</script>

<style  lang="less" scoped>
.content {
  .title {
    margin: 20px 0px 0px 20px;
    font-size: 21px;
    color: #000;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 8px;
  }
} 
</style>
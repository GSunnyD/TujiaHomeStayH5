<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="var(--primary-color)" >
        <template v-for="(item, index) in tabBarData" :key="item" >
          <van-tabbar-item :to="item.path" >
            <span>{{ item.title }}</span>
            <template #icon>
              <img v-if="currentIndex === index" :src="getAssetsURL(item.imageActiveURL)" alt="">
              <img v-else :src="getAssetsURL(item.imageURL)" alt="">
            </template>
          </van-tabbar-item>
        </template>
      </van-tabbar>
  </div>
 
</template>

<script setup>
  import { ref, watch } from "vue"; 
  import { tabBarData } from "@/assets/data/tabBarData"
  import { getAssetsURL } from "@/utils/getAssetsURL" 
  import { useRoute } from "vue-router";
  const currentIndex = ref(0)
  const route = useRoute()
  // 监听路由改变时,找到对应索引,设置currentIndex
  watch(route, (newValue) => {
    const index = tabBarData.findIndex(item => item.path === newValue.path)
    currentIndex.value = index
  })

</script>

<style  lang="less" scoped>
.tab-bar {
  // height: 50px;
  img {
    height: 26px
  }

}
</style>
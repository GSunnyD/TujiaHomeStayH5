<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="var(--primary-color)" >
        <template v-for="(item, index) in tabBarData" :key="item" >
          <van-tabbar-item :to="item.path" icon="home-o">
            <span>{{ item.title }}</span>
            <!-- <template #icon>
              <img v-if="currentIndex === index" :src="getAssetsURL(item.imageActiveURL)" alt="">
              <img v-else :src="getAssetsURL(item.imageURL)" alt="">
            </template> -->
          </van-tabbar-item>
        </template>
      </van-tabbar>
  </div>

</template>

<script setup>
  import { ref } from "vue"; 
  import { tabBarData } from "@/assets/data/tabBarData"
  const currentIndex = ref(0)

</script>

<style  lang="less" scoped>
.tab-bar {
  // img {
  //   height: 26px
  // }
  // 局部定义一个变量:只针对tab-bar子元素有效
  // --van-tabbar-item-icon-size: 28px !important

  // 找到类,对类的CSS属性重写
  // 需要加:deeo()
  :deep(.van-tabbar-item__icon) {
    font-size: 28px;
  }
}
</style>
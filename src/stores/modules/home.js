import { defineStore } from "pinia";
import { getHotSuggests, getHomeCategories, getHomeHouseList } from "@/services/modules/home";

const UseHomeStore = defineStore("home", {
  state() {
    return {
      hotSuggests: [],
      categories: [],
      houselist: [],
      currentPage: 1
    }
  },
  actions: {
    async fetchHotSuggestsData() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchHomeCategories() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHomeHouseList() {
      const res = await getHomeHouseList(this.currentPage)
      this.houselist.push(...res.data)
      this.currentPage++
    }
  }
})

export default UseHomeStore
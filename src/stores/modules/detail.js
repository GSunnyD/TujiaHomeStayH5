import { defineStore } from "pinia";
import { getDetailInfos } from "@/services/modules/detail";
const useDetailStore = defineStore("Detail", {
  state: () => ({
    detailInfos: {}
  }),
  getters: {

  },
  actions: {
    async fetchDetailInfos(houseId) {
      const res = await getDetailInfos(houseId)
      this.detailInfos = res.data
    }
  }
})

export default useDetailStore
import NetRequest from '@/services/request/request'
export function getHotSuggests() {
  return NetRequest.get({
    url: "/home/hotSuggests"
  })
}
export function getHomeCategories() {
  return NetRequest.get({
    url: "/home/categories"
  })
}
export function  getHomeHouseList(currentPage) {
  return NetRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}
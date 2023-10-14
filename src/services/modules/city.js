import NetRequest from "@/services/request/request"
export function getCityAll() {
  return NetRequest.get({
    url: "/city/all"
  })
}
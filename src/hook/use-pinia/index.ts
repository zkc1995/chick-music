// 创建store仓库
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export default defineStore('chickMusic', () => {
  const state = reactive({
    value: 'neirong'
  })
  return { state }
})
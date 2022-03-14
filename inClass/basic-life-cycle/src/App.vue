<script setup>
// before create คือ ยังไม่ได้ใส่อะไรเลย
// created คือ เริ่มมีการเขียน script แล้ว
// before mount ยังไม่ได้แสดงผล
// mouted แสดงผลแล้ว

import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
import  NumUpdate from './components/NumUpdate.vue'
const num = ref(1)
const hasUpdate = ref(true)
const closeUpdate = ()=> hasUpdate.value=false
onBeforeMount(() => alert(`on before mount (Num : ${num.value})`))
onMounted(() => alert(`on mounted (Num : ${num.value})`))

onBeforeUpdate(() => {
  num.value = num.value > 2 ? 1 : num.value
  alert(`on before update (Num : ${num.value})`)
})
onUpdated(() => alert(`on updated (Num : ${num.value},${hasUpdate.value})`))
</script>
 
<template>
  <div>
    Num : {{ num }}
    <button @click="num = num + 1">+</button>
  </div>
  <div>
    <NumUpdate :currentNum="num"  v-if="hasUpdate" />
    <button @click="closeUpdate">ไม่อนุญาตให้ update</button>
  </div>
</template>
 
<style>
</style>
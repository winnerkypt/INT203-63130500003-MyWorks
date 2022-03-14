<script setup>
import {onBeforeUnmount , onUnmounted} from 'vue'
defineProps({
    currentNum:{
        type:Number
    }
})
onBeforeUnmount(()=>alert('on before unmount'))
onUnmounted(()=>alert('on unmounted'))
// ต้องเทสที่ component อื่นที่ไม่ใช่ app.vue 

</script>
 
<template>
<div>current number : {{ currentNum }}</div>
</template>
 
<style>

</style>
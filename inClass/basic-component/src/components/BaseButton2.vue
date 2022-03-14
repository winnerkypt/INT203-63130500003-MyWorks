<script setup>
defineEmits(['likeMe'])
const prop = defineProps ({
    buttonName: {
        type: String,
        require: true //ตรง button-name หน้า App.vue ต้องใส่ ถ้าไม่ใส่จะขึ้น warning และจะไม่ขึ้นชื่อปุ่ม
        // default : OK //เป็นการกำหนดค่าเริ่มต้นว่าจะให้ปุ่มมีชื่อว่าอะไร โดยที่ไม่ต้องใส่ base-name
    }
})
</script>
 
<template>
<div>
    <button class='button-color' @click="$emit('likeMe', {name : 'winner'})">{{ buttonName }}</button>
</div>
</template>
 
<style scoped>
.button-color{
    background-color: palevioletred;
}
</style>
<script setup>
defineEmits(['updateMe'])
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
    <button class='button-color' @click="$emit('updateMe', {type:'UPDATE_ME',bubble:true,e:$event})">{{ buttonName }}</button>
    <!-- ถ้าส่ง param ไปหลายตัว จะเรียกได้ตัวเดียว เพราะฉะนั้นควรรวมกันเป็น collection -->
</div>
</template>
 
<style scoped>
.button-color{
    background-color: skyblue;
}
</style>
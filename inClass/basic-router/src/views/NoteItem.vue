<script setup>
//เอา param ไปใช้กับสคริป
import { useRoute,useRouter } from 'vue-router'
let { params } = useRoute()
console.log(params.noteId)

//useRouter to get router object
const appRouter = useRouter()
const goBack=()=> appRouter.go(-1) //ย้อนกลับไป 1 หน้า
const goAboutUs = () => appRouter.push({name:'About'}) //ย้อนแบบใข้ url
</script>
 
<template>
    <div>
        <h2>NoteItem</h2>
        <p>your selected note is {{ this.$route.params.noteId }}</p>
        <button @click="goBack">Go Back</button>
        <button @click="goAboutUs">Go to about us page</button>
    </div>
</template>
 
<style>
</style>
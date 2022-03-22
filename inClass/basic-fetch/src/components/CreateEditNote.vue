<script setup>
import { computed } from 'vue'
defineEmits(['createNote'])
const props = defineProps({
    currentNote: {
        type: Object,
        default: {} //ถ้าไม่ส่งค่ามาจะเป็นปีกกา
    }
})

const newNote = computed(() => { 
    return {
        id: props.currentNote.id,
        noteDetail: props.currentNote.noteDetail
    }
})
//เอามาสร้าง obj ใหม่ ถ้า props.currentNote มันจะไปกระทบกับ editingNote เนื่องจาก referrence ไปที่ address เดียวกัน
console.log(newNote.value.noteDetail)

</script>
 
<template>
<div>
    <h2>Create/Edit Notes</h2>Note Detail
    <input type="text" v-model="newNote.noteDetail" />
    <button @click="$emit('createNote', noteDetail)">Create</button>
    <!-- ส่ง noteDetail ไป -->
    </div>
</template>
 
<style>
</style>
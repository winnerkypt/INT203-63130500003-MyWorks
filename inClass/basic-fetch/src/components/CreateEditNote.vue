<script setup>
import { computed } from 'vue'
defineEmits(['createNote', 'updateNote'])
const props = defineProps({
  currentNote: {
    type: Object,
    default: {}
  }
})
console.log(props.currentNote)
const newNote = computed(() => {
  return { 
    id: props.currentNote.id,
    noteDetail: props.currentNote.noteDetail
  }
})
console.log(newNote.value)
//เอามาสร้าง obj ใหม่ ถ้า props.currentNote มันจะไปกระทบกับ editingNote เนื่องจาก referrence ไปที่ address เดียวกัน


</script>
 
<template>
<div>
   <h2>Create/Edit Notes</h2>
    Note Detail <input type="text" v-model="newNote.noteDetail" />
    <button v-if="newNote.id > 0" @click="$emit('updateNote', newNote)">
      Update
    </button>
    <button v-else @click="$emit('createNote', newNote.noteDetail)">Create</button>
    <!-- ส่ง noteDetail ไป -->
    
    </div>
</template>
 
<style>
</style>
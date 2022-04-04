<script setup>
defineEmits(['deleteNote','editNote'])
defineProps({
  noteLists: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <div>
    <h2>Note List</h2>
    <ul>
      <li v-for="(note, index) in noteLists" :key="index">
        Id: {{ note.id }}, Note Detail: {{ note.noteDetail }}
        <button @click="$emit('editNote',note)">Edit</button> 
                              <!-- ส่งขอมูลทั้ง note เลย ไปให้ app -->
        <button @click="$emit('deleteNote',note.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<style></style>
<script setup>
import { ref, onBeforeMount } from 'vue'
import Note from './components/NoteList.vue'
import CreateEditNote from './components/CreateEditNote.vue'

// async กับ await เหมือนใส่สลับกันไปเรื่อยๆ โดยในนี้เริ่มจากที่ fetch() เนื่องจาก fetch เป็น async

const notes = ref([])
const getNotes = async () => { // res เป็น await ฟังก์ชันเลยต้องเป็น aynce
  const res = await fetch('http://localhost:5000/notes') //fetch เป็น async เลยต้องใส่ await ข้างหน้า
  if (res.status === 200) notes.value = await res.json()
  else console.log('not found')
}
onBeforeMount(async () => {
  await getNotes() // getNotes() เป็น async เวลาเรียกเลยต้องใส่ await 
  console.log(notes.value)
})

//เมื่อกดปุ่มลบ จะทำการลบข้อมูลใน db.json ด้วย
const removeNote = async (deleteNoteId) => { //deleteNoteId รับค่ามาจาก notes.id
  const res = await fetch(`http://localhost:5000/notes/${deleteNoteId}`, {
    method: 'DELETE'
  })
  console.log(res)
  if (res.status === 200) {
    //ทำการลบที่หน้าเว็บด้วย ถ้าไม่เขียนจะลบแค่ที่ backend แต่ front ไม่ลบตาม
    notes.value = notes.value.filter((note) => note.id != deleteNoteId)
    console.log('delete successfully')

  } else console.log('error, cannot delete')
}

const createNewNote = async (newNoteDetail) => {
  //res เก็บ response obj
  const res = await fetch(`http://localhost:5000/notes`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      NoteDetail: newNoteDetail
    })
  })

  if (res.status === 201) {
    //เอาค่าใน json มาแสดงหน้าเว็บ
    const addedNotes = await res.json() //เรียก obj ที่พึ่งเพิ่ม
    notes.value.push(addedNotes)
    console.log('added seccessfully')
  } else {
    console.log('error cannot add')
  }
}

const editingNote = ref({})
const toEditingMode = (editNote) => {
  editingNote.value = editNote //เอา obj ที่ต้องการ edit มาใส่ใน editingNote
  console.log(editingNote.value)
}

</script>
 
<template>
<div>
  <CreateEditNote @createNote="createNewNote"  :curruntNote="editingNote"/>
  <Note :notes="notes" @deleteNote="removeNote" @editNote="toEditingMode" />
  <!-- notes ที่ได้มาจาก backend ได้ผลเป็น real time -->
  </div>
</template>
 
<style>
</style>
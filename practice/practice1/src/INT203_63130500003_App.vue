<script setup>
import { ref } from 'vue'
const randNumbers = ref([])
const myName = '63130500003 Kanyapat Wittayamaitkul'
const click = ref(false)
const num = ref('')
const i = [0,1,2,3,4,5,6,7,8]
// generates random number in range (1-99)
const generateNumber = () => {
  let duplicate = false
  const rand = Math.floor(Math.random() * 99 + 1)
  duplicate = randNumbers.value.some((randNumber) => randNumber === rand)
  duplicate ? generateNumber() : randNumbers.value.push(rand)
  callClick();
}
function callClick() {
  click.value = true
}
const useNum = ref(false)
function addNum(){
 num.value = randNumbers.value[randNumbers.value.length-1]
 useNum.value = true
}
</script>

<template>
  <div class="top-container">
    <h3>{{ myName }}</h3>
    <div class="action-button">
      <button @click="generateNumber">Generate New Number</button>
      <button>Reset</button>
    </div>
    <div class="error-message">
      <!-- show error message when a user adding the same number in the bingo sheet -->
    </div>
    <div class="grid-container" >
      <div class="grid-item" v-for="id in i" :key="id">
        <button v-show="click" @click="addNum(id)" :class="{ unShow :useNum }">Add number</button>
        {{ num }}
      </div>
    </div>
    <div class="generate-number">
      <!-- show the list of generated number here -->
      <ul v-for="num, index in randNumbers" :key="index" :class="{ decor :useNum }">
      Generate Number #{{ index + 1 }} : ' {{ num }}'</ul>
    </div>
  </div>
</template>

<style scoped>
.decor{
  color : red;
text-decoration: line-through; 
}
.unShow{
  display:none;
}
.top-container {
  width: 330px;
}
.action-button {
  padding: 10px;
  display: flex;
  gap: 5px;
}
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 80px 80px 80px;
  column-gap: 5px;
  row-gap: 5px;
  background-color: green;
  padding: 10px;
}
.grid-item {
  display: flex;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.generate-number {
  font-size: 20px;
}
.error-message {
  height: 40px;
  color: red;
}
</style>

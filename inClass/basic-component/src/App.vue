<script setup>
import BaseButton from './components/BaseButton.vue';
import BaseButton2 from './components/BaseButton2.vue';
import BaseButton3 from './components/BaseButton3.vue';

const testMe1 = () => console.log('test me 1')
const testMe2 = (e) => console.log('test me 2', e)
const testMe3 = (e) => console.log('test me 3', e)
const testMe4 = (e, num) => console.log('test me 4', e, num)
const testMe5 = (e, num) => console.log('test me 5', e, num)
const testMe6 = (e) => console.log('test me 6', e)

const updateMe1 = () => console.log("update me 1")
const updateMe2 = (e) => console.log("update me 2", e)
const updateMe3 = (e) => console.log('test me 3', e)
const updateMe4 = (e, num) => console.log('test me 4', e, num)
const updateMe5 = (e, num) => console.log('test me 5', e, num)
const updateMe6 = (e) => console.log('test me 6', e)
const updateMe7 = (a,b) => console.log('test me 7', a,b)
const updateMe8 = (a,b) => console.log('test me 8', a,b)
const updateMe9 = (a,b) => console.log('test me 9', a,b)
</script>
 
<template>
    <div>
        <button @click="testMe1">test me1</button>
        <button @click="testMe2">test me2</button>
        <button @click="testMe3($event)">test me3</button>
        <button @click="testMe4($event, 389)">test me4</button>
        <button @click="testMe5(389, $event)">test me5</button>
        <button @click="testMe6()">test me6</button>        
    </div>
    <br />
    <div>
        <BaseButton button-name="Click Me 1" @clickMe="testMe1" />
        <BaseButton button-name="Click Me 2" @clickMe="testMe2" />
        <BaseButton button-name="Click Me 3" @clickMe="testMe3($event)" />
        <!-- รับ event มาจากหน้า BaseButton -->
        <BaseButton button-name="Click Me 4" @clickMe="testMe4($event, 389)" />
        <BaseButton button-name="Click Me 5" @clickMe="testMe5(389, $event)" />
        <BaseButton button-name="Click Me 6" @clickMe="testMe6()" />
    </div>
    <br />
    <div>
        <BaseButton2 button-name="Like Me 1" @likeMe="testMe1" />
        <BaseButton2 button-name="Like Me 2" @likeMe="testMe2" />
        <!-- event คือ ค่าที่ส่งมาจาก baseButton2 ซึ่งก็คือ success -->
        <BaseButton2 button-name="Like Me 3" @likeMe="testMe3($event)" />
        <BaseButton2 button-name="Like Me 4" @likeMe="testMe4($event, 389)" />
        <BaseButton2 button-name="Like Me 5" @likeMe="testMe5(389, $event)" />
        <BaseButton2 button-name="Like Me 6" @likeMe="testMe6()" />
    </div>
    <br />
    <div>
        <BaseButton3 button-name="Update Me 1" @updateMe="updateMe1" />
        <BaseButton3 button-name="Update Me 2" @updateMe="updateMe2" />
        <BaseButton3 button-name="Update Me 3" @updateMe="updateMe3($event)" />
        <BaseButton3 button-name="Update Me 4" @updateMe="updateMe4($event, 389)" />
        <BaseButton3 button-name="Update Me 5" @updateMe="updateMe5(389, $event)" />
        <BaseButton3 button-name="Update Me 6" @updateMe="updateMe6()" />
        <BaseButton3 button-name="Update Me 7" @updateMe="updateMe7" /> 
        <BaseButton3 button-name="Update Me 8" @updateMe="updateMe8()" /> 
        <BaseButton3 button-name="Update Me 9" @updateMe="updateMe9($event,200)" />  
      
    </div>
</template>
 
<style>
</style>
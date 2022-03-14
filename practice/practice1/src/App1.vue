<script setup>
const lists = [
    {
        name: 'salary',
        amount: 10000
    },
    {
        name: 'rent',
        amount: -2500
    },
    {
        name: 'parking fee',
        amount: 0
    },
    {
        name: 'car fuel',
        amount: -600
    },
    {
        name: 'commission',
        amount: 5500
    }

]
const total = 0;
const positiveBG = 'background-color:green;'
const negativeBG = 'background-color:red;'

</script>
 
<template>
    <h1>MY ACCOUNT</h1>
    <div v-for="list in lists">
        <div v-if="list.amount > 0">
            {{ list.name }}
            <span :style="positiveBG">{{ list.amount }}</span>
        </div>
         <div v-if="list.amount < 0">
            {{ list.name }}
            <span :style="negativeBG">{{ list.amount }}</span>
        </div>

    </div>
            <h3>Net total : 
                {{ lists.reduce((total,current) =>  total + current.amount,0) }} </h3>
</template>
 
<style>
</style>
<script setup>
const subjects=['INT201','INT202']
const products={
    productID : 111,
    productName : 'IT'
}
</script>
 
<template>
<ul>
    <li v-for="(subject,index) in subjects" :key="index">index:{{ index }} => {{ subject }}</li>
</ul>


<ul>
    <li v-for="(value,name) in products" :key="products.productID">key : {{ products.productID }} {{ name }} : {{ value }}</li>
</ul>
</template>
 
<style>

</style>
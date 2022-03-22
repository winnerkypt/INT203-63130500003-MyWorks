<script setup>

</script>
 
<template>
  <div>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <br/>
    <router-link :to="{ name: 'About' }">About Us</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
 
<style>
/* a {
  color: darkgreen;
}
.router-link-active {
  color: wheat;
} */
</style>
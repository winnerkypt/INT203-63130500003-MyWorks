<script setup>
defineEmits(['confirm'])
defineProps({
    lists: {
        type: Object,
        require: true
    }   
})
const msg= 'user_confirm'
</script>
 
<template>
    <div>
        <ul>
            <li v-for="(list, index) in lists" :key="index">
                Git Repo: {{ list.GitRepo }}
                <br />
                Project Title: {{ list.ProjectTitle }}
            </li>
        </ul>
        <button @click="$emit('confirm',msg.toUpperCase())">Confirm</button>
    </div>
</template>
 
<style>
body {
    line-height: 2;
}
</style>
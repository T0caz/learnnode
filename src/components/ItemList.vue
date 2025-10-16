<script setup>
defineProps(['items', 'title']);
</script>
<template>
     <h1>{{ title }}</h1>
        <ul>
            <li v-for="item in items">
                <input type="checkbox" v-model="item.isDone">
                {{ item.name }}
            </li>
        </ul>
</template>
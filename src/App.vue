<script setup>
import { ref } from 'vue';

let newItem = ref('');
let i = 1;
let items = ref([
    {id: i++, name:'Leib', isDone: false}, 
    {id: i++, name:'Sai', isDone: false}, 
    {id: i++, name:'Õlu', isDone: true}, 
    {id: i++, name:'Viin', isDone: true},
]);
let code = ref(404);
function addItem(){
    items.value.push({id: i++, name: newItem.value, isDone: false},);
    newItem.value = '';
}

</script>
<template>
<div class="container">
    <div class="content">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input v-model="newItem" class="input" type="text" placeholder="Add item">
            </div>
            <div class="control">
                <button class="button is-info" @click="addItem">
                    Add item
                </button>
            </div>
        </div>
        <h1>{{ newItem }}</h1>
        <ul>
            <li v-for="item in items">{{ item }}</li>
        </ul>
        <input v-model="code" class="input" type="number" placeholder="Enter Error code">
        <img :src="'https://http.cat/' + code">
    </div>
</div>
</template>
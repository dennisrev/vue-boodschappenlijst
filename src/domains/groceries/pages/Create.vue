<script setup>

import GroceryForm from '../components/GroceryForm.vue';

import { addGrocery } from '../store.js';
//import { getNumberOfGroceries } from '../store.js';

const grocery = {
    name: '',
    price: 0,
    quantity: 0
};

</script>

<template>

    <GroceryForm :grocery="grocery" @submit="addGrocery" />
 
</template>
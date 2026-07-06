<script setup>

import { ref } from 'vue';
import GroceriesTable from '../components/GroceriesTable.vue';
import { getAllGroceries } from '../store.js';

const products = getAllGroceries;

</script>

<template>

<GroceriesTable :products="products"/> 
 
</template>
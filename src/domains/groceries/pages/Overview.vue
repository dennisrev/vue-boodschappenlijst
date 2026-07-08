<script setup>

import { ref } from 'vue';
import GroceriesTable from '../components/GroceriesTable.vue';
import { getAllGroceries } from '../store.js';

const allGroceries = getAllGroceries;

</script>

<template>

<GroceriesTable :products="allGroceries"/> 
 
</template>
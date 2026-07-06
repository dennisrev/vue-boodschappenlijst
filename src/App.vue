<script setup>

import { ref } from 'vue';
import GroceriesTable from './components/GroceriesTable.vue';

const products = ref([
  { name: "Rijst", prize: 1.00, quantity: 1 },
  { name: "Broccoli", prize: 0.99, quantity: 2 },
  { name: "Koekjes", prize: 1.20, quantity: 4 },
  { name: "Noten", prize: 2.99, quantity: 0 },
]);

</script>

<template>

<GroceriesTable :products="products"/>

</template>

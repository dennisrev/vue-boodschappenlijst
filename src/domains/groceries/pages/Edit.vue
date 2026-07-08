<script setup>

import { useRoute } from 'vue-router';
const route = useRoute();

import GroceryForm from '../components/GroceryForm.vue';

import { updateGrocery } from '../store.js';
import { getGroceryById } from '../store.js';

const grocery = getGroceryById(route.params.id);

</script>

<template>

    <GroceryForm :grocery="grocery" @submit="updateGrocery"/>
 
</template>
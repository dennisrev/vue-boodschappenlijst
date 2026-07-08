<script setup>

import { computed } from 'vue';

const props = defineProps({
    products: Array
});

const totalCost = computed(() => {
  return props.products.reduce((sum, product) => sum + product.price * product.quantity, 0);
});

</script>

<template>

<div>

  <table align="center">
    <thead>
      <tr>
        <td colspan="5">Boodschappenlijst</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Product</th>
        <th>Prijs</th>
        <th>Hoeveelheid</th>
        <th>Subtotaal</th>
        <th>Aanpassen</th>
      </tr>
      <tr v-for="product in props.products" :key="product.id">
        <td> {{ product.name }} </td>
        <td> {{ product.price.toFixed(2) }} </td>
        <td> <input v-model="product.quantity" type="number"/> </td>
        <td> {{ (product.price * product.quantity).toFixed(2) }}</td>
        <td>
          <button><RouterLink :to="`/groceries/edit/${product.id}`">Edit</RouterLink></button>
        </td>
      </tr>
      <tr>
        <td colspan="3"><strong>Totaal</strong></td>
        <td> {{ totalCost.toFixed(2) }}</td>
      </tr>
    </tbody>
  </table>

</div>

</template>
<script setup>

import { computed } from 'vue';

const props = defineProps({
    products: Array
});

const totalCost = computed(() => {
  return props.products.reduce((sum, product) => sum + product.prize * product.quantity, 0);
});

</script>

<template>

<div>

  <table align="center">
    <thead>
      <tr>
        <td colspan="4">Boodschappenlijst</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Product</th>
        <th>Prijs</th>
        <th>Hoeveelheid</th>
        <th>Subtotaal</th>
      </tr>
      <tr v-for="(product, index) in props.products" :key="index">
        <td> {{ product.name }} </td>
        <td> {{ product.prize }} </td>
        <td> <input v-model="product.quantity" type="number"/> </td>
        <td> {{ (product.prize * product.quantity).toFixed(2) }}</td>
      </tr>
      <tr>
        <td colspan="3"><strong>Totaal</strong></td>
        <td> {{ totalCost.toFixed(2) }}</td>
      </tr>
    </tbody>
  </table>

</div>

</template>
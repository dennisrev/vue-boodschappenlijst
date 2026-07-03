<script setup>

import { ref, computed } from 'vue';

const products = ref([
  { name: "Rijst", prize: 1.00, quantity: 1 },
  { name: "Broccoli", prize: 0.99, quantity: 2 },
  { name: "Koekjes", prize: 1.20, quantity: 4 },
  { name: "Noten", prize: 2.99, quantity: 0 },
]);

const totalCost = computed(() => {
  return products.value.reduce((sum, product) => sum + product.prize * product.quantity, 0);
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
      <tr v-for="(product, index) in products" :key="index">
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

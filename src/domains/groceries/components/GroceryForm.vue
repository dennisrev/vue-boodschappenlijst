<script setup>
import { reactive } from 'vue';


const props = defineProps({
    grocery: Object
});

const groceryCopy = reactive({
    name: props.grocery.name,
    price: props.grocery.prize,
    amount: props.grocery.quantity
});

const emit = defineEmits(['submit']);

const saveGrocery = () => {
    emit('submit', {
        name: groceryCopy.name,
        prize: groceryCopy.prize,
        quantity: groceryCopy.amount
    });
};

</script>

<template>

<div>

  <table align="center">
    <thead>
        <tr>
            <td colspan="2">Product</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Naam</td>
            <td> <input v-model="groceryCopy.name" type="string"/> </td>
        </tr>
        <tr>
            <td>Prijs</td>
            <td> <input v-model="groceryCopy.prize" type="number"/> </td>
        </tr>
        <tr>
            <td>Hoeveelheid</td>
            <td> <input v-model="groceryCopy.quantity" type="number"/> </td>
        </tr>
    </tbody>
  </table>
  <button @click="saveGrocery">Opslaan</button>

</div>

</template>
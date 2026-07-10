import { ref, computed } from 'vue';

const groceries = ref([
  { id: 1, name: "Rijst", price: 1.00, quantity: 1 },
  { id: 2, name: "Broccoli", price: 0.99, quantity: 2 },
  { id: 3, name: "Koekjes", price: 1.20, quantity: 4 },
  { id: 4, name: "Noten", price: 2.99, quantity: 0 },
]);

export const getAllGroceries = computed(() => groceries.value);

export const getGroceryById = (id) => computed(() => groceries.value.find(grocery => grocery.id == id));

export const addGrocery = (grocery) => {
  const maxId = groceries.value.reduce((max, groceryItem) => (groceryItem.id > max ? groceryItem.id : max), 1);
  grocery.id = maxId + 1;
  groceries.value.push(grocery);
};

export const updateGrocery = (id, grocery) => {
  const groceryIndex = groceries.value.findIndex(groceryItem => groceryItem.id == id);
  groceries.value.splice(groceryIndex, 1, grocery);
};

export const removeGrocery = (grocery) => {
  const groceryIndex = groceries.value.findIndex(groceryItem => groceryItem.id == grocery.id);
  groceries.value.splice(groceryIndex, 1);
};
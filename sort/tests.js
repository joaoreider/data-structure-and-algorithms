const selectionSort = require("./selection-sort");
const quickSort = require("./quicksort");
// SELECTION SORT

// Teste 1 - Array já ordenado
const inputArr1 = [1, 2, 3, 4, 5];
const expectedOutput1 = [1, 2, 3, 4, 5];
const actualOutput1 = selectionSort(inputArr1);
console.log(JSON.stringify(expectedOutput1) === JSON.stringify(actualOutput1)); // Output: true

// Teste 2 - Array inversamente ordenado
const inputArr2 = [5, 4, 3, 2, 1];
const expectedOutput2 = [1, 2, 3, 4, 5];
const actualOutput2 = selectionSort(inputArr2);
console.log(JSON.stringify(expectedOutput2) === JSON.stringify(actualOutput2)); // Output: true

// Teste 3 - Array com valores repetidos
const inputArr3 = [3, 2, 1, 3, 1];
const expectedOutput3 = [1, 1, 2, 3, 3];
const actualOutput3 = selectionSort(inputArr3);
console.log(JSON.stringify(expectedOutput3) === JSON.stringify(actualOutput3)); // Output: true

// QUICKSORT

// Primeiro teste: verifica se a função retorna um array ordenado corretamente
const arr1 = [3, 1, 4, 2, 5];
const sortedArr1 = quickSort(arr1);
const expectedArr1 = [1, 2, 3, 4, 5];
if (JSON.stringify(sortedArr1) !== JSON.stringify(expectedArr1)) {
  console.error(`Test 1 failed. Expected ${expectedArr1}, but got ${sortedArr1}`);
}
else { console.log("Test 1 passed.")}

// Segundo teste: verifica se a função retorna um array vazio corretamente
const arr2 = [];
const sortedArr2 = quickSort(arr2);
const expectedArr2 = [];
if (JSON.stringify(sortedArr2) !== JSON.stringify(expectedArr2)) {
  console.error(`Test 2 failed. Expected ${expectedArr2}, but got ${sortedArr2}`);
} else { console.log("Test 2 passed.")}

// Terceiro teste: verifica se a função retorna um array com elementos duplicados corretamente
const arr3 = [3, 1, 2, 1, 2];
const sortedArr3 = quickSort(arr3);
const expectedArr3 = [1, 1, 2, 2, 3];
if (JSON.stringify(sortedArr3) !== JSON.stringify(expectedArr3)) {
  console.error(`Test 3 failed. Expected ${expectedArr3}, but got ${sortedArr3}`);
} else { console.log("Test 3 passed.")}

const findSmallest = require("./selection-sort");
const selectionSort = require("./selection-sort");


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


const binarySearch = require("./binary-search-algorithm.js");

// Teste 1 - valor encontrado no meio do array
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const val1 = 4;
console.log(binarySearch(arr1, val1)); // Deve retornar: 3

// Teste 2 - valor encontrado no final do array
const arr2 = [10, 20, 30, 40, 50];
const val2 = 50;
console.log(binarySearch(arr2, val2)); // Deve retornar: 4

// Teste 3 - valor encontrado no começo do array
const arr3 = [-2, 0, 2, 4, 6];
const val3 = -2;
console.log(binarySearch(arr3, val3)); // Deve retornar: 0

// Teste 4 - valor não encontrado no array
const arr4 = [1, 3, 5, 7, 9];
const val4 = 2;
console.log(binarySearch(arr4, val4)); // Deve retornar: -1

// Teste 5 - array par
const arr5 = [1, 3, 5, 7, 9, 10];
const val5 = 10;
console.log(binarySearch(arr5, val5)); // Deve retornar: 5

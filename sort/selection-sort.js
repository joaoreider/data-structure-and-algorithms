function findSmallest(arr){
  let smallest = arr[0];
  let smallestIndex = 0;
  for(let i = 1; i < arr.length; i++){
    if(arr[i] < smallest){
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

// ascending order
function selectionSort(arr){
  let newArr = [];
  const tam = arr.length
  for(let i = 0; i < tam; i++){
    let smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1)[0]);
  }
  return newArr;
}

module.exports = selectionSort;

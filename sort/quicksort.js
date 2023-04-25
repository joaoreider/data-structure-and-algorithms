
// 0(n * log n)
function quickSort(arr){
  if (arr.length < 2){
    return arr;
  }
  else {
    let  pivot = arr[0];
    let smallest = arr.slice(1).filter(i=> i <= pivot)
    let largest = arr.slice(1).filter(i=> i > pivot)
    return quickSort(smallest).concat([pivot], quickSort(largest))
  }
}

module.exports = quickSort;
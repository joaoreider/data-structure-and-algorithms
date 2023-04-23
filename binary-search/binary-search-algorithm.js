
// O(log n)
function binarySearch(sortedArray, key) {
  let start = 0;
  let end = sortedArray.length - 1;
  
  while (start <= end){
    let mid  = Math.floor((start + end) / 2);
    let guess = sortedArray[mid]
    
    if ( guess === key){
      return mid;
    }

    if (guess > key){
      end = mid -1
    }
    else {
      start = mid +1
    }  
  }
  return -1
}

module.exports = binarySearch
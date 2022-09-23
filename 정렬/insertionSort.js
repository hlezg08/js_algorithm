// O(n^2)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(insertionSort([3, 4, 5, 1, 2]));
console.log(insertionSort([5, 3, 8, 4, 9, 1, 6, 2, 7]));

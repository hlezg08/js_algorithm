function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low >= high) return;
  const pivot = arr[Math.floor((low + high) / 2)];
  const mid = partition(arr, low, high, pivot);
  quickSort(arr, low, mid - 1);
  quickSort(arr, mid, high);

  function partition(arr, low, high, pivot) {
    while (low <= high) {
      while (arr[low] < pivot) low++;
      while (arr[high] > pivot) high--;

      if (low <= high) {
        [arr[low], arr[high]] = [arr[high], arr[low]];
        low++;
        high--;
      }
    }
    return low;
  }
  return arr;
}

console.log('test1 : ' + quickSort([1, 12, 5, 26, 7, 14, 3, 7, 2]));
console.log('test2 : ' + quickSort([5, 3, 8, 4, 9, 1, 6, 2, 7]));

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  console.log(`left:${left},pivot:${pivot},right:${right}`);

  // 1. concat으로 합치기
  // return quickSort(left).concat(pivot, quickSort(right))

  // 2. spread 연산자로 합치기
  return [...quickSort(left), pivot, ...quickSort(right)];
}

quickSort([5, 1, 3, 9, 7]);
console.log('--------------------');
quickSort([5, 3, 8, 4, 9, 1, 6, 2, 7]);

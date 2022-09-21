function quickSort(arr) {
  if (arr.length < 2) return arr
  let pivot = arr[0]
  const left = []
  const right = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i])
    else right.push(arr[i])
  }
  console.log('------------')
  console.log(`left:${left}`)
  console.log(`pivot:${pivot}`)
  console.log(`right:${right}`)

  return quickSort(left).concat(pivot, quickSort(right))
}

quickSort([5, 1, 3, 9, 7])
quickSort([5, 3, 8, 4, 9, 1, 6, 2, 7])

function dist(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
}

function solution(numbers, hand) {
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  }
  const cur = { L: '*', R: '#' }
  let result = ''

  for (let number of numbers) {
    if (number === 1 || number === 4 || number === 7) {
      result += 'L'
      cur['L'] = number
    } else if (number === 3 || number === 6 || number === 9) {
      result += 'R'
      cur['R'] = number
    } else {
      const left_dist = dist(keypad[number], keypad[cur['L']])
      const right_dist = dist(keypad[number], keypad[cur['R']])

      if (left_dist < right_dist) {
        result += 'L'
        cur['L'] = number
      } else if (left_dist > right_dist) {
        result += 'R'
        cur['R'] = number
      } else {
        if (hand === 'left') {
          result += 'L'
          cur['L'] = number
        } else {
          result += 'R'
          cur['R'] = number
        }
      }
    }
  }

  return result
}

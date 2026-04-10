const sumAndAverage = (arr: number[]): { sum: number; average: number } => {
  let sum: number = 0

  for (let i = 0; i < arr.length;)
    sum += arr[i++]

  let average: number = sum / arr.length

  return { sum, average }
}

console.log(sumAndAverage([1, 2, 3, 4, 5]));

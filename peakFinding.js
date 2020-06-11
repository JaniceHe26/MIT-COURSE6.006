const findPeak = (arr) => {
  return findPeakRec(arr, 0, arr.length - 1);
}

const findPeakRec = (arr, start, end) => {
  if (start === end) {
    return arr[start];
  }

  let middle = Math.floor((end + start) / 2);
  let left = findPeakRec(arr, start, middle);
  let right = findPeakRec(arr, middle + 1, end);
  return (left > right) ? left : right;
}

const findPeakLoop = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findPeak([6, 5, 10, 4, 3, 8, -12, 2, 1, 9, 4, 7]));
console.log(findPeakLoop([6, 5, 10, 4, 3, 8, -12, 2, 1, 9, 4, 7]));
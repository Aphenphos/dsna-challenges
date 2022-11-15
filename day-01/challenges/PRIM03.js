function at(arr, i) {
  const item = arr[i];
  const length = arr.length;
  if (i < 0) {
    return arr[length + i];
  } else {
    return item;
  }
}

const first = at(['a', 'b', 'c', 'd', 'e'], 1);
const second = at(['a', 'b', 'c', 'd', 'e'], -2);
console.log(first, second);

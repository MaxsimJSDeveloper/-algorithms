// лінійний пошук

function linearSearch(arr: number[], x: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([1, 2, 5], 5));

// бінарний пошук

function binarySearch(arr: number[], x: number): number {
  let low: number = 0;
  let high: number = arr.length - 1;
  let mid: number = 0;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);

    // Якщо x більше за значення посередині списку, ігноруємо ліву половину
    if (arr[mid] < x) {
      low = mid + 1;
    }
    // Якщо x менше за значення посередині списку, ігноруємо праву половину
    else if (arr[mid] > x) {
      high = mid - 1;
    }
    // Інакше x присутній на позиції і повертаємо його
    else {
      return mid;
    }
  }

  // Якщо елемент не знайдений
  return -1;
}

const numbers: number[] = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(numbers, 7)); // Output: 3
console.log(binarySearch(numbers, 2)); // Output: -1

// інтерполяційний пошук

function interpolationSearch(arr: number[], x: number) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && x >= arr[low] && x <= arr[high]) {
    const index =
      low +
      Math.floor(((high - low) / (arr[high] - arr[low])) * (x - arr[low]));
    if (arr[index] === x) {
      return index;
    }
    if (arr[index] < x) {
      low = index + 1;
    } else {
      high = index - 1;
    }
  }

  return -1;
}

const arr = [1, 3, 5, 7, 9, 11, 14, 16, 18, 20, 22, 25, 28, 30];
const index = interpolationSearch(arr, 25);
console.log(arr[index]); // 25

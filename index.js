

// 1) calculateDifference
function calculateDifference(a, b) {
  return a - b;
}

// 2) isOdd
function isOdd(n) {
  if (typeof n !== 'number') return false;
  return Math.abs(n) % 2 === 1;
}

// 3) findMin
function findMin(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  return arr.reduce((min, x) => (x < min ? x : min), arr[0]);
}

// 4) filterEvenNumbers
function filterEvenNumbers(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.filter(x => typeof x === 'number' && x % 2 === 0);
}

// 5) sortArrayDescending
function sortArrayDescending(arr) {
  if (!Array.isArray(arr)) return [];
  return [...arr].sort((a, b) => b - a);
}

// 6) lowercaseFirstLetter
function lowercaseFirstLetter(str) {
  if (typeof str !== 'string' || str.length === 0) return str;
  return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7) findAverage
function findAverage(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  const nums = arr.filter(x => typeof x === 'number');
  if (nums.length === 0) return undefined;
  const sum = nums.reduce((s, x) => s + x, 0);
  return sum / nums.length;
}

// 8) isLeapYear
function isLeapYear(year) {
  if (typeof year !== 'number') return false;
  // Leap year: divisible by 4, except centuries not divisible by 400
  if (year % 4 !== 0) return false;
  if (year % 100 !== 0) return true;
  return year % 400 === 0;
}

// Sample calls and console output
console.log('calculateDifference(10, 4) =>', calculateDifference(10, 4));
console.log('isOdd(7) =>', isOdd(7));
console.log('isOdd(8) =>', isOdd(8));
console.log('findMin([5, 3, 9, 1, 4]) =>', findMin([5, 3, 9, 1, 4]));
console.log('filterEvenNumbers([1,2,3,4,5,6]) =>', filterEvenNumbers([1,2,3,4,5,6]));
console.log('sortArrayDescending([3,1,4,2,5]) =>', sortArrayDescending([3,1,4,2,5]));
console.log("lowercaseFirstLetter('Hello') =>", lowercaseFirstLetter('Hello'));
console.log('findAverage([2,4,6,8]) =>', findAverage([2,4,6,8]));
console.log('isLeapYear(2020) =>', isLeapYear(2020));
console.log('isLeapYear(1900) =>', isLeapYear(1900));
console.log('isLeapYear(2000) =>', isLeapYear(2000));

// Export functions in case they are needed elsewhere
module.exports = {
  calculateDifference,
  isOdd,
  findMin,
  filterEvenNumbers,
  sortArrayDescending,
  lowercaseFirstLetter,
  findAverage,
  isLeapYear,
};

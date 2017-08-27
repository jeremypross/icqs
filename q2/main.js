// Question 2: Find product of all integers in an array execpt at index
// source: https://www.interviewcake.com/
// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

  // For example, given:
    [1, 7, 3, 4]

  // your function would return:
    [84, 12, 28, 21]

  // by calculating:
    [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

  // Do not use division in your solution.

// ---------------------------------------------------------------------------

// input array:

let inputArray = [3, 1, 2, 5, 6, 4];

// multiplication of all integers before each index
// we give index 0 a value of 1 since it has no integers before it

[1, 3, 3 * 1, 3 * 1 * 2, 3 * 1 * 2 * 5, 3 * 1 * 2 * 5 * 6]
// final array of products before each index

let intArray = [1, 3, 3, 6, 30, 180];

// to get products BEFORE each index

let productsOfAllIntsBeforeIndex = [];
// for each integer find products of all integers
// before it - storing todal product so far each time
let productSoFar = 1;

for (let i=0; i < intArray.length; i++) {
  productsOfAllIntsBeforeIndex[i] = productSoFar;
  productSoFar *= intArray[i];
}

//  walk through array backwards - reverse indices
  // product AFTER each index

let productsOfAllIntsAfterIndex = [];

let productSoFar = 1;

for (let i = intArray.length; i >= 0; i--) {
  productsOfAllIntsAfterIndex[i] = productSoFar;
  productSoFar *= intArray[i];
}

// to find the products of all ints except int @ index - we go throgh array GREEDILY, twice
  // 1st - get product of all ints BEFORE index
  // 2nd - go backwards to get products of all ints AFTER index
  // 3rd - multiply both products.

// FINAL ANSWER -------------------------------------------------------------------

const getProductsOfAllIntsExceptAtIndex = (intArray) => {
  // check for at least two prices
  if (intArray.length < 2) {
    throw new Error('Need at least two prices!');
  }
  // create empty array
  let productsOfAllIntsExceptIndex = [];

  // for each integer we find the products of all integers BEFORE it
  // storing total product so far each time
  let productSoFar = 1;
  for (let i=0; i<intArray.length; i++) {
    productOfAllIntsExceptIndex[i] = productSoFar;
    productSoFar = intArray[i];
  }

  // for each integer - find product of all integers AFTER
  // since each index in products has product of all before integers
  // now we store total product of all other ints
  let productSoFar = 1;
  for (let j=intArray.length-1; j>=0; j--) {
    productOfAllIntsExceptIndex[j] *= productSoFar;
    productSoFar *= intArray[j];
  }
  return productOfAllIntsExceptIndex;
}

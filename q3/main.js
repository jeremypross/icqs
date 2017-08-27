// Q3: Highest product of 3 integers from a given array
// source: https://www.interviewcake.com/
  // Given an array of integers, find the highest product you can get from three of the integers
  // array will always have at least 3 integers

// five variables needed to calculate answer:
        // - highestProductOf3
        // - highestProductOf2
        // - lowestProductOf2
        // - highest
        // - lowest

const highestProductOf3 = (arrayOfInts) => {
  // check for at least 3 array values
  if (arrayOfInts.length < 3) {
    throw new Error ('Need at least three integers!')
  }

  // start at third item (index 2) - pre-populate highest and lowest based on first two items
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0, arrayOfInts[1]]);
  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];

  // except this one - prepopulated with first 3 items
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  for (let i=2; i < arrayOfInts.length; i++) {
    let current = arrayOfInts[i];

    // do we have new highest product of 3?
    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );

    // do we have new highest product of 2?
    lowestProductOf2 = Math.max(
      lowestProductOf2,
      current * highest,
      current * lowest
    );

    // do we have new highest? or lowest?
    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  }
  return highestProductOf3
}

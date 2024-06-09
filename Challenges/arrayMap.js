function hasContiguousSubarrayWithSum(arr, target) {
  if (arr.length < 1 || arr.length > 100000) {
      throw new Error("The array must contain between 1 and 100,000 elements.");
  }

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < -1000000000 || arr[i] > 1000000000) {
          throw new Error("Elements in the array must be between -1,000,000,000 and 1,000,000,000.");
      }
  }

  if (target < -1000000000 || target > 1000000000) {
      throw new Error("The target sum must be between -1,000,000,000 and 1,000,000,000.");
  }

  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end++) {
      // Add the current element to the running sum
      currentSum += arr[end];

      // While currentSum exceeds the target, contract the window
      while (currentSum > target && start <= end) {
          currentSum -= arr[start];
          start++;
      }

      // Check if the currentSum matches the target
      if (currentSum === target) {
          return true;
      }
  }

  // If no such subarray is found, return false
  return false;
}

// Test examples
console.log(hasContiguousSubarrayWithSum([4, 2, 7, 1, 9, 5], 17));  // Output: true
console.log(hasContiguousSubarrayWithSum([1, 2, 3, 4, 5], 11));     // Output: false



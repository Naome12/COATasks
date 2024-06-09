function transformString(inputString) {
  const length = inputString.length;
  
  // Constraint: The length of the string will be between 1 and 1000.
  if (length < 1 || length > 1000) {
      throw new Error("The length of the string must be between 1 and 1000.");
  }

  // Perform the required transformations based on the length of the string
  if (length % 15 === 0) {
      // Perform both operations: reverse first, then replace with ASCII codes
      const reversedString = inputString.split('').reverse().join('');
      const asciiTransformed = Array.from(reversedString).map(char => char.charCodeAt(0)).join(' ');
      return asciiTransformed;
  
  } else if (length % 5 === 0) {
      // Replace each character with its ASCII code
      const asciiTransformed = Array.from(inputString).map(char => char.charCodeAt(0)).join(' ');
      return asciiTransformed;
  
  } else if (length % 3 === 0) {
      // Reverse the entire string
      const reversedString = inputString.split('').reverse().join('');
      return reversedString;
  
  } else {
      // No transformation
      return inputString;
  }
}

// Test examples
console.log(transformString("Hamburger"));  // Output: "regrubmaH"
console.log(transformString("Pizza"));      // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie"));  // Output: "eikooCpihCetalocohC"

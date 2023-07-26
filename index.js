///task one 
function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return reversedStr;
}
const test='I love bangladesh'
const output=reverseString(test);
console.log(output)

///task two 
function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  const numbers = [2, -5, 10, -3, 7];
  const  positive= sumOfPositiveNumbers(numbers);
  console.log(positive);  
  
  ///task complete three
  function findMostFrequentElement(arr) {
 
    const frequencyMap = {};
    for (const element of arr) {
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    }

    let mostFrequentElement;
    let maxFrequency = 0;
    for (const element in frequencyMap) {
      if (frequencyMap[element] > maxFrequency) {
        maxFrequency = frequencyMap[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }
  
  const input = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const freaquencey= findMostFrequentElement(input);
console.log(freaquencey); 

//task four findTwoNumbersWithSum
function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return []; 
  }
  const inputArray = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  const outputs = findTwoNumbersWithSum(inputArray, targetValue);
  console.log(outputs); 

  //task five generateRandomPassword
  function generateRandomPassword(length) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?/";
  
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
  
    return password;
  }
  console.log(generateRandomPassword(8));

  //task six romanToInt
  function romanToInt(roman) {
    const romanNumeralMap = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    };
  
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
      const currentSymbolValue = romanNumeralMap[roman[i]];
      const nextSymbolValue = romanNumeralMap[roman[i + 1]];
  
      if (nextSymbolValue > currentSymbolValue) {
        result += nextSymbolValue - currentSymbolValue;
        i++; 
      } else {
        result += currentSymbolValue;
      }
    }
  
    return result;
  }
  
//   console.log(romanToInt("IX"));

  //task seven
  function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Array should have at least two elements.";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      return "There is no second smallest element in the array.";
    }
    return secondSmallest;
  }

//   console.log(findSecondSmallest([3, 1, 4, 5, 2]));  
function isPalindrome(word) {
  // Write your algorithm here
  const reversedStr = word.split("").reverse().join("");
  return word === reversedStr;
}

/* 
  Add your pseudocode here
  Steps:
  1. Break the word into individual letters
  2. Reverse the order of the letters
  3. Combine the letters back into a word
  4. Check if the reversed word is the same as the original
  5. Return true if they are the same, false otherwise
*/

/*
  Add written explanation of your solution here
  Explanation:
  This function checks if a word is the same when spelled backwards.
  It does this by reversing the word and comparing it with the original.
  If they are the same, the function returns true. Otherwise, it returns false.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

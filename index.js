function isPalindrome(word) {

  const reverseWord = word.split("").reverse().join("")
  return word === reverseWord

}

isPalindrome("bob")
isPalindrome("birthday")

/* 
  reverse word and test to see if reverse word = word.
*/

/*
  1) return (boolean to see if word === reverse word)
  2) create a helper function to convert word to reverse word
  3) create an array of word with split and use reverse method
      to reverse array
  4) use join method to combine array into a new word(reverse).
  5) return reverse word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("dad"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("home"));



}

module.exports = isPalindrome;

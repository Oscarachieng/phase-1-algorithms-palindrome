function isPalindrome(word) {
  // Write your algorithm here
  const testWord= reverseHandler(word);
  if (word === testWord) {
    return true;
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  1. declare the function that takes a string variable
  2. let splittedString=String.Split()
    let ReversedString= splittedString.Reverse()
    let finalReversedString = ReversedString.Join()
  3. if string === finalReversedString
  4. Return true

  5.Else Retur false.
*/

const reverseHandler = (word) => {
  return word.split("").reverse().join("")
}

console.log(isPalindrome("oscar"))
/*
  Add written explanation of your solution here
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

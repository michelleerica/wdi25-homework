// for each letter in the secret word
  //-check if the user's guess letter matches the current secret letter
  //if it does match - put the guess letter into the current slot of the guessed letters array
  //if it doesn't match

//   Array and Functions Bonus Material
//
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const hangmanLetter = ['F', 'O', 'X'];
console.log(hangmanLetter);
const currentLetter = ['', '', '','', '', 'F', 'O', 'X'];
console.log(currentLetter)

//let guessMatch = function(currentLetter) {

  for ( let i = 0; i < hangmanLetter.length; i++){
    console.log(currentLetter[i]);
    for (let j = 0; j < currentLetter.length; j++){
      if (currentLetter[j] == hangmanLetter[i]){
        console.log(`"${hangmanLetter[j]}"You found a match!`);

      }
      else{
        console.log('No match');
      }
      console.log(hangmanLetter[i]);
    }
  }




// Bonus
//
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
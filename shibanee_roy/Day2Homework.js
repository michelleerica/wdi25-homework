// The Calculator

            // Part 1

        // Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(number){
  //const squared = number**2;
  let square = number**2;
  console.log(`The result of squaring the number ${number} is ${square}.`);
  return square;
}



        // Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(number){
  let half =number/2;
  console.log(`Half of ${number} is ${half}.`);
  return half;
}



        // Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentageOf(number1,number2){
  let percentageAmount = number1/number2*100;
  console.log(`${number1} is ${percentageAmount.toFixed(2)}% ${number2}.`);
  return percentageAmount;

}



        // Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

// function areaOfCircle(rad){
//   area = Math.PI*rad*rad;
//   console.log(`The area for a circle with radius ${rad} is ${area}.`);
// }




        // Bonus: Round the result so there are only two digits after the decimal.

function roundedAreaOfCircle(rad){
  area = Math.PI*rad*rad;
  roundedArea = area.toFixed(2);
  console.log(`The area for a circle with radius ${rad} is ${roundedArea}.`);
  return roundedArea;

}





       // Part 2

       // Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

function motherCal(number) {

// Take half of the number and store the result.
    var half = halfNumber(number);
// Square the result of #1 and store that result.
    var square = squareNumber(half);
// Calculate the area of a circle with the result of #2 as the radius.
    var area = roundedAreaOfCircle(square);
// Calculate what percentage that area is of the squared result (#3).
    var percentageAmount = percentageOf(area,square);
    //var percentageAmount = percentageOf(square,area);
    }






//STRINGS

    // DrEvil
    // Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million.
function DrEvil(amount){
  if (amount===1000000){
    return amount + ' dollars (pinky)';
  }else {
    return amount + ' dollars';
  }

}
    //MixUp
    // Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.
function mixUp (word1, word2){
  //enter two words that are longer than 2 letters
          // const first2fWord1 = word1.substring(0,2);
          // const word1Length = word1.length+1;
          // const balWord1 = word1.substring(2,word1Length);
          //
          // const first2fWord2 = word2.substring(0,2);
          // const word2Length = word2.length+1;
          // const balWord2 = word2.substring(2,word1Length);
          //
          // return first2fWord2+ balWord1+" "+first2fWord1+balWord2;
return word2.slice(0,2) + word1.slice(2) + " " + word1.slice(0,2) + word2.slice(2);
}



    //FixStart
    // Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long.
function fixStart(string){
    const l1= string.charAt(0);
    const rpt = /l1/gi;
    const balString = string.slice(1);
    return l1+balString.replace(new RegExp(l1,'gi'), '*');

}

    //Verbing
    // Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
function verbing(string) {
  if (string.length>=3){

    if (string.slice(-3)=='ing'){
      return string+'ly';
    } else {
        return string+'ing';
    }
  }
  else {
    return string;
    }
  }





    //Not Bad
    //Create a function called notBad that takes a single argument, a string.
    function notBad(string){
      const iNot = string.indexOf('not');
      const iBad = string.indexOf('bad');
      if (iNot == -1 || iBad == -1 || iBad < iNot)
      return string;
        return string.slice(0, iNot) + 'good' + string.slice(iBad + 3);
     }



    //It should find the first appearance of the substring 'not' and 'bad'.
    // If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
    // If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

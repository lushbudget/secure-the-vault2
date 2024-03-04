/*
1) Create variables for each number in the combination.
2) Create a message with a template literal that reads the desired message followed by the 3 variables 
    separated by dashes to create the vault combination.
3) Use an alert to make the entire string pop up in a dialog box.
*/



//create a variable for the first number with an equation that equals 10.
const numOne = 5 * 2;

//creatue a variable for the second number with an equation that equals 40.
const numTwo = 11 * 4 - 4;

//create a variable for the third number with an equation that equals 39.
const numThree = 80 / 2 - 1;

//alert the message and vault combination so they show up in a dialoge box.

alert(`You have recieved this message because you have been chosen to open an important vault. Here is the combination: ${numOne}-${numTwo}-${numThree}`)

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

//create a variable for the entire combination
const secretCombo = numOne + '-' + numTwo + '-' + numThree


const userCombo = prompt("guess the combination to the vault!")
  if (userCombo === secretCombo) {
    alert('OPEN SESAME!')
    if(window.confirm('Come in?')) {
      window.open('./inside.html')
    }
    else window.open('https://www.imdb.com/title/tt0366996/')
    } else {
  alert('Get out ya Bozo!!')
  if(window.confirm('Try again?')) {
    window.open('index.html')
  }
  else window.open('https://en.wikipedia.org/wiki/Bozo_the_Clown')
  }




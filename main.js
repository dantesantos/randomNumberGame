document.getElementById("score").innerHTML = 0;
var score = 0;
var guesses = 10;

//randomNumber()
//Returns a random number from 1 to 100
  function randomNumber(){
    //The function .ceil() returns the smallest integer greater than or equal to
    //The function .floor() returns the largest integer less than or equal to 100
    //document.getElementById("demo").innerHTML = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1))) + Math.ceil(1);
    return Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1))) + Math.ceil(1);
  }

var ranNum = Number(randomNumber());

//evaluateGuess()
//Compares the input value and randomly generated number and returns true if the numbers are correct or false if they are incorrect
function evaluateGuess(){
  //declaring "input" as global variable
  guess = Number(document.getElementById("guessInput").value);
  if (isNaN(guess))
  {
    alert("That is not a number!\nPlease type a number between 1 and 100!");
    return false;
  }else
  {
    if(guess == "" || guess == null)
    {
      alert("Please type a number between 1 and 100!");
      return false;
    }else
    {
      if (guess >=1 && guess <=100)
      {
        hint(ranNum);
        return true;
      }else{
        alert('The number is out of range!\nPlease type a number between 1 and 100.');
        return false;
      }
    }
  }
}
//resetBoard()
//Returns the game board back to the initial state
function resetBoard(){
  score = 0;
  guesses = 10;
  document.getElementById("guessInput").value = "";
  document.getElementById("hint1").innerHTML = "";
  document.getElementById("hint2").innerHTML = "";
  randomNumber();
  ranNum = Number(randomNumber());
  //document.getElementById("demo").innerHTML = ranNum;
}
//hint()(basic)
//Sets the message text to a hint if the value if greater or lesser.

function hint(num){
  //----------processGuess()-----
  //The function processGuess() was included inside the hint() function (increment and decrement of "score")
  while(guesses > 1)
  {
    if(guess < num)
    {
      //If wrong guess, provides hint and decrements score and guess count
      document.getElementById("hint1").innerHTML = `${guess} is lower than the secret number.`;
      score -= 1;
      document.getElementById("score").innerHTML = score;
      guesses -=1;
      document.getElementById("guessLimit").innerHTML = guesses;
    }else if (guess > num){
      document.getElementById("hint1").innerHTML = `${guess} is higher than the secret number.`;
      score -= 1;
      document.getElementById("score").innerHTML = score;
      guesses -=1;
      document.getElementById("guessLimit").innerHTML = guesses;
    }else if (guess == num)
    {
      //If correct guess, resets guess count and generates new random number and increments score by left over guesses
      score += 1;
      document.getElementById("score").innerHTML = score + guesses;
      document.getElementById("hint1").innerHTML = "";
      resetBoard();
      alert(`You win!! The number is ${guess}!`);

    }
    
    //document.getElementById("demo").innerHTML = num;

    //hint()(take it further)
    //Sets the message text to show within how many numbers the guess was compared to the secret number
    var diff = Math.abs(Number(guess) - Number(num));

    for(let i = 0; i < 100; i += 10)
    {
      if(diff < i && diff > 5)
      {
        document.getElementById("hint2").innerHTML = `\nYou are within ${i} of the secret number.`;
        processGuess();
      }
    }
    if (diff <= 5)
    {
      document.getElementById("hint2").innerHTML = `\nYou are within 5 of the secret number.`;
      processGuess();
    }
  }


  alert("You loose!");
  resetBoard();
}

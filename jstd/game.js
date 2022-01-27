let numberToBeGuessed = null;
let userName;
let currentGuess;
let numberOfGuesses = 5;
let minNum = 0;
let maxNum = 25;

while (userName === undefined || userName === null || userName.length === 0) {
  userName = prompt("What is your name?");
}

alert("Welcome " + userName + "!!");

let selectedMinNum = parseInt(
  prompt("From which number is allowed to be guessed? (standaard: 0)")
);
if (!isNaN(selectedMinNum) && selectedMinNum >= 0) {
  minNum = selectedMinNum;
}

let selectedMaxNum = parseInt(
  prompt(
    "Till which number is allowed to be guessed? (standard: 25, hoger dan " +
      minNum +
      ")"
  )
);
if (!isNaN(selectedMaxNum)) {
  maxNum = selectedMaxNum;
}

while (maxNum <= minNum) {
  let selectedMaxNum = parseInt(
    prompt("Till which number is allowed to be guessed? (higher than " + minNum + ")")
  );
  if (!isNaN(selectedMaxNum)) {
    maxNum = selectedMaxNum;
  }
}

alert(
  "You have 5 tries to guess the number. The number is between " +
    minNum +
    " and " +
    maxNum +
    ". Good luck!"
);

numberToBeGuessed = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
console.log("Pssst the number is: " + numberToBeGuessed);

while (currentGuess !== numberToBeGuessed) {
  if (numberOfGuesses < 1) {
    alert(
      "Unfortunately you do not have any guesses left. You have lost the game. We will start the game over with a new number. The number is still between " +
        minNum +
        " and " +
        maxNum +
        "."
    );
    numberOfGuesses = 5;
    numberToBeGuessed = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
  }
  currentGuess = parseInt(prompt("Insert a number"));

  while (isNaN(currentGuess)) {
    currentGuess = parseInt(
      prompt(
        "You didnt fill in a number. Only fill in numbers. Try again."
      )
    );
  }

  alert("Your guess is: " + currentGuess);

  if (currentGuess > numberToBeGuessed) {
    numberOfGuesses--;
    if (numberOfGuesses < 1) {
      alert("This was your last guess.");
    } else {
      alert(
        "Unfortunately, your guess was too high. You still have: " +
          numberOfGuesses +
          " guesses left. Try again."
      );
    }

  } else if (currentGuess < numberToBeGuessed) {
    numberOfGuesses--;
    if (numberOfGuesses < 1) {
      alert("This was your last guess.");
    } else {
      alert(
        "Unfortunately, your guess was too low. You still have: " +
          numberOfGuesses +
          " guesses left. Try again:"
      );
    }
  } else {
    alert("You have guessed right! The number was: " + currentGuess);
    alert(
      "We will shut the game down. Thank you for playing " +
        userName +
        ", till next time!"
    );
  }
}

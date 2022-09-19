// rendering
let guessNumber = Math.floor(Math.random() * 10) + 1;

console.log(guessNumber);

const randomGuessNumber = () => {
  let tries = parseInt(prompt("Please try to guess number between 1 and 10"));

  let attempt = 0;
  triesCounter = 3;

  while (tries !== guessNumber && attempt < 3) {
    attempt++;
    triesCounter--;
    tries = parseInt(
      prompt(`Wrong answer..!! Please try again.${triesCounter}you have left`)
    );
  }
  if (tries === guessNumber && attempt <= 3) {
    alert(
      `You guess the correct Answer by only ${triesCounter} attempts.. Cheers`
    );
  } else {
    alert(
      `Sorry you failed to guess. your exceed the limit of tries. the Number was ${guessNumber}`
    );
  }
};

randomGuessNumber();

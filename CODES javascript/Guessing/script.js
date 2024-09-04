let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrng = document.querySelector(".wrng");
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100) + 1; //Math.random()*100 will give numbers upto 99 , so we add 1 to reach 100

console.log(answer);

let numGuesses = 0;

btn.addEventListener("click", () => {
  guessesNumber();
});

function guessesNumber() {
  if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
    wrng.innerHTML = "Enter between 1 to 100";
  } else {
    numGuesses++;
    guesses.innerHTML = "No. of Guess:" + numGuesses;

    if (input.value > answer) {
      wrng.innerHTML = "You guesses too High!";
      input.value = "";
    }
    else if(input.value<answer){
        wrng.innerHTML="You guessed too low!"
        input.value="";
    }
    else{
        wrng.innerHTML="congratulation  u guesssed correct answer"

        setTimeout(()=>{
            resetGame();
        },5000)
    }
  }
}


function resetGame(){
    numGuesses=0;
    let answer = Math.floor(Math.random() * 100) + 1; 
    input.value="";
    guesses.innerHTML="No. of guesses :0"

}
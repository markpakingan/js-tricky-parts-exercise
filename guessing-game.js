function guessingGame() {

    let randomNum = Math.floor(Math.random()*5);
    let gameWon = false;
    let guesses = 0;

    return function(int){

        if(gameWon){
            return "Game Over!"
        }

        guesses++;

        if(int === randomNum){
            gameWon = true;
            return `You win! and found the answer within ${guesses}guesses!`
        }else if (int < randomNum) {
            return(`${int} is too low!`);
        } else {
            return (`${int} is too high!`)
        }
    }

       
        
      
}


let game = guessingGame();
game(50); // "50 is too low!"
game(90); // "90 is too high!"
game(70); // "You win! You found 70 in 3 guesses."
game(70); // "The game is over, you already won!"


module.exports = { guessingGame };

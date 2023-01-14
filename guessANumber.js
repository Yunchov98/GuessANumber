function guessANumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const computerGuess = Math.floor(Math.random() * 100);
    let guess;

    const recursiveAsyncReadLine = function () {
        readline.question('Guess the number (0 - 100): ', number => {
            guess = Number(number);

            if (guess <= 100 && guess >= 0) {
                if (guess === computerGuess) {
                    console.log('You guess it !');
                    return readline.close();
                } else if (guess < computerGuess) {
                    console.log('Too low !');
                    recursiveAsyncReadLine();
                } else {
                    console.log('Too high');
                    recursiveAsyncReadLine();
                }
            } else {
                console.log('Invalid input! Try again...');
                recursiveAsyncReadLine();
            }
        });
    }

    recursiveAsyncReadLine();
}

guessANumber();
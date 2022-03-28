document.addEventListener("DOMContentLoaded", () => {

    const help = document.querySelector(".helpImg");
    const start = document.getElementById('start');
    const game = document.querySelector('.gameContainer');
    const numCont = document.getElementById('numContainer');
    const submit = document.getElementById('submit');
    let tries = 0;

    const answer = Math.floor(Math.random() * 1000);
    console.log(answer);

    help.onclick = () => {
        const helpPop = document.getElementById('helpPop');
        helpPop.classList.toggle("show");
    }

    start.onclick = (e) => {
        e.target.classList.toggle('hide');
        game.classList.add('show');
    }

    submit.onclick = (e) => {
        const guess = document.getElementById('guess');
        const guessNum = parseInt(guess.value);

        if(guess.value !== '' && guessNum !== NaN) {
            tries = tries + 1;

            if(guessNum === answer) {
                if(tries > 1) {
                    numCont.innerHTML = `<h3>Congrats!</h3> <br> <p>The number was ${answer}</p> <br> <p>It took you ( ${tries} ) tries</p>`;
                }
                else {
                    numCont.innerHTML = `<h3>Congrats!</h3> <br> <p>The number was ${answer}</p> <br> <p>It took you ( ${tries} ) try</p>`;
                }
                submit.onclick = null;
                
            }
            else if(guessNum === 69) {
                numCont.textContent = 'nice.';
            }
            else if(guessNum === 420) {
                numCont.textContent = 'hell yeah';
            }
            else if(guessNum < answer) {
                numCont.textContent = 'HIGHER';
            }
            else if(guessNum > answer) {
                numCont.textContent = 'LOWER';
            }
        }
    }
});
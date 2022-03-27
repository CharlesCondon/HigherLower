document.addEventListener("DOMContentLoaded", () => {

    // const help = document.querySelector(".helpImg");
    const start = document.getElementById('start');
    const game = document.querySelector('.gameContainer');
    const numCont = document.getElementById('numContainer');
    const submit = document.getElementById('submit');

    const num = Math.floor(Math.random() * 1000);
    console.log(num);

    // help.onclick = () => {
    //     const helpPop = document.getElementById('helpPop');
    //     helpPop.classList.toggle("show");
    // }

    start.onclick = (e) => {
        e.target.classList.toggle('hide');
        game.classList.add('show');
    }

    submit.onclick = (e) => {
        const guess = document.getElementById('guess');
    }
});
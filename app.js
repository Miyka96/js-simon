const computerNumberWrapper = document.querySelector('.computer-number-wrapper');
let numberWrapper
let number
const playBtn = document.getElementById("play-btn");
let inputNumber = document.getElementsByClassName('.user-number').value;
console.log(inputNumber);
let userNumberArray = [];


for (let i = 0; i < 5; i++) {
    numberWrapper = document.createElement('div');
    numberWrapper.classList.add('number-wrapper');
    number = document.createElement('div');
    number.classList.add('number');
    computerNumberWrapper.append(numberWrapper);
    numberWrapper.append(number);
}


function stampaNumeriRandom() {
    playBtn.removeEventListener('click', stampaNumeriRandom);
    let randomNumArray = [];
    numberElements = document.getElementsByClassName("number");
    for (let i = 0; i < 5; i++) {
        const randomNum = (getRandomIntInclusive(1, 99))
        numberElements[i].innerText = randomNum;
        randomNumArray.push(randomNum);
    }
    console.log(randomNumArray)
    setTimeout(timer, 7000);
}


playBtn.addEventListener('click', stampaNumeriRandom);
// (Ricordati di riscriverlo sull'event listener del btn invia)


function timer() {
    for (let i = 0; i < 5; i++) {
        numberElements[i].innerText = ('');
        // adesso prende l'index perchè l'ho inserito in un ciclo, ricordatelo pls!
    }
}




// FUNZIONI ------------------------------------

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

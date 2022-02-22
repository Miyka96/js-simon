const computerNumberWrapper = document.querySelector('.computer-number-wrapper');
let numberWrapper
let number
const playBtn = document.getElementById("play-btn");


for (let i = 0; i < 5; i++) {
    numberWrapper = document.createElement('div');
    numberWrapper.classList.add('number-wrapper');
    number = document.createElement('div');
    number.classList.add('number');
    computerNumberWrapper.append(numberWrapper);
    numberWrapper.append(number);
}

playBtn.addEventListener('click', function(){
   numberElements= document.getElementsByClassName("number");
   for (let i=0; i<5; i++){
    numberElements[i].append(getRandomIntInclusive(1, 20));
   }  
})




// FUNZIONI ------------------------------------

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

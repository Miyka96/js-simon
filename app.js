const computerNumberWrapper = document.querySelector('.computer-number-wrapper');
let numberWrapper
let number
const playBtn = document.getElementById("play-btn");
let numberGenerated
let numberArray = [];

for (let i = 0; i < 5; i++) {
    let numberWrapper = document.createElement('div');
    numberWrapper.classList.add('number-wrapper');
    let number = document.createElement('div');
    number.classList.add('number');
    computerNumberWrapper.append(numberWrapper);
    numberWrapper.append(number);
}

playBtn.addEventListener('click', function(){
    generateFiveNumbers(); 
})

function generateFiveNumbers (){
    for (let i=0 ; i<5 ;i++){
        let numberGenerated = getRandomIntInclusive(1, 20)   
        console.log(numberGenerated)
    }     
}






function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

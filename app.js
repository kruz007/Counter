bg = document.body.style
bg.backgroundColor = 'yellow'

let heading = document.querySelector('h2');
let res = document.querySelector('.res');
let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec')
let determinant = 0;


let decrease = () => {
    heading.innerText--
    if (heading.innerText > 0){
        bg.backgroundColor = 'green'
    } else if (heading.innerText < 0){
        bg.backgroundColor = 'red'
    } else {
        bg.backgroundColor = 'yellow'
    }
}
dec.addEventListener('click', decrease);



let increase = () => {
    heading.innerText++
    if (heading.innerText > 0){
        bg.backgroundColor = 'green'
    } else if (heading.innerText < 0){
        bg.backgroundColor = 'red'
    } else {
        bg.backgroundColor = 'yellow'
    }
};
inc.addEventListener('click', increase);



let reset = () => {
    heading.innerText = 0
    if (heading.innerText > 0){
        bg.backgroundColor = 'green'
    } else if (heading.innerText < 0){
        bg.backgroundColor = 'red'
    } else {
        bg.backgroundColor = 'yellow'
    }
}
res.addEventListener('click', reset);

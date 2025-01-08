const listaAnimais = document.querySelector('.animais-lista');

const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);


const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;

const rect = primeiroh2.getBoundingClientRect();


console.log(rect.top);

if(rect.top < 0){
    console.log('passou do elemento');
}

console.log(
    window.innerWidth,
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset,

);

const small = window.matchMedia('(max-width: 600)');

if(small){
    console.log('Usuario mobile')
}else{
    console.log('Usuario desktop')
}

console.log(small);

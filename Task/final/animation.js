


const sizes = document.querySelectorAll('.sizec');
const colors = document.querySelectorAll('.colorc');
const shoes = document.querySelectorAll('.shoec');
const gradients = document.querySelectorAll('.gradientc');
const shoeBg = document.querySelector('.shoeBackgroundc');

let prevColor = "blue";
let animationEnd = true;

function changeSize(){
    sizes.forEach(size => size.classList.remove('activec'));
    this.classList.add('activec');
}

function changeColor(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('colorc');
    let shoe = document.querySelector(`.shoec[colorc="${color}"]`);
    let gradient = document.querySelector(`.gradientc[colorc="${color}"]`);
    let prevGradient = document.querySelector(`.gradientc[colorc="${prevColor}"]`);

    if(color == prevColor) return;

    colors.forEach(c => c.classList.remove('activec'));
    this.classList.add('activec');

    document.documentElement.style.setProperty('--primary', primary);
    
    shoes.forEach(s => s.classList.remove('showc'));
    shoe.classList.add('showc');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height = `${shoeHeight * 0.9}px`;
    }
    else{
        shoeBg.style.height = "475px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);

















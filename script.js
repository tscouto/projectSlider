// let totalSlides = document.querySelectorAll('.slider--item').length;

// let currentSlide = 0;

// let sliderWidth = document.querySelector('.slider').clientWidth;

// document.querySelector('.slider--width').style.width =
//     `${sliderWidth * totalSlides}px`;

// document.querySelector('.slider--controls').style.width =
//     `${sliderWidth}px`;
// document.querySelector('.slider--controls').style.height =
//     `${document.querySelector('.slider').clientHeight}px`;

// function goPrev() {
//     currentSlide--;
//     if(currentSlide < 0) {
//         currentSlide = totalSlides - 1;
//     }
//     updateMargin();
// }
// function goNext() {
//     currentSlide++;
//     if(currentSlide > (totalSlides-1)) {
//         currentSlide = 0;
//     }
//     updateMargin();
// }

// function updateMargin() {
//     let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
//     let newMargin = (currentSlide * sliderItemWidth);
//     document.querySelector('.slider--width').style.marginLeft =
//         `-${newMargin}px`;
// }

// setInterval(goNext, 5000);

let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

// Ajustar largura do slider dinâmico
const sliderWidth = document.querySelector('.slider').clientWidth;
document.querySelector(
  '.slider--width'
).style.width = `calc(${sliderWidth}px * ${totalSlides})`;

document.querySelector('.slider--controls').style.height = `${
  document.querySelector('.slider').clientHeight
}px`;

function goPrev() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin();
}

function goNext() {
  currentSlide++;
  if (currentSlide > totalSlides - 1) {
    currentSlide = 0;
  }
  updateMargin();
}

function updateMargin() {
  const sliderItemWidth = document.querySelector('.slider').clientWidth;
  const newMargin = currentSlide * sliderItemWidth;
  document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

// Mudar automaticamente para o próximo slide a cada 4 segundos
let sliderInterval = setInterval(goNext, 4000);

// Pausar o slider ao passar o mouse
document.querySelector('.slider').addEventListener('mouseenter', () => {
  clearInterval(sliderInterval);
});

// Retomar o slider ao sair com o mouse
document.querySelector('.slider').addEventListener('mouseleave', () => {
  sliderInterval = setInterval(goNext, 4000);
});

// Ajustar o slider em caso de redimensionamento da tela
window.addEventListener('resize', () => {
  const sliderItemWidth = document.querySelector('.slider').clientWidth;
  document.querySelector(
    '.slider--width'
  ).style.width = `calc(${sliderItemWidth}px * ${totalSlides})`;
  updateMargin();
});

const slider = document.querySelectorAll('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
<<<<<<< HEAD
const single = document.querySelectorAll('.single-galeria');
const overflow = document.querySelectorAll('.overflow');
const conteudo = document.querySelectorAll('.conteudo')

=======
>>>>>>> d56b23bf2fedb9b492da7045b4db545ce8880118
let videoAtivo = 0;

function hideSlide() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlide() {
    slider[videoAtivo].classList.add('on')
}

function nextSlider() {
    hideSlide();
    if (videoAtivo == slider.length - 1 ) {
        videoAtivo = 0;
    } else {
        videoAtivo++
    }
    showSlide()
}

function prevSlider() {
    hideSlide();
    if (videoAtivo == 0 ) {
        videoAtivo = slider.length -1;
    } else {
        videoAtivo--
    }
    showSlide()
}

nextBtn.addEventListener('click', nextSlider)
prevBtn.addEventListener('click', prevSlider)
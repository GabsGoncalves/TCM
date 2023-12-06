const x = window.screen.width;
const slider = document.querySelectorAll('.videoSly');
const slider2 = document.querySelectorAll('.textoCaminho');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let videoAtivo = 0;

function hideSlide() {
    slider.forEach(item => item.classList.remove('on'))
    slider2.forEach(item => item.classList.remove('on'))
}

function showSlide() {
    slider[videoAtivo].classList.add('on')
    slider2[videoAtivo].classList.add('on')
}

function nextSlider() {
    hideSlide();
    if (videoAtivo == slider.length - 1 || videoAtivo == slider2.length - 1) {
        videoAtivo = 0;
    } else {
        videoAtivo++
    }
    showSlide();
}

function prevSlider() {
    hideSlide();
    if (videoAtivo == 0 ) {
        videoAtivo = slider.length -1;
        videoAtivo = slider2.length -1;
    } else {
        videoAtivo--
    }
    showSlide()
}

nextBtn.addEventListener('click', nextSlider)
prevBtn.addEventListener('click', prevSlider)
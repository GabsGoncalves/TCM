const x = window.screen.width;
const ferrao = document.querySelectorAll('.ferraoImg');
const custo = document.querySelectorAll('.custo');
const info = document.querySelectorAll('.info');
const nome = document.querySelectorAll('.titulo');
const cardFerrao = document.querySelectorAll('.cardFerrao');
var ferraoSelecionado = -1;
var mestreAtivo = -1;
const mestreIMG = document.querySelectorAll('.imgMestre');
const mestreTexto = document.querySelectorAll('.mestreTexto');
const iconArte = document.querySelectorAll('.iconArte');
const mestre = [
{"video": "<video class='videoArte' src='assets/video/corteSeco.mp4' autoplay muted loop></video>", "imagem": "<img src='assets/img_cavaleiro/Oro.webp'>", "textinho": "Oro ensina a habilidade Corte Impulsionado, que consiste em um ataque que vai junto ao seu dash, e atacando a sua frente."},
{"video": "<video class='videoArte' src='assets/video/corteCiclone.mp4' autoplay muted loop></video>", "imagem": "<img src='assets/img_cavaleiro/oro.gif'>", "textinho": "Mato ensina a habilidade Corte Ciclone, um ataque giratório que golpeia várias vezes."},
{"video": "<video class='videoArte' src='assets/video/corteBrabo.mp4' autoplay muted loop></video>", "imagem": "<img src='assets/img_cavaleiro/Sheo.webp'>", "textinho": "Sheo ensina a habilidade Grande Corte, que é um ataque forte com o ferrão, mas não precisa usar o dash. Tem um alcance grande, atingindo até alvos um pouco mais altos.  Seu movimento e rastro do ataque lembra muito uma pincelada de tinta."}
];

const slider = document.querySelectorAll('.videoSly');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let videoAtivo = 0;

for (let j=0; j < mestreIMG.length; j++) {
    mestreIMG[j].innerHTML = mestre[j].imagem;
}

function mostrarFerrao(estagio, titulo, infop, preco) {
    if (estagio === ferraoSelecionado) {
        ferrao[estagio].style.transform = "rotate(0deg) translateX(0) translateY(0)";
        cardFerrao[estagio].classList.remove('ativo');
        nome[estagio].innerHTML = "";
        info[estagio].innerHTML = "";
        custo[estagio].innerHTML = "";
        ferraoSelecionado = -1;
    } else {
        
        for (var i = 0; i < ferrao.length; i++) {
            ferrao[i].style.transform = "rotate(0deg) translateX(0) translateY(0)";
            cardFerrao[i].classList.remove('ativo');
            nome[i].innerHTML = "";
            info[i].innerHTML = "";
            custo[i].innerHTML = "";
        }
        if (x > 540) {
            ferrao[estagio].style.transform = "rotate(-90deg) translateX(190%) translateY(-60%)";
            cardFerrao[estagio].classList.add('ativo');
            nome[estagio].innerHTML = titulo;
            info[estagio].innerHTML = infop;
            custo[estagio].innerHTML = "Custo: " + preco;
            ferraoSelecionado = estagio;
        } else {
            ferrao[estagio].style.transform = "rotate(-90deg) translateX(90%) translateY(50%)";
            cardFerrao[estagio].classList.add('ativo');
            nome[estagio].innerHTML = titulo;
            info[estagio].innerHTML = infop;
            custo[estagio].innerHTML = "Custo: " + preco;
            ferraoSelecionado = estagio;
        }
    }
}


function mestrePoggers(id) {
    if (mestreAtivo !== -1) {
        iconArte[mestreAtivo].style.display = 'none';
        mestreIMG[mestreAtivo].innerHTML = mestre[mestreAtivo].imagem;
        mestreTexto[mestreAtivo].innerHTML = mestreTexto[id].innerHTML;
    }

    iconArte[id].style.display = 'grid';
    mestreIMG[id].innerHTML = mestre[id].video;
    mestreTexto[id].innerHTML = mestre[id].textinho;
    mestreAtivo = id;
}

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
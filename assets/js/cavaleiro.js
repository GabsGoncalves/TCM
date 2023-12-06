<<<<<<< HEAD
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
{"video": "<video class='videoArte' src='assets/video/mestres/corteSeco.mp4' autoplay muted loop></video>", "imagem": "<img src='assets/img_cavaleiro/Oro.webp'>", "textinho": "Oro teaches the ability of the Dash Slash, he is the only nailmaster that asks for Geo in exchange for teaching you the nail art.", "textoPadrao": "The Nailmaster Oro lives on the Kingdom's Edge, closed off from everyone. He distanced himself from his brothers and nailsage because of a fight with Mato."},
{"video": "<video class='videoArte' src='assets/video/mestres/corteCiclone.mp4' autoplay muted loop></video>", "imagem": "<img src='assets/img_cavaleiro/oro.gif'>", "textinho": "Mato teaches the ability of the Cyclone Slash and says he is willing to share his abilities to the next generation of nail wielders.", "textoPadrao": "The Nailmaster Mato lives on the Howling Cliffs, closed off from everyone. Mato resents Oro for something and says Oro owes him something he will never forget."},
{"video": "<video class='videoArte' src='assets/video/mestres/corteBrabo.mp4' autoplay muted loop></video>", "imagem": "<img src='assets/img_cavaleiro/Sheo.webp'>", "textinho": "Sheo teaches the ability of the Great Slash, he is said to be the strongest and mightiest amongst the three nailmasters.", "textoPadrao": "The Nailmaster Sheo lives on Greenpath, closed off from everyone. He decided to isolate himself to pursue a new art, the art of painting, sculpting, and creation of  various artworks. Later, he befriends and the Nailsmith (if you choose to spare the Nailsmith's life)"}
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
        cardFerrao[estagio].classList.remove('ativoC');
        nome[estagio].innerHTML = "";
        info[estagio].innerHTML = "";
        custo[estagio].innerHTML = "";
        ferraoSelecionado = -1;
    } else {
        
        for (var i = 0; i < ferrao.length; i++) {
            ferrao[i].style.transform = "rotate(0deg) translateX(0) translateY(0)";
            cardFerrao[i].classList.remove('ativoC');
            nome[i].innerHTML = "";
            info[i].innerHTML = "";
            custo[i].innerHTML = "";
        }
        if (x > 540) {
            ferrao[estagio].style.transform = "rotate(-90deg) translateX(190%) translateY(-60%)";
            cardFerrao[estagio].classList.add('ativoC');
            nome[estagio].innerHTML = titulo;
            info[estagio].innerHTML = infop;
            custo[estagio].innerHTML = "Custo: " + preco;
            ferraoSelecionado = estagio;
        } else {
            ferrao[estagio].style.transform = "rotate(-90deg) translateX(90%) translateY(50%)";
            cardFerrao[estagio].classList.add('ativoC');
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
        mestreTexto[mestreAtivo].innerHTML = mestre[id].textoPadrao;
    }
    mestreAtivo = id;
    iconArte[id].style.display = 'grid';
    mestreIMG[id].innerHTML = mestre[id].video;
    mestreTexto[id].innerHTML = mestre[id].textinho;
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
=======
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
{"video": "<video class='videoArte' src='assets/video/mestres/corteSeco.mp4' autoplay muted loop></video>", "imagem": "<img src='assets/img_cavaleiro/Oro.webp'>", "textinho": "Oro teaches the ability of the Dash Slash, he is the only nailmaster that asks for Geo in exchange for teaching you the nail art.", "textoPadrao": "The Nailmaster Oro lives on the Kingdom's Edge, closed off from everyone. He distanced himself from his brothers and nailsage because of a fight with Mato."},
{"video": "<video class='videoArte' src='assets/video/mestres/corteCiclone.mp4' autoplay muted loop></video>", "imagem": "<img src='assets/img_cavaleiro/oro.gif'>", "textinho": "Mato teaches the ability of the Cyclone Slash and says he is willing to share his abilities to the next generation of nail wielders.", "textoPadrao": "The Nailmaster Mato lives on the Howling Cliffs, closed off from everyone. Mato resents Oro for something and says Oro owes him something he will never forget."},
{"video": "<video class='videoArte' src='assets/video/mestres/corteBrabo.mp4' autoplay muted loop></video>", "imagem": "<img src='assets/img_cavaleiro/Sheo.webp'>", "textinho": "Sheo teaches the ability of the Great Slash, he is said to be the strongest and mightiest amongst the three nailmasters.", "textoPadrao": "The Nailmaster Sheo lives on Greenpath, closed off from everyone. He decided to isolate himself to pursue a new art, the art of painting, sculpting, and creation of  various artworks. Later, he befriends and the Nailsmith (if you choose to spare the Nailsmith's life)"}
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
        mestreTexto[mestreAtivo].innerHTML = mestre[id].textoPadrao;
    }
    mestreAtivo = id;
    iconArte[id].style.display = 'grid';
    mestreIMG[id].innerHTML = mestre[id].video;
    mestreTexto[id].innerHTML = mestre[id].textinho;
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
>>>>>>> d56b23bf2fedb9b492da7045b4db545ce8880118
prevBtn.addEventListener('click', prevSlider)
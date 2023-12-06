var menuMobile = document.querySelector('.new-mobile-menu');
let navItems = document.querySelectorAll('.new-nav-item');
let sim = document.querySelectorAll('.s');
let knight = document.querySelector('#knight');
let battle = document.querySelector('#battle');
let gallery = document.querySelector('#gallery');
let knightMobile = document.querySelector('#knightMobile');
let battleMobile = document.querySelector('#battleMobile');
let galleryMobile = document.querySelector('#galleryMobile');

function menuShow() {
    if (menuMobile.classList.contains('new-open')) {
        menuMobile.classList.remove('new-open');
        document.querySelector('.new-icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('new-open');
        document.querySelector('.new-icon').src = "assets/img/close_white_36dp.svg";
    }
}

function link(pag) {
    window.location.href = pag;
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animado");
        } else {
            entry.target.classList.remove("animado");
        }
    });
}, {
    threshold: [0, .25, .5, .75]
});

Array.from(document.querySelectorAll('[data-animar], [data-animar-fast], [data-animar-slow]')).forEach(element => {
    observer.observe(element);
});

function alternarFuncao() {
    document.querySelectorAll('.dropdown-menu').forEach(item => {
        item.style.display = 'none';
    })
    if (this.classList.contains('ativo')) {
      subDesativo.call(this);
      this.classList.remove('ativo');
    } else {
      subAtivo.call(this);
      this.classList.add('ativo');
    }
  }

function subAtivo() {
    var elementoId = this.id;
    document.querySelector(`.${elementoId}`).style.display = 'block';
}

function subDesativo() {
    var elementoId = this.id;
    document.querySelector(`.${elementoId}`).style.display = 'none';
}

knight.addEventListener('mouseover', subAtivo);
battle.addEventListener('mouseover', subAtivo);
gallery.addEventListener('mouseover', subAtivo);
knight.addEventListener('mouseout', subDesativo);
battle.addEventListener('mouseout', subDesativo);
gallery.addEventListener('mouseout', subDesativo);
knightMobile.addEventListener('click', alternarFuncao);
battleMobile.addEventListener('click', alternarFuncao);
galleryMobile.addEventListener('click', alternarFuncao);
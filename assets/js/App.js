var menuMobile = document.querySelector('.new-mobile-menu');
let navItems = document.querySelectorAll('.new-nav-item');

window.addEventListener('resize', margen())
function margen() {
    if (menuMobile.classList.contains('new-open')) {
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].style.margin = 0;
        }
    } else {
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].style.margin = '8px';
        } 
    }   
}


function menuShow() {
    if (menuMobile.classList.contains('new-open')) {
        menuMobile.classList.remove('new-open');
        document.querySelector('.new-icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('new-open');
        document.querySelector('.new-icon').src = "assets/img/close_white_36dp.svg";
    }
    margen();
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
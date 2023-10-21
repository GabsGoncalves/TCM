function menuShow() {
    let menuMobile = document.querySelector('.new-mobile-menu');
    if (menuMobile.classList.contains('new-open')) {
        menuMobile.classList.remove('new-open');
        document.querySelector('.new-icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('new-open');
        document.querySelector('.new-icon').src = "assets/img/close_white_36dp.svg";
    }
}
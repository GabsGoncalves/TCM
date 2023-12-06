const urlParams = new URLSearchParams(window.location.search);
const card = urlParams.get('card');
const dlcs = [document.querySelector('#main1'), document.querySelector('#main2'), document.querySelector('#main3'), document.querySelector('#main4')];
const bgimg = document.querySelector('.bg_img');
const bgIMGs = ['assets/img_dlc/grimmBG-transformed.webp', 'assets/img_dlc/hiddenBG.webp', 'assets/img_dlc/bgLife.webp', 'assets/img_dlc/godBG.webp']
exibirConteudoCard(card);


function exibirConteudoCard(card) {
    if (card === 'Grimm') {
        dlcs[0].style.display = "grid";
        bgimg.src = "assets/img_dlc/grimmBG-transformed.webp";
    } else if (card === 'Sonho') {
        dlcs[1].style.display = "grid";
        bgimg.src = "assets/img_dlc/hiddenBG.webp";
    } else if (card === 'Sangue') {
        dlcs[2].style.display = "grid";
        bgimg.src = "assets/img_dlc/bgLife.webp";
    } else if (card === 'God') {
        dlcs[3].style.display = "grid";
        bgimg.src = "assets/img_dlc/godBG.webp";
    }
}

function trocarDlc(indice, nome) {
<<<<<<< HEAD
=======
    let construtorCard = `boss.html?card=${nome}`
    document.querySelectorAll('.new-nav-link').forEach(function(link) {
        link.href = construtorCard;
      });
>>>>>>> d56b23bf2fedb9b492da7045b4db545ce8880118
    for (let j = 0; j < dlcs.length; j++) {
        dlcs[j].style.display = "none";
        bgimg.src = "";
    }

    for (let j = 0; j < dlcs.length; j++) {
        dlcs[indice].style.display = "grid";
        bgimg.src = bgIMGs[indice];
    }
}
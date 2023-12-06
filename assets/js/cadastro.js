var exit = document.querySelector('#exitImg');
var fotoPerfil = document.querySelector('#fotoPerfil');
var escolher = document.querySelector('.escolherImagem');
var inputs = document.querySelectorAll('.inputs');
escolher.style.display = 'none';

const labelImage = document.querySelectorAll('.labelImage');
    labelImage.forEach(escolhida => {
        escolhida.addEventListener('click', () => {
        labelImage.forEach(opt => opt.classList.remove('selected'));
        escolhida.classList.add('selected');
        escolhida.querySelector('input[type="radio"]').checked = true;
  });
});

function perfil() {
    escolher.style.display = 'none';
    fotoPerfil.style.display = 'block'
}

function foto() {
    escolher.style.display = 'block'
    fotoPerfil.style.display = 'none';
}

exit.addEventListener('click', perfil)
fotoPerfil.addEventListener('click', foto)
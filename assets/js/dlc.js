const info = document.querySelectorAll('.info');
const bgVideo = document.querySelectorAll('.bg_video');

for (let i=0; i < bgVideo.length; i++) {
    bgVideo[i].style.opacity = 0;
}
bgVideo[0].style.opacity = 1;

info[0].style.background = "linear-gradient(transparent, #d62e2e 58%)";
info[1].style.background = "linear-gradient(transparent, #653088 58%)";
info[2].style.background = "linear-gradient(transparent, #2947a7 58%)";
info[3].style.background = "linear-gradient(transparent, #927e0d 58%)";

function trocarFundo(indice) {
    bgVideo.forEach(item => item.style.transition = "opacity 0.4s");
    bgVideo.forEach(bg => bg.style.opacity = 0);
    bgVideo[indice].style.opacity = 1;
}
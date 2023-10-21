let vetorInformacoes = document.getElementsByClassName("info_magia")
function infoMagiaCompleto (cardID) {
    for (let i = 0; i < vetorInformacoes.length; i++) {
        vetorInformacoes[i].innerHTML = "";
        if (cardID == 'espirito') {
            vetorInformacoes[0].innerHTML = `                        
                <div class="links">
                    <p class="link1">Localização</p>
                    <a href="interacoes.html" class="link2">Interações</a>
                </div>
                <div id="textinho">
                    <p>
                        Conjure um espírito que voará para frente e queimará inimigos em seu caminho. <br>
                        O espírito passa por partes invulneráveis de um inimigo, como um escudo ou concha, mas não danificará um inimigo totalmente protegido
                    </p>
                </div>
                <div class="infoAdicional">
                    <div id="leiaMais">
                        <div onclick="infoAdicional()" id="coco">
                            <i id="arrowDown" class="setaBaixo large material-icons">arrow_drop_down</i>
                            <i id="arrowUp" class="setaCima large material-icons">arrow_drop_up</i>
                            <p>Clique para ver a Magia!</p>
                        </div>
                        <div id="infoAdicionalVideo_espirito">
                            <img class="videosMagias" id="infoVideo_espirito" src="assets/video/magiaVingativo.gif">
                        </div>
                    </div>
                </div>
            `
        } else if (cardID == 'rasante') {
            vetorInformacoes[1].innerHTML = `
                <div class="links">
                    <p class="link1">Localização</p>
                    <a href="interacoes.html" class="link2">Interações</a>
                </div>
                <div id="textinho">
                    <p>
                        Golpeie o solo com uma força concentrada de ALMA. Essa força pode destruir inimigos ou quebrar estruturas frágeis.
                    </p>
                </div>
                <div class="infoAdicional">
                    <div id="leiaMais">
                        <div id="coco" onclick="infoAdicional()">
                            <i id="arrowDown3" class="setaBaixo large material-icons">arrow_drop_down</i>
                            <i id="arrowUp3" class="setaCima large material-icons">arrow_drop_up</i>
                            <p>Clique para ver a Magia!</p>
                        </div>
                        <div id="infoAdicionalVideo_uivantes">
                            <img class="videosMagias" id="infoVideo_uivantes" src="assets/video/magiaUivantes.gif">
                        </div>
                    </div>
                </div>
            `
        } else if (cardID == 'uivantes') {
            vetorInformacoes[2].innerHTML = `
                <div class="links">
                    <p class="link1">Localização</p>
                    <a href="interacoes.html" class="link2">Interações</a>
                </div>
                <div id="textinho">
                    <p>
                        Destrua inimigos com ALMA gritante.
                    </p>
                </div>
                <div class="infoAdicional">
                    <div id="leiaMais">
                        <div id="coco" onclick="infoAdicional()">
                            <i id="arrowDown2" class="setaBaixo large material-icons">arrow_drop_down</i>
                            <i id="arrowUp2" class="setaCima large material-icons">arrow_drop_up</i>
                            <p>Clique para ver a Magia!</p>
                        </div>
                        <div id="infoAdicionalVideo_uivantes">
                            <img class="videosMagias" id="infoVideo_uivantes" src="assets/video/magiaRasante.gif">
                        </div>
                    </div>
                </div>
            `
        }
    }
}

function upgradeMagia (nomeMagia) {

    let imagemMagia = document.getElementsByClassName("title")
    imagemMagia[0].src = "assets/img_magias/espiritoUpgrade.svg"
    imagemMagia[1].src = "assets/img_magias/rasanteUpgrade.svg"
    imagemMagia[2].src = "assets/img_magias/espiritoUpgrade.svg"
    
    for (let i = 0; i < vetorInformacoes.length; i++) {
        vetorInformacoes[i].innerHTML = "";
        if (nomeMagia == 'espirito') {
            vetorInformacoes[0].innerHTML = `                        
                <div class="links">
                    <p class="link1">Localização</p>
                    <a href="interacoes.html" class="link2">Interações</a>
                </div>
                <div id="textinho">
                    <p>
                        Conjure uma sombra que voará para frentee queimará inimigos em seu caminho. <br>
                        O espírito passa por partes invulneráveis de um inimigo, como um escudo ou concha, mas não danificará um inimigo totalmente protegido
                    </p>
                </div>
                <div class="infoAdicional">
                    <div id="leiaMais">
                        <div onclick="infoAdicional()" id="coco">
                            <i id="arrowDown" class="setaBaixo large material-icons">arrow_drop_down</i>
                            <i id="arrowUp" class="setaCima large material-icons">arrow_drop_up</i>
                            <p>Clique para ver a Magia!</p>
                        </div>
                        <div id="infoAdicionalVideo_espirito">
                            <img class="videosMagias" id="infoVideo_espirito" src="assets/video/magiaVingativo.gif">
                        </div>
                    </div>
                </div>
            `
        } else if (nomeMagia == 'rasante') {
            vetorInformacoes[1].innerHTML = `
                <div class="links">
                    <p class="link1">Localização</p>
                    <a href="interacoes.html" class="link2">Interações</a>
                </div>
                <div id="textinho">
                    <p>
                        Golpeie o solo com uma força concentrada de ALMA e Sombra. Essa força pode destruir inimigos ou quebrar estruturas frágeis.
                    </p>
                </div>
                <div class="infoAdicional">
                    <div id="leiaMais">
                        <div id="coco" onclick="infoAdicional()">
                            <i id="arrowDown3" class="setaBaixo large material-icons">arrow_drop_down</i>
                            <i id="arrowUp3" class="setaCima large material-icons">arrow_drop_up</i>
                            <p>Clique para ver a Magia!</p>
                        </div>
                        <div id="infoAdicionalVideo_uivantes">
                            <img class="videosMagias" id="infoVideo_uivantes" src="assets/video/magiaUivantes.gif">
                        </div>
                    </div>
                </div>
            `
        } else if (nomeMagia == 'uivantes') {
            vetorInformacoes[2].innerHTML = `
                <div class="links">
                    <p class="link1">Localização</p>
                    <a href="interacoes.html" class="link2">Interações</a>
                </div>
                <div id="textinho">
                    <p>
                    Destrua inimigos com ALMA e Sombra gritantes.
                    </p>
                </div>
                <div class="infoAdicional">
                    <div id="leiaMais">
                        <div id="coco" onclick="infoAdicional()">
                            <i id="arrowDown2" class="setaBaixo large material-icons">arrow_drop_down</i>
                            <i id="arrowUp2" class="setaCima large material-icons">arrow_drop_up</i>
                            <p>Clique para ver a Magia!</p>
                        </div>
                        <div id="infoAdicionalVideo_uivantes">
                            <img class="videosMagias" id="infoVideo_uivantes" src="assets/video/magiaRasante.gif">
                        </div>
                    </div>
                </div>
            `
        }
    }
}

function infoAdicional() {
    let arrowUp = document.getElementsByClassName("setaCima");
    let arrowDown = document.getElementsByClassName("setaBaixo");
    let videosMagias = document.getElementsByClassName('videosMagias')

    for (let h = 0; h < videosMagias.length; h++) {
        arrowUp[h].style.display = (arrowUp[h].style.display == "block") ? 'none' : 'block';
        arrowDown[h].style.display = (arrowDown[h].style.display == "none") ? 'block' : 'none';
        if (arrowUp[h].style.display == 'block') {
            videosMagias[h].style.display = 'block'
        } else if (arrowDown[h].style.display == 'block') {
            videosMagias[h].style.display = 'none'
        }
    }
}
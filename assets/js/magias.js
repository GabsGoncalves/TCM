let vetorInformacoes = document.getElementsByClassName("info_magia")

function infoMagiaCompleto (cardID) {
    for (let i = 0; i < vetorInformacoes.length; i++) {
        vetorInformacoes[i].innerHTML = "";
        if (cardID == 'espirito') {
            vetorInformacoes[0].innerHTML = `                        
                <div id="textinho">
                <p>
                Conjure a spirit that will fly forward and burn enemies in its path. <br>
                The spirit passes through invulnerable parts of an enemy, such as a shield or shell, but will not damage a fully shielded enemy
            </p>
                </div>
                <div class="infoAdicional">
                    <div id="leiaMais">
                        <div onclick="infoAdicional()" id="coco">
                            <i id="arrowDown" class="setaBaixo large material-icons">arrow_drop_down</i>
                            <i id="arrowUp" class="setaCima large material-icons">arrow_drop_up</i>
                            <p>Click to See</p>
                        </div>
                        <div id="infoAdicionalVideo_espirito">
                            <img class="videosMagias" id="infoVideo_espirito" src="assets/video/magias/magiaVingativo.gif">
                        </div>
                    </div>
                </div>
            `
        } else if (cardID == 'rasante') {
            vetorInformacoes[1].innerHTML = `
                <div id="textinho">
                <p>
                Strike the ground with concentrated SOUL force. This force can destroy enemies or break fragile structures.
            </p>
                </div>
                <div class="infoAdicional">
                    <div id="leiaMais">
                        <div id="coco" onclick="infoAdicional()">
                            <i id="arrowDown3" class="setaBaixo large material-icons">arrow_drop_down</i>
                            <i id="arrowUp3" class="setaCima large material-icons">arrow_drop_up</i>
                            <p>Click to See</p>
                        </div>
                        <div id="infoAdicionalVideo_uivantes">
                            <img class="videosMagias" id="infoVideo_uivantes" src="assets/video/magias/magiaRasante.gif">
                        </div>
                    </div>
                </div>
            `
        } else if (cardID == 'uivantes') {
            vetorInformacoes[2].innerHTML = `
                <div id="textinho">
                <p>
                Destroy enemies with Screaming SOUL.
            </p>
                </div>
                <div class="infoAdicional">
                    <div id="leiaMais">
                        <div id="coco" onclick="infoAdicional()">
                            <i id="arrowDown2" class="setaBaixo large material-icons">arrow_drop_down</i>
                            <i id="arrowUp2" class="setaCima large material-icons">arrow_drop_up</i>
                            <p>Click to See</p>
                        </div>
                        <div id="infoAdicionalVideo_uivantes">
                            <img class="videosMagias" id="infoVideo_uivantes" src="assets/video/magias/magiaUivantes.gif">
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
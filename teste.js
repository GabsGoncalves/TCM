const fs = require('fs');
const path = require('path');

const folderPath = __dirname; // Substitua com o caminho da sua pasta

// Função para substituir o código nos arquivos PHP
function replaceCodeInFiles(folderPath) {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('Erro ao ler a pasta:', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(folderPath, file);
            if (path.extname(file) === '.php') {
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        console.error('Erro ao ler o arquivo:', err);
                        return;
                    }

                    // Realiza a substituição do código
                    const updatedContent = data.replace(
                        /<header>[\s\S]*?<\/header>/g,
                        `
                        <header>
                        <nav class="new-nav-bar">
                            <div class="new-logo">
                                <img src="assets/img/Hollow_Icon.svg" alt="">
                            </div>
                            <div class="new-nav-list">
                                <ul class="ben10">
                                    <li class="new-nav-item"><a href="index.html" class="new-nav-link">Home</a></li>
                                    <li id="knight" class="new-nav-item new-nav-link dropdown">Knight <img class="caretKnight" src="assets/img/caret-down-fill.svg" alt="">
                                        <div class="dropdown-menu knight">
                                            <a href="amuletos.html" class="new-nav-link">Charms</a>
                                            <a href="cavaleiro.html" class="new-nav-link">The Nail</a>
                                            <a href="magias.html" class="new-nav-link">Spells</a>
                                            <a href="dark.html" class="new-nav-link">Born</a>
                                            <a href="energias.html" class="new-nav-link">Energys</a>
                                        </div>
                                    </li>
                                    <li id="battle" class="new-nav-item new-nav-link dropdown">Battle <img class="caretBattle" src="assets/img/caret-down-fill.svg" alt="">
                                        <div class="dropdown-menu battle">
                                            <a href="coliseu.html" class="new-nav-link">Colosseum</a>
                                            <a href="panteao.html" class="new-nav-link">Pantheon</a>
                                            <a href="radiancia.html" class="new-nav-link">Radiance</a>
                                        </div>
                                    </li>
                                    <li id="gallery" class="new-nav-item new-nav-link dropdown">Gallery <img class="caretGallery" src="assets/img/caret-down-fill.svg" alt="">
                                        <div class="dropdown-menu gallery">
                                            <a href="dark.html" class="new-nav-link">Born</a>
                                            <a href="galeriaCenarios.html" class="new-nav-link">Scenes</a>
                                        </div>
                                    </li>
                                    <li class="new-nav-item"><a href="dlc.html" class="new-nav-link">DLC</a></li>
                                    <li class="new-nav-item"><a href="sonhadores.html" class="new-nav-link">Dreamers</a></li>
                                    <li class="new-nav-item"><a href="silksong.html" class="new-nav-link">Silksong</a></li>
                                    <li class="new-nav-item"><a href="florDelicada.html" class="new-nav-link">Delicate Flower</a></li>
                                    <li class="new-nav-item"><a href="quiz.html" class="new-nav-link">Quiz</a></li>
                                </ul>
                            </div>
                            <div class="new-login-button">
                                <button onclick="link('login.html')">Login</button>
                            </div>
                
                            <div class="new-mobile-menu-icon">
                                <button onclick="menuShow()"><img class="new-icon" src="assets/img/menu_white_36dp.svg" alt=""></button>
                            </div>
                        </nav>
                        <div class="new-mobile-menu">
                            <ul class="ben10">
                                <li class="new-nav-item"><a href="index.html" class="new-nav-link">Home</a></li>
                                <li id="knightMobile" class="new-nav-item new-nav-link dropdown">Knight <img class="caretKnight" src="assets/img/caret-down-fill.svg" alt="">
                                    <div class="dropdown-menu knightMobile">
                                        <a href="amuletos.html" class="new-nav-link">Charms</a>
                                        <a href="cavaleiro.html" class="new-nav-link">The Nail</a>
                                        <a href="magias.html" class="new-nav-link">Spells</a>
                                        <a href="dark.html" class="new-nav-link">Born</a>
                                        <a href="energias.html" class="new-nav-link">Energys</a>
                                    </div>
                                </li>
                                <li id="battleMobile" class="new-nav-item new-nav-link dropdown">Battle <img class="caretBattle" src="assets/img/caret-down-fill.svg" alt="">
                                    <div class="dropdown-menu battleMobile">
                                        <a href="coliseu.html" class="new-nav-link">Colosseum</a>
                                        <a href="panteao.html" class="new-nav-link">Pantheon</a>
                                        <a href="radiancia.html" class="new-nav-link">Radiance</a>
                                    </div>
                                </li>
                                <li id="galleryMobile" class="new-nav-item new-nav-link dropdown">Gallery <img class="caretGallery" src="assets/img/caret-down-fill.svg" alt="">
                                    <div class="dropdown-menu galleryMobile">
                                        <a href="dark.html" class="new-nav-link">Born</a>
                                        <a href="galeriaCenarios.html" class="new-nav-link">Scenes</a>
                                    </div>
                                </li>
                                <li class="new-nav-item"><a href="dlc.html" class="new-nav-link">DLC</a></li>
                                <li class="new-nav-item"><a href="sonhadores.html" class="new-nav-link">Dreamers</a></li>
                                <li class="new-nav-item"><a href="silksong.html" class="new-nav-link">Silksong</a></li>
                                <li class="new-nav-item"><a href="florDelicada.html" class="new-nav-link">Delicate Flower</a></li>
                                <li class="new-nav-item"><a href="quiz.html" class="new-nav-link">Quiz</a></li>
                            </ul>
                            <div class="new-login-button">
                                <button onclick="link('login.html')">Login</button>
                            </div>
                        </div>
                    </header>
    `
                    );

                    // Escreve o conteúdo atualizado de volta no arquivo
                    fs.writeFile(filePath, updatedContent, 'utf8', err => {
                        if (err) {
                            console.error('Erro ao escrever no arquivo:', err);
                            return;
                        }
                        console.log(`Código substituído em ${file}`);
                    });
                });
            }
        });
    });
}

// Chamada da função para substituir o código
replaceCodeInFiles(folderPath);
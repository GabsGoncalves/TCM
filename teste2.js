const fs = require('fs');
const path = require('path');

const folderPath = __dirname; // Substitua com o caminho da sua pasta

function renameAndModifyFiles(folderPath) {
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

                    // Remove a tag <?php ?> e seu conteúdo
                    const modifiedContent = data.replace(/<\?php[\s\S]*?\?>/g, '');

                    // Renomeia o arquivo para .html
                    const newFilePath = path.join(folderPath, path.basename(file, '.php') + '.html');

                    // Escreve o conteúdo modificado no arquivo .html
                    fs.writeFile(newFilePath, modifiedContent, 'utf8', err => {
                        if (err) {
                            console.error('Erro ao escrever no arquivo:', err);
                            return;
                        }

                        // Remove o arquivo .php após criar o .html
                        fs.unlink(filePath, err => {
                            if (err) {
                                console.error('Erro ao excluir o arquivo .php:', err);
                                return;
                            }
                            console.log(`Arquivo ${file} modificado para ${path.basename(file, '.php')}.html`);
                        });
                    });
                });
            }
        });
    });
}

renameAndModifyFiles(folderPath);

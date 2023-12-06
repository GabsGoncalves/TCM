const fs = require('fs');
const path = require('path');

const directoryPath = __dirname; // Usa __dirname para referenciar o diretório atual

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Erro ao ler o diretório:', err);
  }

  files.forEach(function (file) {
    const oldPath = path.join(directoryPath, file);
    const newName = file.replace(/\s/g, ''); // Remove espaços no nome do arquivo
    const newPath = path.join(directoryPath, newName);

    if (file !== newName) {
      fs.rename(oldPath, newPath, function (err) {
        if (err) {
          console.log(`Erro ao renomear ${file}:`, err);
        } else {
          console.log(`Nome do arquivo alterado: ${file} -> ${newName}`);
        }
      });
    }
  });
});
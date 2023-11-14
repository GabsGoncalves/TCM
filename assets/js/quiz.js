var alternativa = document.querySelectorAll('.alternativa')
var inputs = document.querySelectorAll('.inputs');
var resultado = document.querySelector('#Resultado');
var contador = document.querySelector('.contador');
var q = 0; 
var geo = 0; 
var acertos = 0;
var quizEscolhido;
var quizArray = [
  [
    { "Enunciado": "What is the name of this character?", "Imagem": "assets/img_quiz/ogrim.webp", "A": "Quirrel", "B": "Hornet", "C": "Ogrim", "D": "Sly", "Gabarito": 2 },
    { "Enunciado": "Who is the true final boss?", "A": "Radiance", "B": "Absolute Radiance", "C": "Zote", "D": "Hornet", "Gabarito": 1 },
    { "Enunciado": "What is the name of the main city in the game?", "Imagem": "", "A": "Greenpath", "B": "Dirtmouth", "C": "Hallownest", "D": "Deepnest", "Gabarito": 1 },
    { "Enunciado": "Who is sealed in the Black Egg?", "Imagem": "", "A": "Hollow Knight", "B": "Zote", "C": "Quirrel", "D": "Lost Kim", "Gabarito": 0 },
    { "Enunciado": "Throughout the game, you summon the troupe of...?", "Imagem": "", "A": "King", "B": "Uumuu", "C": "Tiso", "D": "Grimm", "Gabarito": 3 }
  ],
  [
    { "Enunciado": "What is this character's name?", "Imagem": "assets/img_quiz/ogrim.webp", "A": "Quirrel", "B": "Hornet", "C": "Ogrim", "D": "Sly", "Gabarito": 2 },
    { "Enunciado": "What is this character's name?", "Imagem": "assets/img/pranteadora.webp", "A": "Radiance", "B": "Gray Mourner", "C": "Zote", "D": "Hornet", "Gabarito": 1 },
    { "Enunciado": "What is this character's name?", "Imagem": "assets/img_dlc/hiveKnight.webp", "A": "Nosk", "B": "Hive Knight", "C": "No Eyes", "D": "Markoth", "Gabarito": 1 },
    { "Enunciado": "What is this character's name?", "Imagem": "assets/img_quiz/zote.webp", "A": "Zote", "B": "Cavaleiro Vazio", "C": "Quirrel", "D": "Parente Perdido", "Gabarito": 0 },
    { "Enunciado": "What is this character's name?", "Imagem": "assets/img_quiz/anciao.webp", "A": "Myla", "B": "Bardoon", "C": "Midwife", "D": "Elderbug", "Gabarito": 3 }
  ], 
  [
    { "Enunciado": "In what area is it obtained? <br> Quicky Slash Charm", "Imagem": "", "A": "Crystal Peak", "B": "Kingdom's Edge", "C": "Greenpath", "D": "Royal Waterways", "Gabarito": 1 },
    { "Enunciado": "In what area is it obtained? <br> Howling Wraiths", "Imagem": "", "A": "Mantis Village", "B": "Fungal Wastes", "C": "Fog Canyon", "D": "Queen Gardens", "Gabarito": 3 },
    { "Enunciado": "In what area is it obtained? <br> Arcane Egg", "Imagem": "", "A": "Birthplace", "B": "Greepath", "C": "Fungal Wastes", "D": "Deepnest", "Gabarito": 0 },
    { "Enunciado": "In what area is it obtained? <br> Isma's tear", "Imagem": "", "A": "Ancient Basin", "B": "Royal Waterways", "C": "The Hive", "D": "God Home", "Gabarito": 1 },
    { "Enunciado": "In what area is it obtained? <br> King's Brand", "Imagem": "", "A": "City of Tears", "B": "Blue Lake", "C": "Kingdom's Edge", "D": "Crystal Peak", "Gabarito": 2 }
  ],
  [
    { "Enunciado": "How to swim in acid?", "Imagem": "", "A": "Acid Protection Charm", "B": "With Dark Cloak", "C": "With King's Mark", "D": "With Isma's Tear", "Gabarito": 3 },
    { "Enunciado": "Who calls Quirrel?",  "Imagem": "", "A": "Monomon, The Teacher", "B": "Lurien, The Observer", "C": "Hornet", "D": "Uumuu", "Gabarito": 0 },
    { "Enunciado": "How many amulets are present in the game?", "Imagem": "", "A": "40", "B": "42", "C": "32", "D": "45", "Gabarito": 3 },
    { "Enunciado": "Where is your birthplace?", "Imagem": "", "A": "Distant Village", "B": "The Abyss", "C": "King's Pass", "D": "Kingdom's Edge", "Gabarito": 1 },
    { "Enunciado": "How many battles with Gray Prince Zote do we have in the dream world?", "Imagem": "", "A": "11", "B": "16", "C": "11", "D": "10", "Gabarito": 3 }
  ]
];

function comecarQuiz() {
  document.querySelector('#comecar').style.display = 'none';
  document.querySelector('#avancar').style.display = 'flex';
  document.querySelector('#Area').style.display = 'grid';
  document.querySelector('#formQuiz').style.display = 'block';
  inputs.forEach(function (e) {
    e.style.display = 'block';
  });
  quizEscolhido = quizArray[Math.floor(Math.random() * quizArray.length)];
  console.log(quizEscolhido);
  contador.innerHTML = `${0}/${quizEscolhido.length}`;  
  avancarQuiz();
}


function avancarQuiz() {
  if (q < quizEscolhido.length) {
    document.querySelector('#pergunta').innerHTML = quizEscolhido[q].Enunciado;
    alternativa[0].innerHTML = quizEscolhido[q].A;
    alternativa[1].innerHTML = quizEscolhido[q].B;
    alternativa[2].innerHTML = quizEscolhido[q].C;
    alternativa[3].innerHTML = quizEscolhido[q].D;
    document.querySelector('.usuario').innerHTML = `${q + 1}/${quizEscolhido.length}`
    if (quizEscolhido[q].Imagem != null) {
      document.querySelector('#imagemQuiz').style.display = 'block';
      document.querySelector('#imagemQuiz').src = quizEscolhido[q].Imagem;
    } else {
      document.querySelector('#imagemQuiz').style.display = 'none';
    }
  } else {
    fimQuiz();
  }
}

function pontuar() {
  if (inputs[quizEscolhido[q].Gabarito].checked) {
    contador.style.backgroundColor = 'rgba(31, 183, 27, 0.53)';
    geo = geo + 100;
    acertos = acertos + 1;
    contador.innerHTML = `${acertos}/${quizEscolhido.length}`;
    document.cookie = "pontosArmazenados=" + geo;
  } else {
    contador.style.backgroundColor = 'rgba(208, 33, 33, 0.53)';
  }
  q++;
  avancarQuiz();
}


function fimQuiz() {
  document.querySelector('#quiz').style.display = 'none';
  resultado.style.display = 'flex';
  resultado.innerHTML = `<h1>CONGRATULATIONS YOU CLAIM ${geo} geo</h1> <button id='voltar'><a href='home.php' style='text-decoration: none; color: #fff;'>Go back</a></button>`;
}

function perfil() {
  document.querySelector('#infosPerfil').style.display = document.querySelector('#infosPerfil').style.display === 'block' ? 'none' : 'block';
}
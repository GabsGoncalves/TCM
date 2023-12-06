function infosAmuleto(nomeAmuleto, cardInfo, cardInfo2, cardImagem) {
    x = window.screen.width;
    y = window.screen.height;

    if(x < 541){
        document.getElementById("nome_amuleto_mobile").innerHTML = nomeAmuleto;
        document.getElementById("cardInfo_mobile").innerHTML = cardInfo;
        document.getElementById("cardInfo2_mobile").innerHTML = cardInfo2;
        document.getElementById("cardImagem_mobile").src = cardImagem;
    } else {
        document.getElementById("nome_amuleto").innerHTML = nomeAmuleto;
        document.getElementById("cardInfo").innerHTML = cardInfo;
        document.getElementById("cardInfo2").innerHTML = cardInfo2;
        document.getElementById("cardImagem").src = cardImagem;
    }
}
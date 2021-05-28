//Criei a Function e dei o nome CARREGAR
function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem") 
    //Aqui criei a variável data para verificar a data atual   
    var data = new Date()
    //Aqui criei a variável hora para verificar a hora atual
    var hora = data.getHours() 
    //Aqui vai imprimir a hora atual na tela
    msg.innerHTML = `Agora são ${hora} horas!`

    if(hora >= 0 && hora < 12){
        //BOM DIA / Para carregar a imagem dentro da regra o IF ou ELSE escolhida eu inseri o arquivo da imagem 
        img.src = "manha.png"
        //Aqui eu utilizei o CSS para definir uma cor de fundo pro BODY diferente para cada imagem de acordo como horário
        document.body.style.background = "green"
    }
    else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = "tarde.png"
        document.body.style.background = "yellow"
    }
    else{
        //BOA NOITE
        img.src = "noite.png"
        document.body.style.background = "blue"
    }

}

let amigosParticipantes = []

function adicionar(){
    let nomeInput = document.getElementById('nome-amigo').value.toUpperCase();
    amigosParticipantes.push(nomeInput);
    document.querySelector('.friends__container').innerHTML = `<p id="lista-amigos">${amigosParticipantes}</p>`;
    document.getElementById('nome-amigo').value = '';
}

function sortear(){
    let nomesFront = document.querySelector('.prizeDraw__container');
    let amigosEmbaralhados = amigosParticipantes.sort(() => Math.random() - 0.5);

    let duplas = [];
    let cont = 0;

    for (let i = 0; i < (amigosEmbaralhados.length); i++){//4
  
        if (cont <= 1){
            duplas.push(amigosEmbaralhados[i])
            if(duplas.length == 2){
                let duplasFormatadas = duplas.join(' -> '); //O . join substitui o separador "," por " -> " Faça um alert da lista duplasformatadas p ver
                nomesFront.innerHTML =nomesFront.innerHTML + `<p id="lista-sorteio">${duplasFormatadas}</p>`;
                duplas = [];
                cont = 0;
            }
            else{
                cont++;
            }
        } 
    }
}

function reiniciar(){
    amigosParticipantes = []
    document.querySelector('.prizeDraw__container').textContent = '';
    document.querySelector('.friends__container').innerHTML = `<p id="lista-amigos"></p>`;
}

//Validar se existe número par de participantes e alertar
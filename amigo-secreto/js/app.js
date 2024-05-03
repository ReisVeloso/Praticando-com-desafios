let amigosParticipantes = []

function adicionar(){
    let nomeInput = document.getElementById('nome-amigo').value.toUpperCase().trim(); //Busca valor do input o trim é para eliminar espaços vazios
    if(amigosParticipantes.includes(nomeInput)){
        alert('Nome repetido');
    }
    else if(nomeInput == '' ){
        alert('Nome vazio, gentileza adicionar um nome válido');
    }
    else{
        amigosParticipantes.push(nomeInput); //adiciona input à lista
        document.querySelector('.friends__container').innerHTML = `<p id="lista-amigos">${amigosParticipantes}</p>`;//adiciona a lista no front no campo Amigos incluídos
    }
    document.getElementById('nome-amigo').value = '';//limpa o campo input
}

function sortear(){

    if(amigosParticipantes.length <= 3){
        alert('Adicione mais participantes para deixar o jogo mais legal !!!');
    }
    else{
        let nomesFront = document.querySelector('.prizeDraw__container');
        let amigosEmbaralhados = amigosParticipantes.sort(() => Math.random() - 0.5);
    
        for (let i = 0; i < (amigosEmbaralhados.length); i++){
            if((amigosEmbaralhados.length -1) == i){
                nomesFront.innerHTML = nomesFront.innerHTML + `<p id="lista-sorteio">${amigosEmbaralhados[i]} --> ${amigosEmbaralhados[0]}</p>`;
            }
            else{
                nomesFront.innerHTML = nomesFront.innerHTML + `<p id="lista-sorteio">${amigosEmbaralhados[i]} --> ${amigosEmbaralhados[i+1]}</p>`;
            }
        }
    }
}

function reiniciar(){
    amigosParticipantes = []
    document.querySelector('.prizeDraw__container').textContent = '';
    document.querySelector('.friends__container').innerHTML = `<p id="lista-amigos"></p>`;
}
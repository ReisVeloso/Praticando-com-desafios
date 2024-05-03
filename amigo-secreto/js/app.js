let amigosParticipantes = []

function adicionar(){
    let nomeInput = document.getElementById('nome-amigo').value.toUpperCase(); //Busca valor do input
    if(amigosParticipantes.includes(nomeInput)){
        alert('Nome repetido');
    }
    else{
        amigosParticipantes.push(nomeInput); //adiciona input à lista
        document.querySelector('.friends__container').innerHTML = `<p id="lista-amigos">${amigosParticipantes}</p>`;//adiciona a lista no front no campo Amigos incluídos
    }
    document.getElementById('nome-amigo').value = '';//limpa o campo input
}

function sortear(){
    if(amigosParticipantes.length %2 === 0){
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
    else{
        alert('Adicione mais um membro para termos um número par de participantes');
    }
}

function reiniciar(){
    amigosParticipantes = []
    document.querySelector('.prizeDraw__container').textContent = '';
    document.querySelector('.friends__container').innerHTML = `<p id="lista-amigos"></p>`;
}


function validacoes(){
    
}

//Validar se existe número par de participantes e alertar
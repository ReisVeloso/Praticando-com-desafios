function sortear (){
    numeroInicial = parseInt(document.querySelector('#de').value);
    numeroFinal = parseInt(document.querySelector('#ate').value);
    quantidadeNumeros = parseInt(document.querySelector('#quantidade').value);

    let listaNumero = [];

    if(numeroInicial < numeroFinal && quantidadeNumeros <= (numeroFinal-(numeroInicial-1))){
        for(let i = 0; i < quantidadeNumeros; i++){
            numeroGerado = gerarNumero(numeroInicial, numeroFinal);
            while(listaNumero.includes(numeroGerado)){
                numeroGerado = gerarNumero(numeroInicial, numeroFinal);
            }
            listaNumero.push(numeroGerado);
        }
        console.log(listaNumero);
        modificarTela('#resposta', listaNumero);
        document.querySelector('#btn-reiniciar').setAttribute('class','container__botao'); //Trocar atributo do button para ativo   
    }
    else{
        reiniciar();
        numeroInicial > numeroFinal? alert(`O atributo "Do número" deve ser menor do que o atributo "Até o número"`):alert(`Observe se a quantidade de números desejados cabem dentro do intervalo informado`);
    }
     
}

function gerarNumero(min, max){
    let numeroGerado = Math.floor(Math.random()* (max - min +1))+min;
    return numeroGerado;
}

function modificarTela (idModificar, novotexto){
    let telaDeResultado = document.querySelector(idModificar);
    telaDeResultado.innerHTML = novotexto;
}

function reiniciar(){
    document.querySelector('#quantidade').value = '';
    document.querySelector('#de').value = '';
    document.querySelector('#ate').value = '';
    modificarTela('#resposta', 'Números sorteados:  nenhum até agora');
    document.querySelector('#btn-reiniciar').setAttribute('class','container__botao-desabilitado');
}
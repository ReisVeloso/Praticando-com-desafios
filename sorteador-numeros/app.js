let numInicial = parseInt(1);
let numFinal = parseInt(3);
let listaNumSorteado = [];
let userNumber = 2;
let numeroSecreto = '';


function clickSortear (){
    geraNumSecreto();
    compararNum();
    console.log(`O número gerado foi ${numeroSecreto}`);
}

function geraNumSecreto (){
    
    let num = '';
    if(listaNumSorteado.length < numFinal){ 
        num = parseInt((Math.random() * numFinal )+ numInicial);
        while(listaNumSorteado.includes(num)){
            num = parseInt((Math.random() * numFinal )+ numInicial);
        }

        listaNumSorteado.push(num);
        console.log(num);    
    }
    else{
        console.log(`Fim de Jogo! ${listaNumSorteado}`);
    }

    numeroSecreto = num;
    return num;
}


function compararNum(){
    if(numeroSecreto < userNumber){
        console.log(` O número secreto é menor`);
    }
    else if(numeroSecreto < userNumber){
        console.log(` O número secreto é maior`);
    }
    else{
        console.log(`Você venceu!!!`);
    }
}
let pista = 100;
let CadeiraSuperior =200;
let cadeiraInferior =400;

function comprar(){
    let tipoDeEntrada = document.getElementById("tipo-ingresso").value;
    let qtd = document.getElementById('qtd').value;
    atualizarBD(tipoDeEntrada, qtd);
}

function atualizarBD (tipo, qtdAdquirida){
    if (tipo === 'pista'){
        pista = pista - qtdAdquirida;
        let atualizarValor = document.getElementById('qtd-pista');
        atualizarValor.innerText = pista;
    }
    else if(tipo === 'superior'){
        CadeiraSuperior = CadeiraSuperior - qtdAdquirida;
        let atualizarValor = document.getElementById('qtd-superior');
        atualizarValor.innerText = CadeiraSuperior;
    }
    else{
        cadeiraInferior = cadeiraInferior -qtdAdquirida;
        let atualizarValor = document.getElementById('qtd-inferior');
        atualizarValor.innerText = cadeiraInferior;
    }
    
}

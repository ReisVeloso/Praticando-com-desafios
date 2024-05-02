let pista = parseInt(document.querySelector('.lista #qtd-pista').textContent);
let CadeiraSuperior = parseInt(document.querySelector('.lista #qtd-superior').textContent);
let cadeiraInferior = parseInt(document.querySelector('.lista #qtd-inferior').textContent);

alert(typeof(CadeiraSuperior));
alert(CadeiraSuperior)

function comprar(){
    let tipoDeEntrada = document.getElementById("tipo-ingresso").value;
    let qtd = document.getElementById('qtd').value;
    atualizarBD(tipoDeEntrada, qtd);
}

function atualizarBD (tipo, qtdAdquirida){
    if (tipo === 'pista'){
        if(qtdAdquirida > pista){
            alert(`Quantidade de ingresso indisponível`);
        }
        else{
            pista = pista - qtdAdquirida;
            let atualizarValor = document.getElementById('qtd-pista');
            atualizarValor.innerText = pista;
        }  
    }
    else if(tipo === 'superior'){
        if(qtdAdquirida > CadeiraSuperior){
            alert(`Quantidade de ingresso indisponível`);
        }
        else{
            CadeiraSuperior = CadeiraSuperior - qtdAdquirida;
            let atualizarValor = document.getElementById('qtd-superior');
            atualizarValor.innerText = CadeiraSuperior;
        }
    }
    else{
        if(qtdAdquirida > cadeiraInferior){
            alert(`Quantidade de ingresso indisponível`);
        }
        else{
            cadeiraInferior = cadeiraInferior -qtdAdquirida;
            let atualizarValor = document.getElementById('qtd-inferior');
            atualizarValor.innerText = cadeiraInferior;
        }
    } 
}

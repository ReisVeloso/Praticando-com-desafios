let listaDeProdutos = [];

let produto = {
    nome: '',
    quantidade: 0, 
    valorUnidade: 0,
    valorTotal: 0,
}


function adicionar(){
    //Buscando valores do front
    let selectListaProdutos = document.getElementById('produto');// Entrando dentro da tag principal
    let selecIndex = selectListaProdutos.selectedIndex; //0 -> Seleciona o index (posição na lista) do produto
    let selectedValue = selectListaProdutos.options[selecIndex].value; // Fone de ouvido - R$ 100 -- value"" e não o texto option vem da tag option
    let numericValue = parseFloat(selectedValue.split(" - ")[1].replace("R$", "")); // 100 -> O split transforma o texto em duas strings uma antes e uma depois do caracter -
    let selectName =  selectedValue.split(" - ")[0];// Fone de ouvido
    let getQuantidade = parseInt(document.querySelector('#quantidade').value); // Pega o value de dentro do input Padrão = 1

    //Adicionando valores no objeto produto
    produto.nome = selectName;
    produto.quantidade = getQuantidade;
    produto.valorUnidade = numericValue;
    produto.valorTotal = getQuantidade*numericValue;

    // Criando novo objeto independente (sem "linkar") e adicionando os valores nele, pois se adicionarmos o obj produto direto um link entre eles é criado e quando adicionamos a copia com os ... cria-se uma cópia independente
    let copiaProduto = {...produto}; //fazer o push dela
    

    //Adicionando objeto na lista de objetos Se produto já existir, modificar quantidade


    let add = listaDeProdutos.filter((produtoFiltrado) => objteste(produtoFiltrado));
    alert('p');
    function adicionar(){
        listaDeProdutos.push(copiaProduto);
    }
    function modificar(){
        alert('Modificar quantidade');
    }

    function objteste(prodFilt){
        console.log(prodFilt);
    }


}
PeriodicWave

function mostrarNoCarrinho (){
    
    for(let i = 0; i< listaDeProdutos.length; i++){
        let produtoNaLista = (listaDeProdutos[i]);
        //console.log(produtoNaLista.nome);
        //console.log(produtoNaLista.quantidade);
        //console.log(produtoNaLista.valorUnidade);
    }
}


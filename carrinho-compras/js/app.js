let listaDeProdutos = [];
limpar();


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

    let addProduto = listaDeProdutos.filter((produtoFiltrado, indice) => produtoFiltrado.nome === selectName);

    if(listaDeProdutos.length == 0 || addProduto == 0){
        listaDeProdutos.push(copiaProduto);
    }
    else{
        var indexProdutos = listaDeProdutos.findIndex((produtoNaLista) => produtoNaLista.nome === copiaProduto.nome); //Qual o index do produto na lista principai que é equiparado ao produto que estou atuando (copia)
        let novaQuantidade = addProduto[0].quantidade = addProduto[0].quantidade + getQuantidade;
    }

    mostrarNaTela();
}

function mostrarNaTela (){
    //Buscando e atualizando o valor total do carrinho
    let buscarTotalCarrinho = document.querySelector('.carrinho__total');
    let totaldoCarrinho = 0;
    for(let i = 0; i< listaDeProdutos.length ; i++){
        totaldoCarrinho = totaldoCarrinho + listaDeProdutos[i].valorUnidade*listaDeProdutos[i].quantidade;
    }
    buscarTotalCarrinho.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${totaldoCarrinho}</span>`;

    //Buscando e atualizando a lista, lembrando que pegamos o id/class da tag de fora e atualizamos com o que tem dentro dela mas com nossas informações

    let carrinho = document.querySelector('#lista-produtos');
    carrinho.innerHTML = '';
    for(let i = 0; i<3 ;i++){
        carrinho.innerHTML = carrinho.innerHTML + `\n<section class="carrinho__produtos__produto">
        <span class="texto-azul">${listaDeProdutos[i].quantidade}x</span> ${listaDeProdutos[i].nome} 
        <span class="texto-azul">R$ ${listaDeProdutos[i].valorUnidade*listaDeProdutos[i].quantidade}</span>
        </section>`
    }
}

function limpar(){
    listaDeProdutos = [];
    let carrinhoLimpar = document.querySelector('#lista-produtos');
    carrinhoLimpar.innerHTML = '';

    document.querySelector('.carrinho__total').innerHTML = ''; //Forma reduzida 
}

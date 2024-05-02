

function adicionar(){
    let nomeInput = document.getElementById('nome-amigo').value;
    alert(nomeInput);
    let listaAmigos = document.querySelector('#section--results, .friends__container');
    alert(listaAmigos);
    listaAmigos.innerHTML = <p id="lista-amigos">olá</p>
}
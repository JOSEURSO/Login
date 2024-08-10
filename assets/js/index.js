if (localStorage.getItem("token") == null){
    alert("voce precisa estar logado para essa página");
    window.location.href = "./assets/html/signin.html";
}


let userLogado = JSON.parse(localStorage.getItem('userLogado'));

let logado = document.querySelector('#logado');
logado.innerHTML = `olá ${userLogado.nome}`;

function sair(){
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./assets/html/signin.html";
}
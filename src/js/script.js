buttonCima = document.getElementById("btn-opcoes-cima");
buttonVoltar = document.getElementById("btn-voltar");

if (buttonCima){
    buttonCima.onclick = function() {
        window.location.href = "./src/pages/lista-modos.html";
    }
}

if (buttonVoltar){
    buttonVoltar.onclick = function() {
        window.location.href = "../../index.html";
    }
}
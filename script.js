



function toggleBotao (element) {
    console.log(element);
    let selecionarComida = document.querySelector(".comida .selecionado");

    let selecionarBebida = document.querySelector(".bebida .selecionado");

    let selecionarSobremesa = document.querySelector(".sobremesa .selecionado");

    let botao = document.querySelector(".aceso")

    if (selecionarComida !== null && selecionarBebida !== null && selecionarSobremesa !== null) {
        botao.classList.remove("escondido")
    }
}

//funçao que seleciona uma comida e adiciona a classe selecionado quando clica
//e desmarca os já clicados

function toggleComida (element) {
    
    console.log(element);
    const selecionar = document.querySelector(".selecionado");
    if (selecionar !== null) {
        selecionar.classList.remove("selecionado")
    }
    element.classList.add("selecionado")

    toggleBotao();
    
}

//funcao que seleciona bebida e desmarca ja clicados
function toggleBebida (element) {
    console.log(element);   
    const selecionar = document.querySelector(".bebida .selecionado");
    if (selecionar !== null) {
        selecionar.classList.remove("selecionado")
    }
    element.classList.add("selecionado")
    
    toggleBotao();


}

//funcao que seleciona sobremesa e desmarca ja clicados
function toggleSobremesa (element) {
    console.log(element);   
    const selecionar = document.querySelector(".sobremesa .selecionado");
    if (selecionar !== null) {
        selecionar.classList.remove("selecionado")
    }
    element.classList.add("selecionado")

    toggleBotao();
}

//checkmark?


// fazer o botao de pedido com tipo:
//if comida, bebida, sobremesa contains selecionado, o botao funciona 
//add class? add onclick?

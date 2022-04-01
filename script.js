
//funçao que seleciona uma comida e adiciona a classe selecionado quando clica
//e desmarca os já clicados


function toggleComida (element) {
    console.log(element);
    const selecionar = document.querySelector(".selecionado");
    if (selecionar !== null) {
        selecionar.classList.remove("selecionado")
    }
    element.classList.add("selecionado")
}

//funcao que seleciona bebida e desmarca ja clicados
function toggleBebida (element) {
    console.log(element);   
    const selecionar = document.querySelector(".bebida .selecionado");
    if (selecionar !== null) {
        selecionar.classList.remove("selecionado")
    }
    element.classList.add("selecionado")
}

//funcao que seleciona sobremesa e desmarca ja clicados
function toggleSobremesa (element) {
    console.log(element);   
    const selecionar = document.querySelector(".sobremesa .selecionado");
    if (selecionar !== null) {
        selecionar.classList.remove("selecionado")
    }
    element.classList.add("selecionado")
}


